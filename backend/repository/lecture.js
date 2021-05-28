const Lecture = require("../models/Lecture");

async function getAll(){
  return await Lecture.findAll(); 
}

async function findById(pId){
  return await Lecture.findByPk(pId);
}

 async function create(pLecture){
  return await Lecture.create(pLecture);
}

async function remove(pId){
  return await Lecture.destroy({
    where: { id: pId }
  })
}
 async function update(pId, pUpdatedLecture){
  return await Lecture.update(pUpdatedLecture, {
    where: { id: pId }
  });
}

module.exports ={ getAll,findById,create,update,remove}