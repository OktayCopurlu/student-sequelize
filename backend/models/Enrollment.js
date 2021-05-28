const db = require('../index')
const Sequelize =require("sequelize");

  const Enrollment = db.define("oktay_enrollment", {
    teacherId: 
    {
      type: Sequelize.STRING
    },
    lectureId: {
      type: Sequelize.STRING
    },
    studentId: {
        type: Sequelize.STRING
      }
  });

// use it to force to create the db from scratch 
// .sync({ force: true })
Enrollment.sync().then(() => {
  console.log("Enrollment's Table Created.");
});


module.exports = Enrollment;