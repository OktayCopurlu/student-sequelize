import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      {" "}
      <h1 className="d-flex justify-content-center">Welcome to React School Registration Api</h1>
      <div className="container navbar navbar-expand-lg navbar-light bg-light"> 
        <NavLink className="mr-2  alert alert-danger " to="/createStudent">
          Create student
        </NavLink>

        <NavLink className="mr-2  alert alert-danger " to="/createTeacher">
          Create teacher
        </NavLink>

        <NavLink className="mr-2  alert alert-danger " to="/createLecture">
          Create lecture
        </NavLink>

        <NavLink className="mr-2  alert alert-danger " to="/createEnrollment">
          Create enrollment
        </NavLink>

        <NavLink className="mr-2  alert alert-danger " to="/studentList">
          Student list
        </NavLink>
        <NavLink className="mr-2  alert alert-danger " to="/teacherList">
          Teacher list
        </NavLink>
        <NavLink className="mr-2  alert alert-danger " to="/lectureList">
          Lecture list
        </NavLink>
        <NavLink className="mr-2  alert alert-danger " to="/enrollmentList">
          Enrollment list
        </NavLink>
      </div>
    </>
  );
}
