import React, { Component } from 'react';
import './App.css';
import Projects from './components/Projects.js';
import AddProjects from './components/AddProjects.js';
import UUID from 'uuid';
import $ from 'jquery';

import Todos from './components/Todos.js';

class App extends Component {
  constructor(){
    super();
    this.state ={
                projects:[],
                todosdata:[]
          }
  }


getProjects()
{
    this.setState({
       projects:[                        {
                           "id":UUID.v4(),
                          "title":"Foo",
                          "category":"20"
                        },
                        {
                          "id":UUID.v4(),
                          "title":"Bar",
                          "category":"30"
                        },
                        {
                          "id":UUID.v4(),
                          "title":"Baz",
                          "category":"40"
                        }
              ]
    }
     
    );
}

getTodos()
{
  $.ajax({
     url:'https://jsonplaceholder.typicode.com/todos',
     dataType:'json',
     cache:false,
     success: function(data){

       debugger;
        this.setState({todosdata:data}, function(){
          console.log(this.state);
        });
     }.bind(this),
     error:  function(xhr, status, err){
       console.log(err);
     }  
  });
}

  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }



// componentDidMount()
// {
//   this.getTodos();
// }

AddProject(newProject){
    let projects = this.state.projects;
    projects.push(newProject);
    this.setState({ projects:projects});
}

DeleteProject(id){
 
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id===id);
    projects.splice(index,1);
    this.setState({ projects:projects});
}

  render() {  
   // console.log(this.state.projects);      
    return (      
      <div className="App">   
        <AddProjects   addProject={this.AddProject.bind(this)}/>    
        <Projects projects={this.state.projects}  onDelete={this.DeleteProject.bind(this)}/>   
        <Todos todos={this.state.todosdata}/>
      </div>
      
    );
  }
}

export default App;
