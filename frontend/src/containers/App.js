import React, { Component } from 'react';
import './App.css';
import ProjectListContainer from "./ProjectListContainer";

class App extends Component {
  render() {
    return React.createElement(ProjectListContainer, {})
  }
}

export default App;
