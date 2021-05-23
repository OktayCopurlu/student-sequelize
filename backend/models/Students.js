const db = require('../index')
const Sequelize =require("sequelize");

  const Student = db.define("oktay_students", {
    firstName: 
    {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    className: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    }
  });

// use it to force to create the db from scratch 
// .sync({ force: true })
Student.sync().then(() => {
  console.log("Table Created.");
});


module.exports =Student;