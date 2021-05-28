const router = require("express").Router();

const {  createLecture,
  deleteLecture,
  getAllLecture,
  getLectureById,
  updateLecture} = require("../services/lecture")


 router.get("/", async function (req, res, next) {
  let LectureList =await getAllLecture()
  return await  res.status(200).send(LectureList);


});


/** Add a new movie */
 router.post('/', async function(req, res, next) {
  const newLecture = req.body;
  const createdLecture = await createLecture(newLecture);
  return await res.status(201).send(createdLecture);
});

/** get a movie by id */
router.get('/:id', async function(req, res, next) {
  let LectureId = req.params.id;
  const Lecture = await getLectureById(LectureId)
  return await res.send(Lecture);
});


/** delete a movie by id */
router.delete('/:id', async function(req, res, next) {
  let LectureId = await req.params.id;
  await deleteLecture(LectureId);
  return await res.status(200).send({});
});

/** update a movie by id */
router.put('/:id', async function(req, res, next) {
  let pId = req.params.id;
  let pUpdatedLecture = req.body;
  let UpdatedLecture = await updateLecture(pId, pUpdatedLecture);
 return await res.status(200).send(UpdatedLecture);
});

module.exports = router;