
import Header from "./Header.js"
import Main from "./Main.js"
import { userEffect,useReducer} from "react";





const initialState = {
  questions: [],
  status: 'loading'
};

function reducer (state,action) {

switch(action.type) {

  case   'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status:'ready',
      };
  case 'dataFailed':
    return {
      ...state,state:'error',
    }
      default:
        throw new Error ["Action unknown"];
}


}

export default function App(){



const [state,dispatch) = useReducer (reducer,initialState);



useEffect (function(){

  fetch('http://localhost:9000/questions')
  .then(res) =>res.json())
  .then(data=> dispatch({type:'dataReceived',payload:data}))
  .catch((err)) => dispatch({type:'dataFailed'}));
  

},[]);

  return (<div className = "app">



 <Header/>
 <Main/>
  <p> 1/15</p>
  <p> Question?</p>
 
  </div>
  )
};

