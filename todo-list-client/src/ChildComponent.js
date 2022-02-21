import React from "react";
import { ThemeContext } from "./context";
import connect from './connect'
class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.getState().count}
        <button onClick={()=>this.props.dispatch({type:'AddOne'})}>Add 1</button>
        <button onClick={()=>this.props.dispatch({type:'DividedByTwo'})}>Divided By 2</button>
      </div>
    );
  }
}

export default connect(ChildComponent);
