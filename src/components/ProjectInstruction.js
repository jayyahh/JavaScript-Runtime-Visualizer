import React, { Component } from 'react';
import './styles.css';

class ProjectInstruction extends Component {
    render() {
        return (
            <div className="projectInstruction">
                <label className="uploadFileLabel">Please upload your JavaScript file</label>
                <h5>Make sure your code compiles and runs independently without any additional files.</h5>
            </div>
        )
    }
}

export default ProjectInstruction;