import React from "react";
import CreateStudent from "./CreateStudent";
import CreateTeacher from "./CreateTeacher";
import CreateLecture from "./CreateLecture";
import CreateEnrollment from "./CreateEnrollment";
import StudentList from "./StudentList";
import TeacherList from "./TeacherList";
import LectureList from "./LectureList";
import EnrollmentList from "./EnrollmentList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

export default function App() {
  return (
    
    <Router><Home />
      <Switch>
        <Route exact path="/">
          {" "}
         
        </Route>
       
        <div className="container">
        
          <Route path="/createStudent">
            {" "}
            <CreateStudent />
          </Route>

          <Route path="/createTeacher">
            {" "}
            <CreateTeacher />
          </Route>

          <Route path="/createLecture">
            <CreateLecture />
          </Route>

          <Route path="/createEnrollment">
            <CreateEnrollment />
          </Route>

          <Route path="/studentList">
            {" "}
            <StudentList />
          </Route>

          <Route path="/teacherList">
            {" "}
            <TeacherList />
          </Route>

          <Route path="/lectureList">
            {" "}
            <LectureList />
          </Route>

          <Route path="/enrollmentList">
            {" "}
            <EnrollmentList />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}
