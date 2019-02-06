import React, { Component } from 'react';


class Dataset extends Component {
    render() {
        return ([
                { id: 1, name: "Matthew Smith", skills: "All skills" },
                { id: 2, name: "Matthew Jacobs", skills: "All skills" },
                { id: 3, name: "Jacob Smith", skills: "All skills" },
                { id: 4, name: "Tom Ryan", skills: "All skills" },
                { id: 5, name: "Jim Matthews", skills: "All skills" }
            ]
        );
    }
}

export default Dataset;
