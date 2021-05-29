import React, { useState, useEffect } from "react";

export default function CreateEnrollment() {
  const [student, setStudent] = useState([]);
  const [choosedStudent, setChoosedStudent] = useState();
  const [teacher, setTeacher] = useState([]);
  const [choosedTeacher, setChoosedTeacher] = useState();
  const [lecture, setLecture] = useState([]);
  const [choosedLacture, setChoosedLecture] = useState();
  const [name, setName] = useState()
console.log(name,choosedLacture,choosedStudent,choosedTeacher)

  useEffect(() => {
    fetch("http://localhost:3000/oktay_students/")
      .then((response) => response.json())
      .then((response) => setStudent(response))
      .catch((err) => console.log("Error :" + err));

    fetch("http://localhost:3000/oktay_teacher/")
      .then((response) => response.json())
      .then((response) => setTeacher(response))
      .catch((err) => console.log("Error :" + err));

    fetch("http://localhost:3000/oktay_lecture/")
      .then((response) => response.json())
      .then((response) => setLecture(response))
      .catch((err) => console.log("Error :" + err));
  }, []);

  function onSubmit(event) {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name:name,lectureId:choosedLacture, studentId:choosedStudent,teacherId:choosedTeacher

      }),
    };

    fetch("http://localhost:3000/oktay_enrollment/", requestOptions)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.log("Error :" + err));
  }

  return (
    <div className="container">
      <div className="row createWish-row">
        <div className="col">
          <form className="form-create" onSubmit={onSubmit}><div className="form-group">
              <label htmlFor="title">Enrollment Name </label>
              <input
                required
                className="form-control"
                type="text"
                name="name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <select
              class="form-select"
              onChange={(event) => setChoosedStudent(event.target.value)}
              required
              aria-label="select example"
            >
              <label htmlFor="title">Choose Student</label>
              <option default value="">
                Choose Student
              </option>
              {student.map((stdnt, index) => {
                return (
                  <option key={index} value={stdnt.id}>
                    {stdnt.firstName} {stdnt.lastName}
                  </option>
                );
              })}
            </select>
            <select
              class="form-select"
              onChange={(event) => setChoosedTeacher(event.target.value)}
              required
              aria-label="select example"
            >
              <option htmlFor="title">Choose Teacher</option>
            
              {teacher.map((tchr, index) => {
                return (
                  <option key={index} value={tchr.id}>
                    {tchr.firstName}
                    {tchr.lastName}
                  </option>
                );
              })}
            </select>
            <select
              class="form-select"
              onChange={(event) => setChoosedLecture(event.target.value)}
              required
              aria-label="select example"
            >
            
              <option default value="">
                Choose Lecture
              </option>
              {lecture.map((lctr, index) => {
                return (
                  <option key={index} value={lctr.id}>
                    {lctr.name}
                  </option>
                );
              })}
            </select>

            <div className="form-group">
              <input
                type="submit"
                value="Create Enrollment"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
