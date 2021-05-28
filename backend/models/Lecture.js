const db = require('../index')
const Sequelize =require("sequelize");

  const Lecture = db.define("oktay_lecture", {
    name: 
    {
      type: Sequelize.STRING
    },
 
  });

// use it to force to create the db from scratch 
// .sync({ force: true })
Lecture.sync().then(() => {
  console.log("Lecture's Table Created.");
});


module.exports =Lecture;