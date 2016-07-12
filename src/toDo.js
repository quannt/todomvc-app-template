import React from "react";
 
export default React.createClass({
  handleDestroyButtonOnClick: function(){
  	console.log("handleDestroyButtonOnClick");
  },
  handleEditOnClick: function(){
  	console.log("handleEditOnClick");
  },
  handleOnSelected: function(){
    console.log("handleOnSelected");
  },
  handleEditFinished: function(){
    console.log("handleEditFinished");
  },
  render: function() {
    return (
      <li>
		<div className="view">
		<input className="toggle" type="checkbox" onChange={this.handleOnSelected}></input>
		<label>{this.props.name}</label>
		<button className="destroy"></button>
		</div>
		<input className="edit" value={this.props.name} onChange={this.handleEditFinished}></input>
	   </li>
    );
  }
});