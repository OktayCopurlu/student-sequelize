const db = require("../index");
const Sequelize = require("sequelize");

const Enrollment = db.define("oktay_enrollment", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: { type: Sequelize.STRING },
  teacherId: {
    type: Sequelize.INTEGER,
  },
  lectureId: {
    type: Sequelize.INTEGER,
  },
  studentId: {
    type: Sequelize.INTEGER,
  },
});

// use it to force to create the db from scratch
// .sync({ force: true })
Enrollment.sync().then(() => {
  console.log("Enrollment's Table Created.");
});

module.exports = Enrollment;
