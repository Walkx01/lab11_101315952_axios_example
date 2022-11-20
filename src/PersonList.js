import React, { Component } from "react";
import axios from "axios";
import Person from "./Person";

export default class PersonList extends Component {
  //Define state default values
  state = {
    persons: [],
  };

  //Component Lifecycle Callback
  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`).then((res) => {
      console.log(res.data);
      const persons = res.data.results;
      this.setState({ persons });
    });
  }

  //0{gender: 'female', name: {…}, location: {…}, email: 'sofija.johansson@example.com', login: {…},
  render() {
    return (
      <>
        <h2 style={{ backgroundColor: "coral" }}>persons list</h2>
        {this.state.persons.map((person, index) => (
          <div key={index}>
            {<Person person={person} />}
            <button>Details</button>
          </div>
        ))}
      </>
    );
  }
}
