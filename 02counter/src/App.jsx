import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  // let counter = 15;

  const AddValue = () => {
    // console.log("hello", counter);
    // counter++;

    if(counter < 20){
      setCounter(counter+1);
    }
  }

  const RemoveValue = () => {
    // console.log("hello", counter);
    // counter++;

    if(counter > 0){
      setCounter(counter-1);
    }
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <button onClick={AddValue}>Add Value: {counter}</button> 
    <br />
    <button onClick={RemoveValue}>Remove Value: {counter}</button>

    {/*  We can add js in html under curly braces */}
    {/* Workflow of useState - When we click the button, fn runs then by the help of setCounter it updates the value of Counter and whereever
    there is counter var is used it updates the value*/}
    </>
  )
}

export default App
