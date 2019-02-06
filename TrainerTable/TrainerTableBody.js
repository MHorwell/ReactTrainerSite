import React, { Component } from 'react';

class TrainerTableBody extends Component {
    render() {

        let output = this.props.data.map((person) => {
            return (
                <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.skills}</td>
                </tr>
            );
        });

        return (
            <tbody>
                {output}
            </tbody>
        );
    }
}
export default TrainerTableBody;