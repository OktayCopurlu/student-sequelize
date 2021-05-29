const router = require("express").Router();

const {  createEnrollment,
  deleteEnrollment,
  getAllEnrollment,
  getEnrollmentById,
  updateEnrollment} = require("../services/enrollment")


 router.get("/", async function (req, res, next) {
  let EnrollmentList =await getAllEnrollment()
  return await  res.status(200).send(EnrollmentList);


});


/** Add a new enrollment */
 router.post('/', async function(req, res, next) {
  const newEnrollment = req.body;
  const createdEnrollment = await createEnrollment(newEnrollment);
  return await res.status(201).send(createdEnrollment);
});

/** get a enrollment by id */
router.get('/:id', async function(req, res, next) {
  let EnrollmentId = req.params.id;
  const Enrollment = await getEnrollmentById(EnrollmentId)
  return await res.send(Enrollment);
});


/** delete a enrollment by id */
router.delete('/:id', async function(req, res, next) {
  let EnrollmentId = await req.params.id;
  await deleteEnrollment(EnrollmentId);
  return await res.status(200).send({});
});

/** update a enrollment by id */
router.put('/:id', async function(req, res, next) {
  let pId = req.params.id;
  let pUpdatedEnrollment = req.body;
  let UpdatedEnrollment = await updateEnrollment(pId, pUpdatedEnrollment);
 return await res.status(200).send(UpdatedEnrollment);
});

module.exports = router;