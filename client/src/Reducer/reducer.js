export const intialState = null;

 export const reducer =(state,action)=>{
    if(action.type==="USER"){
      return action.payload ;
    }

    if(action.type==="LOGOUT"){
      return null ;
    }

    if(action.type==="UPDATE_PROFILE"){
      return {
        ...state,
        username:action.payload.username,
        email:action.payload.email
      }
    }


    return state;
  }



