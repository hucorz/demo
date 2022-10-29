import React, { Component } from "react";
import { connect, connext } from "react-redux";
import {nanoid} from 'nanoid'
import { addPersonAction } from "../../redux/actions/person";

class Person extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.ageInput = React.createRef();
  }
  addPerson = () => {
    const name = this.nameInput.current.value;
    const age = this.ageInput.current.value;
    this.props.addPersonAction({id:nanoid(), name, age})
  };
  render() {
    return (
      <div>
        <h1>Here is Person Component, Count Component's count is {this.props.count}</h1>
        <input ref={this.nameInput} type="text" placeholder="name" />
        <input ref={this.ageInput} type="text" placeholder="age" />
        <button onClick={this.addPerson}>addPerson</button>
        <ul>
            {
                this.props.persons.map(personObj => {
                    return <li key={personObj.id}>{personObj.name}----{personObj.age}</li>
                })
            }
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    persons: state.persons,
    count: state.count,
  }),
  { addPersonAction }
)(Person);
