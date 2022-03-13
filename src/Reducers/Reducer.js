function Reducer(state={age:20},action){


    switch(action.type){
     
       case "AGE_INCREAMENTING":
         return{
             ...state,

         age: state.age+1
         }
       case "AGE_DECREAMENTING":
         return{
             ...state,

          age: state.age-2   

         } 
       default: return state;     
    }

}
export default Reducer;