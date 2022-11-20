import React from "react";

export default function Person({ person }) {
  const location = person.location;
  const img_url = person.picture.large;
  return (
    <div style={{ backgroundColor: "green" }}>
      <h4>
        {person.name.title + " " + person.name.first + " " + person.name.last}
      </h4>
      <img src={img_url} alt="" />
      <p>
        <b>User name</b> : {person.login.username}
      </p>
      <p>
        <b>Gender: </b> {person.gender}
      </p>
      <p>
        <b>Time zone description:</b> {person.location.timezone.description}
      </p>
      <p>
        <b>adress:</b>
        {location.street.number +
          " " +
          location.street.name +
          " " +
          location.city +
          " " +
          location.state +
          " " +
          location.country +
          " " +
          location.postcode}{" "}
      </p>
      <p>
        {" "}
        <b>email:</b> {person.email}
      </p>
      <p>
        <b>birth date and age :</b>
        {person.dob.date + " (  age " + person.dob.age + ")"}
      </p>
      <p>
        <b>register date:</b> {person.registered.date}
      </p>
      <p>
        <b>phone# :</b> {person.phone}
      </p>
      <p>
        <b>cell#:</b> {person.cell}{" "}
      </p>
    </div>
  );
}
