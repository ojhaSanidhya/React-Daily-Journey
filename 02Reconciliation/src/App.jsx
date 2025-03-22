import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    {/* Here we are going to talk about createRoot element in main,jsx, Reconciliation, Virtual DOM */}

    {/* createRoot -> It creates a new DOM and then only compare with the previous DOM which is made by ourselves and do the needful changes. */}

    {/* What is Reconciliation - Basically it is an algorithm which is used by react to differ one tree with another tree and check the needful changes
                                 By the help of useState hook thw values are updated. 
                                 
                                 Two trees are - Browser tree & React tree ( Made by createRoot element ).  */}

    {/* What uis Virtual DOM - It is nothing but a Reconciliation. */}

    {/* Why using Keys - We have to use keys in every iteration so that we can improve the list performance. */}

    {/* Funtionality of React fibre - 1) pause work and come back to it later.
                                      2) Assign priority to different types of work.
                                      3) Resuse previously to completed work.
                                      4) Abort work if it's no longer needed.   */}
    </>
  )
}

export default App
