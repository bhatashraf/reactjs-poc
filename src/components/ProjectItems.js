import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItems extends Component {
    deleteProject(id){
        console.log(id);
        this.props.onDelete(id);
    }
    
    render(){
        return(
            <div className="Project"> {this.props.project.title}-{this.props.project.category}
            <a href="#" onClick={this.deleteProject.bind(this,this.props.project.id)}>x</a>
            </div> 
        );
    }
}

ProjectItems.propTypes = {
    deleteProject: PropTypes.func

}

export default ProjectItems;


