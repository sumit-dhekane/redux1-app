import logo from './logo.svg';
import './App.css';
import React from 'react';
import store from './Store/store';
import {useSelector,useDispatch} from "react-redux";
function App() {

      const store = useSelector((store) => store)
       const dispatch = useDispatch()

       const age_increament=()=>{
         dispatch({type:'AGE_INCREAMENTING'})
       }
       const age_decreament=()=>{
         dispatch({type:'AGE_DECREAMENTING'})
        
       }

     return (
         <React.Fragment>
         <h1>{store.age}</h1>
         <button onClick={age_increament}>AGE_INCREAMENTING</button>
         <button onClick={age_decreament}>AGE_DECREAMENTING</button>
         </React.Fragment>
     )

}
export default App;
     
     
    
