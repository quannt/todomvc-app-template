import React from "react";
import Todo from './toDo';
 
export default React.createClass({
  handleOnToggleAll: function(){
  	console.log("handleOnToggleAll");
  },
  render: function() {
  	 console.log(this.props.data);
     var todoNodes = this.props.data.map(function(todo) {
      return (
        <Todo name={todo.name}  key={todo.id}>
        </Todo>
      );
    });

    return (
    <section className="main">
	<input className="toggle-all" type="checkbox" onChange={this.handleOnToggleAll}></input>
	
      <ul className="todo-list">
        {todoNodes}
      </ul>
     </section>
    );
  }
});