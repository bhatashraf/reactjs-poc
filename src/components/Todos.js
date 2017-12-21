import React, { Component } from 'react';
import TodosItems from './TodosItems.js';
import PropTypes from 'prop-types';

class Todos extends Component {

  render() {
   let todosItems;
   if(this.props.todos){
    todosItems = this.props.todos.map((todos) => {
      return(
        <TodosItems   key={todos.id} todos={todos}/>
        );
      });    
   }

    return (
      <div className="Todos">
        {todosItems}
      </div>   

    );
  }
}

// Projects.propTypes = {
//   projects: PropTypes.Array,
//   onDelete: PropTypes.func
// }

export default Todos;
