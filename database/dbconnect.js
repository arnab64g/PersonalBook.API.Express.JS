const Sequelize = require("sequelize");

//  const sequelize = new Sequelize('userdb', 'root', '5656', {
//    host: 'localhost',
//    dialect:  'mysql'
//  });  
const sequelize = new Sequelize('postgresql://app:mM75u3Pa6ukafcY57d2A70a7@externally-giving-cat.a1.pgedge.io/expressdb?sslmode=require')
// const sequelize = new Sequelize('postgres', 'postgres', '5656', {
//   host : 'localhost',
//   dialect : 'postgres'
// });
// postgresql://app:2NTE64d0Ef5iqjk15l23SEn7@physically-quick-mako.a1.pgedge.io/defaultdb?sslmode=require
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("../models/user")(sequelize, Sequelize);

db.SecondaryResult = require("../models/secondaryResult")(sequelize, Sequelize);
db.Grade = require("../models/grade")(sequelize, Sequelize);
db.Semester = require("../models/semester")(sequelize, Sequelize);
db.Course = require("../models/course")(sequelize, Sequelize);
db.Result = require("../models/result")(sequelize, Sequelize);
db.Expense = require("../models/expense")(sequelize, Sequelize);

db.SecondaryResult.belongsTo(db.Grade, {foreignKey: 'gradeId'});
db.Grade.hasOne (db.SecondaryResult, {foreignKey: 'gradeId'});

db.Result.belongsTo(db.Course, {foreignKey: 'courseId'});
db.Result.belongsTo(db.Semester, {foreignKey: 'semesterId'});
db.Result.belongsTo(db.Grade, {foreignKey: 'gradeId'});
db.Course.hasOne(db.Result, {foreignKey: 'courseId'});
db.Semester.hasOne(db.Result, {foreignKey: 'semesterId'});
db.Grade.hasOne(db.Result, {foreignKey: 'gradeId'})

module.exports = db;
