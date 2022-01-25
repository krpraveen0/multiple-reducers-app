import reducerA from "./reducerA";

const initialState = {
    num2 : 1
};

const reducerB = (state=initialState,action)=>{
    switch(action.type){
        case "UPDATE_B":
            return{
                ...state,
                num2 : state.num2 + action.value
            }
            break;
    }
    return state;
};

export default reducerB;