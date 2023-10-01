const Sequelize = require("sequelize");

const sequelize = new Sequelize('userdb', 'root', '5656', {
  host: 'localhost',
  dialect:  'mysql'
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require("../models/user")(sequelize, Sequelize);
db.Grade = require("../models/grade")(sequelize, Sequelize);
db.Semester = require("../models/semester")(sequelize, Sequelize);

module.exports = db;
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}