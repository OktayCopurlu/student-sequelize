import React, { useState } from "react";

export default function CreateTeacher() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const id = Math.floor(Math.random()  * 1000000000);

  function onSubmit(event) {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({id,
        firstName,
        lastName,
 
      }),
    };

    fetch("http://localhost:3000/oktay_teacher/", requestOptions)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.log("Error :" + err));
  }

  return (
    <div className="container">
      <div className="row createWish-row">
        <div className="col">
          <form className="form-create" onSubmit={onSubmit}>


            <div className="form-group">
              <label htmlFor="title">First Name </label>
              <input
                required
                className="form-control"
                type="text"
                name="name"
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Last Name </label>
              <input
                required
                className="form-control"
                type="text"
                name="name"
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                value="Create Teacher"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
