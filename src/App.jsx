import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './users';
import Friends from './friends';
import Friend from './friend';

function App() {
  function handleClick()
  {
    alert ('button clicked');
  }
  const handleClick2 = () =>{
    alert('button clicked 2');
  }
  const addToFive= (num) =>{
    alert(num+5);
  }

  return (
    <>
      
      <h3>React core concept 2</h3>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>click2</button>
      <button onClick={()=>{alert("click3")}}>click3</button>
      {/* <button onClick={addToFive(3)}>click 4</button> */}
      <button onClick={()=>addToFive(3)}>click 4</button>
      <Counter></Counter>
      <Team></Team>
      <Users></Users>
      <Friends></Friends>
      
      
    </>
  )
}

export default App


