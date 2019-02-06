import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TrainerTable from './TrainerTable/TrainerTable';
import Navbar from './NavBar';



class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <TrainerTable/>
      </div>
    );
  }
}

export default App;
