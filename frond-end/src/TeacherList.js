import React, { useState, useEffect } from "react";

export default function StudentList() {
  const [student, setStudent] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/oktay_teacher/")
      .then((response) => response.json())
      .then((response) => setStudent(response))
      .catch((err) => console.log("Error :" + err));
  }, []);

  return (
    <div>
      <h3>Teacher List</h3>
      <table className="table table-striped">
        
        <thead>
    
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
     
          </tr>
        </thead>
        <tbody>
          {student.map((element, i) => {
           return <tr key={i}>
              <td>{element.firstName}</td>
              <td>{element.lastName}</td>
        
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}
