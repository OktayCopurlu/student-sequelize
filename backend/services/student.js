
const {getAll,findById,remove,create,update} = require("../repository/students");


 async function createStudent(pStudent) {
  return await create(pStudent);
};

async function deleteStudent(pId) {
  return await remove(pId);
};

 async function getAllStudents() {
  return await getAll();
};

 async function getStudentById(pId) {
  let movie = await findById(pId);
  return movie;
};

async function updateStudent(pId, pUpdatedStudent) {
  let movie = await update(pId, pUpdatedStudent);
  return movie;
};

module.exports ={
  createStudent,
  deleteStudent,
  getAllStudents,
  getStudentById,
  updateStudent
}