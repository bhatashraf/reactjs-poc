import React, { Component } from 'react';
import uuid from 'uuid';
import Proptypes from 'prop-types';

class AddProjects extends Component {

constructor(){
    super();
    this.state={
        newProject:{}
    }                                             
}

 static defaultProps = {
     categories: ["web designing","mobile development","azure applications"]
 }

    addCategory(e){
        console.log(this.refs.title.value);
        if(this.refs.title.value !==""){
          this.setState({
           newProject:{
               id: uuid.v4(),
               title:this.refs.title.value,
               category:this.refs.category.value
           }

          }, function(){
              this.props.addProject(this.state.newProject);
          });
        }
        e.preventDefault();
    }

     render() {
      let categoryOptions = this.props.categories.map( category => {
         return <option key={category} value={category}>{category}</option>
         }
      );
      
      

 return (
      <div className="AddProjects"> 
              <form onSubmit={this.addCategory.bind(this)}>
                <div>
                  <label>Title</label><br/>
                  <input type="text" ref="title" />
                </div>
                 <div>
                  <label>Categories</label><br/>
                  <select type="text" ref="category">
                     {categoryOptions}
                  </select>
                </div>
                <input type="Submit" value="Add categroy"/>
              </form>
      </div>   

    );
  }
}



export default AddProjects;
