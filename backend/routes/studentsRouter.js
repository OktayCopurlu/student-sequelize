const router = require("express").Router();

const {  createStudent,
  deleteStudent,
  getAllStudents,
  getStudentById,
  updateStudent} = require("../services/student")


 router.get("/", async function (req, res, next) {
  let studentList =await getAllStudents()
  res.status(200).send(studentList);

  // Student.findAll()
  // .then(student=>{
  //   res.send(student);
  // })

});


/** Add a new movie */
 router.post('/', async function(req, res, next) {
  const newStudent = req.body;
  const createdStudent = await createStudent(newStudent);
  res.status(201).send(createdStudent);
});

/** get a movie by id */
router.get('/:id', async function(req, res, next) {
  let studentId = req.params.id;
  const student = await getStudentById(studentId)
  res.send(student);
});


/** delete a movie by id */
router.delete('/:id', async function(req, res, next) {
  let studentId = req.params.id;
  await deleteStudent(studentId);
  res.status(200).send({});
});

/** update a movie by id */
router.put('/:id', async function(req, res, next) {
  let pId = req.params.id;
  let pUpdatedStudent = req.body;
  let UpdatedStudent = await updateStudent(pId, pUpdatedStudent);
  res.status(200).send(UpdatedStudent);
});

module.exports = router;