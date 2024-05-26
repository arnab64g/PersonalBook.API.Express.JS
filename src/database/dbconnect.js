const Sequelize = require("sequelize");
const sequelize = new Sequelize('postgresql://admin:7hYbMh60tn28g33662iwRJDV@unlikely-trusting-lizard.a1.pgedge.io/notelogix?sslmode=require');
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("../models/user")(sequelize);

db.SecondaryResult = require("../models/secondaryResult")(sequelize);
db.Grade = require("../models/grade")(sequelize);
db.Semester = require("../models/semester")(sequelize);
db.Course = require("../models/course")(sequelize);
db.Result = require("../models/result")(sequelize);
db.Expense = require("../models/expense")(sequelize);

db.SecondaryResult.belongsTo(db.Grade, {foreignKey: 'gradeId'});
db.Grade.hasOne (db.SecondaryResult, {foreignKey: 'gradeId'});

db.Result.belongsTo(db.Course, {foreignKey: 'courseId'});
db.Result.belongsTo(db.Semester, {foreignKey: 'semesterId'});
db.Result.belongsTo(db.Grade, {foreignKey: 'gradeId'});
db.Course.hasOne(db.Result, {foreignKey: 'courseId'});
db.Semester.hasOne(db.Result, {foreignKey: 'semesterId'});
db.Grade.hasOne(db.Result, {foreignKey: 'gradeId'})

module.exports = db;
