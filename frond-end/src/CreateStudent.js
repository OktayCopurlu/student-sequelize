import React, { useState,} from "react";

export default function CreateStudent() {


  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [age, setAge] = useState();
  const [className, setClassName] = useState();
  const [city, setCity] = useState("");

 
  function onSubmit(event) {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        firstName,
        lastName,
        city,
        age,
        className,
      }),
    };

    fetch("http://localhost:3000/oktay_students/", requestOptions)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.log("Error :" + err));
  }

  return (
    <div className="container">
     
      <div className="row createWish-row">
        <div className="col">
          <form  className="form-create"  onSubmit={onSubmit} >
            {/* choosing canton */}

           
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
              <label htmlFor="title">Age</label>
              <input
                required
                className="form-control"
                type="text"
                name="name"
                onChange={(event) => setAge(event.target.value)}
              />
            </div>

            <div className="input-field">
              <label htmlFor="detail">Class</label>
              <input
                required
                className="form-control"
                name="detail"
                onChange={(event) => setClassName(event.target.value)}
              />
            </div>

            <div className="input-field">
              <label htmlFor="contact">City</label>
              <input
                required
                className="form-control"
                type="text"
                name="contact"
                onChange={(event) => setCity(event.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                value="Create Student"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
        
        </div>
      </div>
  
  );
}