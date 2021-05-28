
const {getAll,findById,remove,create,update} = require("../repository/Enrollment");


async function createEnrollment(pEnrollment) {
 return await create(pEnrollment);
};

async function deleteEnrollment(pId) {
 return await remove(pId);
};

async function getAllEnrollment() {
 return await getAll();
};

async function getEnrollmentById(pId) {
 let movie = await findById(pId);
 return movie;
};

async function updateEnrollment(pId, pUpdatedEnrollment) {
 let movie = await update(pId, pUpdatedEnrollment);
 return movie;
};

module.exports ={
 createEnrollment,
 deleteEnrollment,
 getAllEnrollment,
 getEnrollmentById,
 updateEnrollment
}