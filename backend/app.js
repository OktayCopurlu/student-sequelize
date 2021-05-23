const express =require( 'express');

// Middlewares
const cookieParser =require( 'cookie-parser');
const logger =require( 'morgan');
const cors =require('cors');

const studentsRouter =require('./routes/studentsRouter.js');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/oktay_students', studentsRouter);



app.listen(3000, ()=>{
    console.log("listening on 3000");
});