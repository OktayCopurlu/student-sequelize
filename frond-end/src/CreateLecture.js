import React, { useState } from "react";

export default function CreateLecture() {
  const [name, setName] = useState();
const id = Math.floor(Math.random() * 1000000000);
  function onSubmit(event) {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        name,
      }),
    };

    fetch("http://localhost:3000/oktay_lecture/", requestOptions)
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
              <label htmlFor="title"> Name </label>
              <input
                required
                className="form-control"
                type="text"
                name="name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                value="Create Lecture"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
