const db = require('../index')
const Sequelize =require("sequelize");

  const Teacher = db.define("oktay_teacher", {
    firstName: 
    {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  });

// use it to force to create the db from scratch 
// .sync({ force: true })
Teacher.sync().then(() => {
  console.log("Teacher's Table Created.");
});


module.exports =Teacher;