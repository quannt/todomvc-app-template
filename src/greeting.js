import React from "react";
 
export default React.createClass({
  render: function() {
    return (
      <div className="greeting">
        <h4>Hello, {this.props.name}!</h4>
      </div>
    );
  }
});