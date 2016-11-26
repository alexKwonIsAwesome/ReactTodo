var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var todo = this.refs.todo.value;
    this.props.onAddTodo(todo);
  },
  render: function () {
    return (
      <div>
        <form ref='form' onSubmit={this.onSubmit}>
          <input ref='todo'></input>
          <button>Add todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
