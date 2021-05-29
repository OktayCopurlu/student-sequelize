import React, { useState, useEffect } from "react";

export default function StudentList() {
  const [ennrollment, setEnrollment] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/oktay_enrollment/")
      .then((response) => response.json())
      .then((response) => setEnrollment(response))

      .catch((err) => console.log("Error :" + err));
  }, []);

  return (
    <div>
      <h3>Enrollment List</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Enrollment Name</th>
            <th>Student Id</th>
            <th>Teacher Id</th>
            <th>Lecture Id</th>
          </tr>
        </thead>
        <tbody>
          {ennrollment.map((element) => {
            return (
              <tr>
                <td>{element.name}</td>
                <td>{element.studentId}</td>
                <td>{element.teacherId}</td>
                <td>{element.lectureId}</td>{" "}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
