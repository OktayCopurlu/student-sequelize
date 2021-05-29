import React, { useState, useEffect } from "react";

export default function StudentList() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/oktay_lecture/")
      .then((response) => response.json())
      .then((response) => setStudent(response))
      .catch((err) => console.log("Error :" + err));
  }, []);

  return (
    <div>
      <h3>Lecture List</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th> Name</th>
          </tr>
        </thead>
        <tbody>
          {student.map((element, i) => {
            return (
              <tr key={i}>
                <td>{element.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
