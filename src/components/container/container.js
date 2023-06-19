import React from 'react'
import { connect} from 'react-redux'
import {add,power,get} from '../../actions/action'

 function Container(props) {

  return (
    <div>
        <div>{props.num}</div>
    <button onClick={()=>{props.add(1)}}>加一</button>
    <button onClick={()=>{props.add(2)}}>加二</button>
    <button onClick={props.power}>乘方</button>
    <button onClick={props.get}>get初始数据</button>
    </div> 

  )
}

const mapStateToProps = (state)=>{
    return{
        num:state
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        add:(num)=>dispatch(add(num)),
        power:()=>dispatch(power()),
        get:()=>dispatch(get())

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Container)