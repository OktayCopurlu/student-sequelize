const router = require("express").Router();

const {  createTeacher,
  deleteTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher} = require("../services/teacher")


 router.get("/", async function (req, res, next) {
  let TeacherList =await getAllTeachers()
  return await  res.status(200).send(TeacherList);


});


/** Add a new movie */
 router.post('/', async function(req, res, next) {
  const newTeacher = req.body;
  const createdTeacher = await createTeacher(newTeacher);
  return await res.status(201).send(createdTeacher);
});

/** get a movie by id */
router.get('/:id', async function(req, res, next) {
  let TeacherId = req.params.id;
  const Teacher = await getTeacherById(TeacherId)
  return await res.send(Teacher);
});


/** delete a movie by id */
router.delete('/:id', async function(req, res, next) {
  let TeacherId = await req.params.id;
  await deleteTeacher(TeacherId);
  return await res.status(200).send({});
});

/** update a movie by id */
router.put('/:id', async function(req, res, next) {
  let pId = req.params.id;
  let pUpdatedTeacher = req.body;
  let UpdatedTeacher = await updateTeacher(pId, pUpdatedTeacher);
 return await res.status(200).send(UpdatedTeacher);
});

module.exports = router;