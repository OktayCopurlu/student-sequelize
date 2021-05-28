
const {getAll,findById,remove,create,update} = require("../repository/Lecture");


async function createLecture(pLecture) {
 return await create(pLecture);
};

async function deleteLecture(pId) {
 return await remove(pId);
};

async function getAllLecture() {
 return await getAll();
};

async function getLectureById(pId) {
 let movie = await findById(pId);
 return movie;
};

async function updateLecture(pId, pUpdatedLecture) {
 let movie = await update(pId, pUpdatedLecture);
 return movie;
};

module.exports ={
 createLecture,
 deleteLecture,
 getAllLecture,
 getLectureById,
 updateLecture
}