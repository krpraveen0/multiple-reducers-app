import React from "react";
import { connect } from "react-redux";

class App extends React.Component{
  render(){
    return(
      <div>
        Num1: <span style={{color:"red", marginRight:100}}>{this.props.num1}</span>
        Num2: <span style={{color:"red"}}>{this.props.num2}</span>
        <br></br><br></br>
        <button style={{marginRight:100}} onClick={()=>{this.props.updateNum1(this.props.num2)}}>Update Num1</button>
        <button onClick={()=>{this.props.updateNum2(this.props.num1)}}>Update Num2</button>
      </div>
    )
  }
};

const receive = (state) =>{
  return {
    num1 : state.rA.num1,
    num2 : state.rB.num2
  }
};

const send = (dispatch) =>{
  return{
    updateNum1 : (data) =>{
      dispatch({type:"UPDATE_A",value: data})
    },
    updateNum2 : (data) =>{
      dispatch({type:"UPDATE_B",value:data})
    }
  }
};

export default connect(receive, send)(App)