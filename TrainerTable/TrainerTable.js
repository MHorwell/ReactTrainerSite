import React, { Component } from 'react';
import TrainerTableBody from './TrainerTableBody';


class TrainerTable extends Component {

    constructor() {
        super();
        this.state = {
            person: [{ id: 1, name: "Matthew Smith", skills: "All skills" },
            { id: 2, name: "Matthew Jacobs", skills: "All skills" },
            { id: 3, name: "Jacob Smith", skills: "All skills" },
            { id: 4, name: "Tom Ryan", skills: "All skills" },
            { id: 5, name: "Jim Matthews", skills: "All skills" }],
            filteredPeople: []
        }

        this.filterPeople = () => {
            this.setState({ filteredPeople: this.state.person.filter((person) => person.name.includes(document.getElementById("nameSearch").value))});
        }
    }

    render() {

        return (
            <div>
                <div class="d-flex justify-content-between" id="trainerTable">
                    <h1>Trainer Table</h1>
                    <input class="form-control mr-sm-2" id="nameSearch" type="search" placeholder="Search"></input>
                    <button onClick={this.filterPeople}>FIND STUFF</button>
                </div>
                <div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">TRAINER NAME</th>
                                <th scope="col">SKILLS</th>
                            </tr>
                        </thead>
                        <TrainerTableBody data={this.state.filteredPeople} />

                    </table>
                </div>
            </div >
        );
    }
}





export default TrainerTable;