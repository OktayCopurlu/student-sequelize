const express =require( 'express');

// Middlewares
const cookieParser =require( 'cookie-parser');
const logger =require( 'morgan');
const cors =require('cors');

const studentsRouter =require('./routes/studentsRouter.js');
const teacherRouter =require('./routes/teacherRouter.js');
const enrollmentRouter =require('./routes/enrollmentRouter.js');
const lectureRouter =require('./routes/lectureRouter.js');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/oktay_students', studentsRouter);
app.use('/oktay_teacher', teacherRouter);
app.use('/oktay_enrollment', enrollmentRouter);
app.use('/oktay_lecture', lectureRouter);




app.listen(3000, ()=>{
    console.log("listening on 3000");
});