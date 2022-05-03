import React, { Component } from "react";

class Email extends Component {
  render() {
    return (
      <div className="Email">
        <from>
          <input type="text" placeholder="name" />
          <button> Send </button>
        </from>
      </div>
    );
  }
}
export default Email;
