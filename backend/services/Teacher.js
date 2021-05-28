
const {getAll,findById,remove,create,update} = require("../repository/Teacher");


async function createTeacher(pTeacher) {
 return await create(pTeacher);
};

async function deleteTeacher(pId) {
 return await remove(pId);
};

async function getAllTeachers() {
 return await getAll();
};

async function getTeacherById(pId) {
 let movie = await findById(pId);
 return movie;
};

async function updateTeacher(pId, pUpdatedTeacher) {
 let movie = await update(pId, pUpdatedTeacher);
 return movie;
};

module.exports ={
 createTeacher,
 deleteTeacher,
 getAllTeachers,
 getTeacherById,
 updateTeacher
}