const db = require("../database/dbconnect");

const addResultAsync = async (result) =>{
    return await db.Result.create({
        userId : result.userId,
        semesterId : result.semesterId,
        gradeId : result.gradeId,
        courseId : result.courseId
    });
}

const updateResultAsync = async (result) => {
    return await db.Result.update({
        userId : result.userId,
        semesterId : result.semesterId,
        gradeId : result.gradeId,
        courseId : result.courseId
    },{
        where :{
            id : result.id
        }
    });
}

const getResultsAsync = async (userId) => {
    let result = {
        results : [],
        summary : [],
        totalPoints : 0,
        totalCredit : 0
    }

    result.results = await db.Result.findAll({
        include : [db.Course, db.Semester, db.Grade],
        attributes : ['id', 'semesterId', 'Semester_pb.semesterName', 'Semester_pb.monthBng', 
            'Semester_pb.year', 'Course_pb.courseCode', 'Course_pb.courseTitle', 'gradeId', 
            'courseId', 'Grade_pb.gradeName', 'Grade_pb.points', 'Course_pb.creditPoint'], 
        where : {
            userId : userId
        },
        raw : true
    });

    const points = await db.Result.findAll({
        
        attributes : [[db.sequelize.literal("sum(points*\"creditPoint\")"), 'totalPoints']],
        include : [
            {model : db.Grade, attributes : []},
            {model : db.Course, attributes: []}
        ],
        where : {
            userId : userId
        },
        group : ['Result_pb.userId'],
        raw : true
    });

    result.summary = await db.Result.findAll({
        
        attributes : [['semesterId' , 'semId'], [db.sequelize.literal("sum(points*\"creditPoint\")"), 'totalPoints'],
                [db.sequelize.literal("sum(\"creditPoint\")"), "totalCredit"]], 
            
        include : [
            {model : db.Grade, attributes : []},
            {model : db.Course, attributes: []},
            {model : db.Semester, attributes: []}
        ],
        where : {
            userId : userId
        },
        group : ['semId'],
        raw : true
    });
    
    const credit = 
     await db.Result.findAll({
        attributes : [[db.sequelize.literal("sum(\"creditPoint\")"), "totalCredits"]],
        include :{
            model : db.Course,
            attributes : []
        },
        where : {
            userId : userId
        },
        group :[ 'Result_pb.userId']
    });

    if (points.length) {
        result.totalPoints = Number(points[0].totalPoints);
    }
    else{
        result.totalPoints = 0;
    }
    
    if (credit.length) {
        result.totalCredit = Number(credit[0].dataValues.totalCredits);
    }
    else{
        result.totalCredit = 0;
    }
    
    console.log(result);
    return result;
}

const deleteResultAsync = async (id) => {
    return await db.Result.destroy({
        where : {
            id : id
        }
    });
}

const hasSemesterAsync = async (semesterId) => {
    return await db.Result.findOne({
        where : {
            semesterId : semesterId
        }
    })
}

const hasCourseAsync = async (courseId) =>{
    return await db.Result.findOne({
        where :{
            courseId : courseId
        }
    })
}

const hasGradeAsync = async (gradeId) => {
    return await db.Result.findOne({where:{
        gradeId : gradeId
    }})
}

module.exports = {
    addResultAsync,
    getResultsAsync,
    updateResultAsync,
    deleteResultAsync,
    hasSemesterAsync,
    hasCourseAsync,
    hasGradeAsync
}