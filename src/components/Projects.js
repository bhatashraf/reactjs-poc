import React, { Component } from 'react';
import ProjectItems from './ProjectItems.js';
import PropTypes from 'prop-types';

class Projects extends Component {

deleteProject(id){
  console.log("id: " +id)
  this.props.onDelete(id);
}

  render() {
   let projectItems;
   if(this.props.projects){
    projectItems = this.props.projects.map((project) => {
      return(
        <ProjectItems onDelete={this.deleteProject.bind(this)}   key={project.id} project={project}/>
        );
      });    
   }

    return (
      <div className="Projects">
        {projectItems}
      </div>   

    );
  }
}

Projects.propTypes = {
  projects: PropTypes.Array,
  onDelete: PropTypes.func
}

export default Projects;
