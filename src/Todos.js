//memo example
import { memo } from "react";

//import { useState } from "react"

// const Todos = ({todos}) =>{
//     console.log('child render');
  
//     return (
//       <>
//         <h1>My To Do</h1>
//         {todos.map((todo, index)=> {
//           return <p key={index}>{todo}</p>;
//         })
//       }
//       </>
//     );
//   };
  
//   //Re renders each time even if there is no change in To Do list
//   //export default Todos;

//   ////React Memo- Solution-Use memo to keep the Todos component from needlessly re-rendering.Wrap the Todos component export in memo:
// export default memo(Todos);



//React useCallback Hook example

const Todos = ({todos, addTodo})=>{
 console.log("Child render");

  return (
   <>
   <h2> My To Dos</h2>
   {todos.map((todo,index)=>{
    return <p key={index}>{todo}</p>
   })}
   <button type="button" onClick={addTodo}>Add Todo</button>
   </>

  )
}

export default memo(Todos);