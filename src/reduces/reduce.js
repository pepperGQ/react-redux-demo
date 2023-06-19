

const reducer = (state = 10,action )=>{
    switch(action.type){
        case 'ADD':
            return state + action.num
        case 'POWER':
            return state*state
        case 'GET':
                return action.num   
        default:
            return state        
    }

}

export {reducer} 