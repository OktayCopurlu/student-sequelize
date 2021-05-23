const Student = require("../models/Students");

async function getAll(){
  return await Student.findAll(); 
}

async function findById(pId){
  return await Student.findByPk(pId);
}

 async function create(pStudent){
  return await Student.create(pStudent);
}

async function remove(pId){
  return await Student.destroy({
    where: { id: pId }
  })
}
 async function update(pId, pUpdatedStudent){
  return await Student.update(pUpdatedStudent, {
    where: { id: pId }
  });
}

module.exports ={ getAll,findById,create,update,remove}