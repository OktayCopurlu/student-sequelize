import React, { useState, useEffect } from "react";

export default function StudentList() {
  const [student, setStudent] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/oktay_students/")
      .then((response) => response.json())
      .then((response) => setStudent(response))
      .catch((err) => console.log("Error :" + err));
  }, []);

  return (
    <div>
      <table>
        <thead>
    
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Class</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {student.map((element, i) => {
           return <tr key={i}>
              <td>{element.firstName}</td>
              <td>{element.lastName}</td>
              <td>{element.age}</td>
              <td>{element.class}</td>

              <td>{element.city}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}
