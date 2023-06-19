 const add = (num)=>{
    return {
        type:'ADD',
        num
    }
 }

 const power = ()=>{
    return {
        type:'POWER'
    }
 }

// dispatch 传参是函数会直接执行这个函数

 const get=()=>{
    return (dispatch,getState)=>{
        fetch('./data.json').then(res=> res.json()).then(res=>dispatch({type:'GET',num:Number(res[1])}))
    }
 }

 export  {
    add,power,get
 }