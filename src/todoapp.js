import React from "react";
import TodoHeader from './todoheader';
import TodoMain from './todomain';
import TodoFooter from './todofooter';
 
export default React.createClass({
  getInitialState: function() {
    return { data: [    	
    	{"name": "FOO", "id": "1"}, 
    	{"name":"bar", "id": "2"}
    ]};
  },
  render: function() {
    return (
      <section className="todoapp">
      	<TodoHeader />
      	<TodoMain data={this.state.data} />
      	<TodoFooter />
      </section>
    );
  }
});