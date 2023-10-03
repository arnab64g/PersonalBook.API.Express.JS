const Sequelize = require("sequelize");

const sequelize = new Sequelize('userdb', 'root', '5656', {
  host: 'localhost',
  dialect:  'mysql'
});

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

db.SecondaryResult.belongsTo(db.Grade, {foreignKey: 'gradeId'})
db.Grade.hasOne (db.SecondaryResult, {foreignKey: 'gradeId'});

module.exports = db;
