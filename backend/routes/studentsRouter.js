const router = require("express").Router();

const {  createStudent,
  deleteStudent,
  getAllStudents,
  getStudentById,
  updateStudent} = require("../services/student")


 router.get("/", async function (req, res, next) {
  let studentList =await getAllStudents()
  return await  res.status(200).send(studentList);


});


/** Add a new student */
 router.post('/', async function(req, res, next) {
  const newStudent = req.body;
  const createdStudent = await createStudent(newStudent);
  return await res.status(201).send(createdStudent);
});

/** get a student by id */
router.get('/:id', async function(req, res, next) {
  let studentId = req.params.id;
  const student = await getStudentById(studentId)
  return await res.send(student);
});


/** delete a student by id */
router.delete('/:id', async function(req, res, next) {
  let studentId = await req.params.id;
  await deleteStudent(studentId);
  return await res.status(200).send({});
});

/** update a student by id */
router.put('/:id', async function(req, res, next) {
  let pId = req.params.id;
  let pUpdatedStudent = req.body;
  let UpdatedStudent = await updateStudent(pId, pUpdatedStudent);
 return await res.status(200).send(UpdatedStudent);
});

module.exports = router;