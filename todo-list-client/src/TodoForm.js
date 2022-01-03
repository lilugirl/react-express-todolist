import React from "react";
export default class TodoFrom extends React.Component {
  addTodoItem = () => {
    this.props.addTodoItem(this.refs.todoItemValue.value);
  };

  render() {
    return (
      <div>
        <input ref="todoItemValue" placeholder="add something..." />
        <button type="submit" onClick={this.addTodoItem}>
          添加
        </button>
      </div>
    );
  }
}
