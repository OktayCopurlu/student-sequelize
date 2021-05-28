const Teacher = require("../models/Teacher");

async function getAll(){
  return await Teacher.findAll(); 
}

async function findById(pId){
  return await Teacher.findByPk(pId);
}

 async function create(pTeacher){
  return await Teacher.create(pTeacher);
}

async function remove(pId){
  return await Teacher.destroy({
    where: { id: pId }
  })
}
 async function update(pId, pUpdatedTeacher){
  return await Teacher.update(pUpdatedTeacher, {
    where: { id: pId }
  });
}

module.exports ={ getAll,findById,create,update,remove}