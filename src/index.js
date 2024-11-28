import React, { useCallback, useMemo, useReducer, useRef } from 'react';
import ReactDOM from 'react-dom/client';
//import Car from './Car';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Todos from './Todos';
//import './App.css'
import Cab from './Cab.js'
import { useEffect } from 'react';
import { useContext, createContext } from 'react';


//const myFirstElement=<h1>My First React App</h1>
//----Props----
//passing components
// function Garage() {
  

//     const carInfo = {
//         name: "Maruti",
//         model: "Alto K10"
//     }
//     return(
//     <>
//      <h1> I am a Garage!-Yeh! </h1>
//     <Car brand = {carInfo}/>
//     </>
//     )
    
// }
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Garage/>);

//------events-------
// function Football() {
 
//     const shoot=()=>{alert("Great shot!")}

//     return (
//     <button onClick={shoot}>Click to Shoot </button>
//     );

// }

//passing arguments
// function Football() {
//     const shoot=(a)=>alert(a);

//     return (
//         <button onClick={()=> shoot("Great shot!")}>Click</button>
//     );
// }

//passing event details
// function Football() {
//     const shoot=(a,b)=> {alert(a + "   Event raised by   "+b.type)};

//     return (
//         <button onClick={(event)=>shoot("Great shot!!", event)}>Click to Shoot</button>
//     );
// }

// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Football/>);

//React Conditional Rendering
//if statement

// function MadeGoal(){
//     return (
//          <h1>It's a Goal ! </h1>
//     );
// }

// function MissedGoal() {
//     return (
//         <h1>Goal Missed !</h1>
//     );
// }

// function Goal(props) {
//     const isGoal =  props.isGoal;
//     if(isGoal){
//         return  MadeGoal();
//     }
//     else
//         return  MissedGoal();
// }

// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Goal isGoal={false} />);

//Ternary Operator

// function MadeGoal(){
//     return (
//          <h1>It's a Goal ! </h1>
//     );
// }

// function MissedGoal() {
//     return (
//         <h1>Goal Missed !</h1>
//     );
// }

// function Goal(props) {
//     const isGoal =  props.isGoal;
//     return(
//         <>
//     { isGoal ? <MadeGoal/> : <MissedGoal/>} 
//     </>
//     );
// }

// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Goal isGoal={false} />);

//Logical && Operator
// function Garage(props){
// return (
   
//  <>
//  <h1>Garage</h1>
//    {props.cars.length > 0 && 
//  <h2>Garage has { props.cars.length} car</h2>
//    }

//  </>
// )
// }

// const cars = ['Maruti', 'Ford', 'BMW'];
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Garage cars={cars}/>)

//React Lists

// function Car(props) {

//   return (
//     <li> I am {props.brand}</li>
//   )
// }

// function Garage(){
//   const cars = ['Maruti', 'BMW', 'Audi']; 
//   return (
//   <>
//     <h1>Who lives in my Garage?</h1>
//     <ul>{ cars.map((car) => <Car brand={car}/> )}</ul>
//   </>
//   )
// }

// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage /> );

//key

// function Car(props){
//   return (
//    <h1> I'm {props.brand} </h1>
//   );
// }

// function Garage()
// {
//   const cars=[
//     {id: 1, brand: "Maruti"},
//     {id: 2, brand: "BMW"},
//     {id: 3, brand:"Audi"}
//   ];

//   return(
//     <>
//     <h1> Who's in my Garage?</h1>
//     <ul>{ cars.map((car)=> <Car id={car.id} brand={car.brand}/> )  } </ul>
//     </>
//   );
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage/>)

//Forms

//Adding Forms in React
// function MyForm() {

//   return (
//     <form>
//        <label> Enter your Name :  
//          <input type="text" />
//        </label>
//     </form>
//   )

// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm/>)

//Handling Forms
// function MyForm() {

//   const [name, setName] = useState("");

//   return (
//     <form>
//       <label>Enter your name : </label>
//       <input
//       type="text"
//       value= {name}
//       onChange={(e)=> setName(e.target.value)}
//       />
//     </form>
//   )
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm/>)


//Submitting Form

// function MyForm(){

//   const [name, setName] = useState("Enter Name");

//   const handleSubmit = (event) => 
//   {
//     event.preventDefault();
//     alert(`The name enetered is:  ${name}`);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label> Please enter your name : 
//        <input 
//        type="text"
//        value={name}
//        onChange={(e)=> setName(e.target.value)}
//        />
//        </label>
//        <input type='submit'></input>
//     </form>
//   )

// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm/>)


//Multiple Input Fields

// function MyForm (){

//   const [inputs, setInputs] = useState({})
  
//   const handleChange = (event) =>{
//     const name= event.target.name;
//     const value = event.target.value;
//     setInputs(values=> ({...values, [name]: value}))
//   }
  
//   const handleSubmit = (event)=> {
//     event.preventDefault();
//     console.log(inputs);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your Name: 
//        <input
//        type='text'
//        name='username'
//        value={inputs.username || ""}
//        onChange={handleChange}
//        />
//       </label>

//       <label> Enter your Age: 
//         <input
//         type='number'
//         name='age'
//         value={inputs.age || ""}
//         onChange={handleChange}
//         />
//       </label>
//        <input type='submit'/>
//     </form>
//   )

// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm/>)

//Textarea

// function MyForm(){

//   const [textarea1, setTextarea] = useState("Here goes the value");

//   const handleChange = (event) =>{
//      setTextarea(event.target.value)
//   }

//   return(
//     <form>
//       <textarea value={textarea1} onChange={handleChange}/>
//     </form>
//   )
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm/>)

//Select

// function MyForm(){
//   const [ myCar, setMyCar] = useState('Audi');

//   const handleChange=(event)=>{
//     setMyCar(event.target.value)
//   }

//   return(
//     <select value={myCar} onChange={handleChange}>
//       <option value='Maruti'>Maruti</option>
//       <option value='Audi'>Audi</option>
//       <option value='BMW'>BMW</option>
//     </select>
//   )
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm/>)


//Router

// export default function App() {

//   return(
// <BrowserRouter>
// <Routes>
//   <Route path="/" element={<Layout/>}>
//    <Route index element={<Home/>}/>
//    <Route path="blogs" element={<Blogs/>}/>
//    <Route path="contact" element={<Contact/>}/>
//    <Route path="*" element={<NoPage/>}/>
//   </Route>
// </Routes>
// </BrowserRouter>

//   );
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>)

//React Memo-Problem-To Do component re-renders even if it is not changed

// function App() {

//   const [todos, setTodo] = useState(['To Do1', 'To Do2']);
//   const [count, setCount] = useState(0);

//   const increment = () =>{
//     setCount((c)=>c+1);
// }

// return (

//   <>
//   <Todos todos={todos}/>
//   <hr/>
//   <div>
//     Count : {count}
//     <button onClick={increment}>+</button>
//   </div>
//   </>

// );
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>)

//React Memo- Solution-Use memo to keep the Todos component from needlessly re-rendering.Wrap the Todos component export in memo:

// function App() {

//   const [todos, setTodo] = useState(['To Do 1', 'To Do 2']);
//   const [count, setCount] = useState(0);

//   const increment = () =>{
//     setCount((c)=>c+1);
// }

// return (

//   <>
//   <Todos todos={todos}/>
//   <hr/>
//   <div>
//     Count : {count}
//     <button onClick={increment}>+</button>
//   </div>
//   </>

// );
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>)

//Styling React Using CSS

//Inline styling-1
// function Header(){
//   return (
//   <>
//   <h1 style={{color: "red", backgroundColor: "lightcyan", fontFamily:"monospace"}}> Hello Style</h1>
//   <p>Add a little style! </p>
//   </>
//   )
// };

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>)

//Inline styling- Javascript Object
// function Header(){

//   const myStyle={
//     color: "blue",
//     padding : "10px",
//     backgroundColor: "yellow",
//     fontSize: 20
//   };

//   return (
//   <>
//   <h1 style={myStyle}> Hello Style</h1>
//   <p>Add a little style! </p>
//   </>
//   )
// };

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>)



//CSS Stylesheet

// function Header(){

//   return (
//   <>
//   <h1> Hello Style</h1>
//   <p>Add a little style! </p>
//   </>
//   )
// };

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>)


//CSS Modules

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Cab/>)

//React useState Hook

//React useState Hook
//Read State

// function FavoriteColor() {

//   const [color, setColor ] = useState("Red")

//   return (
//     <h1>My favorite color is {color}!</h1>
//   )
// };

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor/>)

//Update State

// function FavoriteColor() {
//      const [color, setColor] = useState("");
     
//      return (
//       <>
//       <h1>My favorite color is {color}</h1>
//       <button type='button' onClick={()=>setColor("Blue")}>Blue</button>
//       <button type='button' onClick={()=>setColor("Green")}>Green</button>
//       </>

//      )
// };

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor/>)

//What Can State Hold

//Create multiple state Hooks:

// function Car() {
//   const[brand, setBrand]= useState("Maruti");
//   const[model, setModel] = useState("Alto K10");
//   const[color, setColor] = useState("Grey");
//   const [year, setYear] = useState("2020");

//   return (
//     <h1> I have a {brand} {model} of {color} color made in {year} </h1>
//   )
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>)

//Create a single Hook that holds an object:

// function Car() {

//   const[car, setCar]= useState({
//     brand: "Maruti",
//     model: "Alto K10",
//     color: "grey",
//     year: 2021

//   })
//   return (
//     <h1>I have a {car.brand} {car.model} of {car.color} made in {car.year}</h1>
//   )
// };

// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>);

//Updating Objects and Arrays in State

/*When state is updated, the entire state gets overwritten.
What if we only want to update the color of our car?
If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.
We can use the JavaScript spread operator to help us.*/

// function Car() {
// const [car, setCar] = useState({
//   brand: "Maruti",
//   color: "Grey",
//   model: "Alto K10",
//   year: 2020
// });

// const updateColor=()=>{
//   setCar(previousState =>{
//   return {...previousState, color : "Black"}
// });
// }

// return (
//   <>
//   <h1>My car is {car.brand} {car.model} of {car.color} color made in {car.year}</h1>
//   <button type='button' onClick={updateColor}>Click to change Color!</button>
//   </>
// )
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>);

//React useEffect Hooks

// function Timer() {
//   const[count, setCount]= useState(0);

  //runs on every render in each sec
  // useEffect(()=>{
  //   setTimeout(
  //     ()=> {setCount(count=>count+1)},1000
  //   );
  //  console.log({count});
  // })
  
  //1. No dependency passed:
  // useEffect(() => {
  //   //Runs on every render
  // });

 // 2. An empty array:

// useEffect(() => {
//   //Runs only on the first render
// }, []);

// useEffect(()=>{
//   setTimeout(
//     ()=> {setCount(count=>count+1)}
//   );
//  console.log({count});
// },[])
//   return(
//     <h1>I have rendered {count} times!</h1>
//   )
// }

//3. Props or state values:

// useEffect(() => {
//   //Runs on the first render
//   //And any time any dependency value changes
// }, [prop, state]);

// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Timer/>);

//Hook that is dependent on a variable. If the count variable updates, the effect will run again:


// function Counter(){

//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(()=>{
//       setCalculation(()=> count*2);
//   }, [count]);


// return (
//   <>
//   <p>Count : {count}</p>
//   <button type='button' onClick={()=>setCount((c)=> c+1)}>+</button>
//   <p>Calculation : {calculation}</p>
//   </>
// )
// }

// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Counter/>);

// function Timer() {

//   const[count, setCount]= useState(0);
 

//   useEffect(()=>{
//     let timer= setTimeout(()=> {
//     setCount((count)=> count+1);
//     },1000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//    <h1> I have rendered {count} times!</h1>
//   )
// }

// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Timer/>);

//React useContext Hook

//To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".

// function Component1(){

//   const [user, setUser] = useState("Aparna");

//   return(
//     <>
//      <h1>{`Hello ${user}`}</h1>
//      <Component2 user={user} />    
//     </>
//   )

// }

// function Component2({user}) {

//   return(
//     <>
//     <h1>This is Component 2</h1>
//     <Component3 user={user}/>
//     </>
//   )
// }

// function Component3({user}) {

//   return(
//     <>
//     <h1>This is Component 3</h1>
//     <Component4 user={user}/>
//     </>
//   )
// }

// function Component4({user}) {
//   return(
//     <>
//     <h1>This is Component 4</h1>
//     <Component5 user={user}/>
//     </>
//   )
// }

// function Component5({user}){
//   return(

//     <h1>{`Hello ${user} again!`}</h1>
//   )
// }

// const root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Component1/>)


//The Solution-Create Context

// const UserContext= new createContext();

// function Component1(){

//  const[user, setUser]= useState("Aparna");

//   return(
//     <UserContext.Provider value={user}>
//       <h1>{`Hello ${user}`}</h1>
//       <Component2/>
//     </UserContext.Provider>
//   )
  
// }

// function Component2()
// {
//   return(
//     <>
//     <h1>This is Component 2</h1>
//     <Component3/>
//     </>
//   )
// }

// function Component3(){

//   return(
//     <>
//     <h1>This is Component 3</h1>
//     <Component4/>
//     </>
//   )
// }

// function Component4(){

//   return(
//     <>
//     <h1>This is Component4</h1>
//     <Component5/>
//     </>
//   )
// }

// function Component5(){
   
//   const user= useContext(UserContext);

//   return(
//     <>
//     <h1>This is Component 5</h1>
//     <h2>{`Hello ${user} again!` }</h2>
//     </>
//   )
  
// }

// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Component1/>)


//React useRef Hook

//Does Not Cause Re-renders

// function App() {

//   const[input, setInput] = useState("");

//   const count= useRef(0);

//   useEffect(() =>{
//     count.current=count.current+1;
//   });

//   return(
//     <>
//     <input
//     type='text'
//     value={input}
//     onChange={(e)=>setInput(e.target.value)}/>
//     <h1>Render Count: {count.current}</h1>
//     </>
//   )
// }

//Accessing DOM Elements

// function App() {

//   const inputElement= useRef();

//   const focusInput=()=>{ inputElement.current.focus();

//   }

//  return(
//   <>
//   <input type="text" ref={inputElement}/>
//   <button type="button" onClick={focusInput}>Focus Button</button>
//   </>
//  )
// }

//Tracking State Changes

// function App(){

//   const[inputValue, setInputValue] = useState("");

//   const previousInputValue= useRef("");

//   useEffect(()=>{
//     previousInputValue.current= inputValue;
//   }, [inputValue])

//   return (
//     <>
//     <input
//      type='text'
//      value={inputValue}
//      onChange={(e)=>setInputValue(e.target.value)}
//     ></input>
    
//     <p>Current Value: {inputValue}</p>
//     <p>Previous Value: {previousInputValue.current}</p>
//     </>
//   )
// }

// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App/>);

//React useReducer Hook

// const initialTodos = [
//   {
//     id: 1,
//     title: "To Do 1",
//     complete: false,
//   },
//   {
//     id: 2,
//     title: "To Do 2",
//     complete: false,
//   },
// ];


// const reducer = (state, action) => {
//   switch (action.type) {
//    case "COMPLETE":
//      return state.map((todo)=>{
//       if (todo.id==action.id){
//         return { ...todo, complete: !todo.complete};
//      }else {
//      return todo;
//      }
// });
// default:
//    return state;
// }
// };

// function Todos() {

//   const [todos, dispatch] = useReducer(reducer, initialTodos);

//   const handleComplete = (todo) => {
//     dispatch({ type: "COMPLETE", id: todo.id });

//   };

//   return (
//     <>
//     {todos.map((todo)=>(
//       <div key={todo.id}>
//         <label>
//         <input
//         type="checkbox"
//         checked={todo.complete}
//         onChange={()=>handleComplete(todo)}/>
//         {todo.title}
//         </label>
//       </div>
//     ))}
//     </>
//   )

// }

// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Todos/>)

//React useCallback Hook-Problem

// const App=()=>{

//   const [count, setCount]=useState(0);
//   const [todos,setTodo] = useState([]);

//   const increment=(()=>
//   {
//     setCount((c)=>c+1);
//   })
  
//   const addTodo=(()=>
//   {
//     setTodo((t)=>[...t, "New Todo"])
//   });

//   return (
//     <>
//     <Todos todos={todos} addTodo={addTodo} />
//     <hr/>
//     <div>
//       Count : {count}
//     <button type="button" onClick={increment}>+</button>
//     </div>
//     </>
//   )
// }

//React useCallback Hook-Solution

// const App=() =>{
//   const [count, setCount] = useState(0);
//   const [todos, setTodo] = useState([]);

//   const increment=()=>{
//     setCount((c)=>c+1);
//   }
  
//   const addTodo= useCallback(()=>{
//     setTodo((test)=>[...test, ["New Todo"]])
//   },[todos])
  
//   return(
//     <>
     
//   <Todos todos={todos} addTodo={addTodo}/>
//     <hr/>
//     Count: {count}
//     <button type='button' onClick={increment}>+</button>
    
//     </>
//   )

// }


// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App/>);


//React useMemo Hook

// const App=()=>{

//   const [count, setCount] = useState(0);
//   const [todos, setTodo] = useState([]);

//   const calculation= useMemo(()=>ExpensiveCalculation(count), [count]);

//   const addTodo=()=>{
//     setTodo((t)=> [...t, "New To Do"]);
//   };
  
//   const increment=()=>{
//     setCount((c)=> c+1);
//   };

//   return(
//     <div>
//     <h2>My Todo</h2>
   

//     {todos.map((todo,index)=>{
//      return <p key={index}>{todo}</p>
//     })}
//     <button type="button" onClick={addTodo} > Add Todo</button>
//     <hr/>
//     Count: {count}
//     <button type='button' onClick={increment}>+</button>
//     <hr/>
//     <h2>Expensive Calculation</h2> {calculation}
//     </div>
//   )
//  };
//   const ExpensiveCalculation=(num)=>{
//     console.log("Calculating...");
//     for(let i=0;i<100000;i++){
//         num+=1;
//     }
//     return num;
//   };

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

