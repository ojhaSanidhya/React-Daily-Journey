import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  let arr = [1,2,3];

  return (
    <>
    <h1 className='bg-green-300 text-black p-5 rounded-xl'>Chai aur Code</h1> 
    {/* We can add tailwind css directly but instead of class we have to use className */}

    <Card userName="Coldest" userArr = {arr} />   {/* We can not directly assign array or object we have to make previous then use by variable */}
    <Card userName="Hottest" />   {/* This is props which is going in Card component */}

    {/* We can see here by writing one line of code we can generate the card again and again */}
    {/* Now how can we change the name of both the cards, so it can be done by props */}
    </>
  )
}

export default App
