import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodosItems extends Component {

    render(){
        return(
            <li className="TodosItems"> {this.props.todos.title}              
            </li> 
        );
    }
}

 

export default TodosItems;
