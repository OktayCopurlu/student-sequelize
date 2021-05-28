const Enrollment = require("../models/Enrollment");

async function getAll(){
  return await Enrollment.findAll(); 
}

async function findById(pId){
  return await Enrollment.findByPk(pId);
}

 async function create(pEnrollment){
  return await Enrollment.create(pEnrollment);
}

async function remove(pId){
  return await Enrollment.destroy({
    where: { id: pId }
  })
}
 async function update(pId, pUpdatedEnrollment){
  return await Enrollment.update(pUpdatedEnrollment, {
    where: { id: pId }
  });
}

module.exports ={ getAll,findById,create,update,remove}