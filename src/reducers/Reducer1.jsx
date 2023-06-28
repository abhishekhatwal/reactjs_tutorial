const initialstate=0;
const changenum=(state=initialstate,action)=>{
    switch(action.type){
      case "increment" : return state+action.payload;
      case "decrement" : return state-1;
      default:return state;
    }
}

export default changenum;