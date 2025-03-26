import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8); //Use for reflecting the change of length
  const [numberAllowed, setNumberAllowed] = useState(false); //Use for reflecting numbers
  const [charAllowed, setCharAllowed] = useState(false);  //Use for reflecting characters
  const[password, setPassword] = useState(""); //Use for reflecting password

  //useRef hook
  const passworRef = useRef(null); // We have to pass reference in input.

  let passwordGenerator = useCallback( () => {  // syntax - useCallback( fn, [dependencies under array] )
// We are using useCallback hook because it can memorize the fn or part of fn, so whenever dependencies got hit it can run
// the function.

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed){
      str += "0123456789";
    }

    if(charAllowed){
      str += "!@#$%^&*()|:><~_+=}]{["
    }

    for(let i = 1; i<= length; i++){
      let char = Math.floor(Math.random()*str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword] )

  const copyPasswordToClipboard = useCallback( () => {
      passworRef.current?.select(); // By the help of this line we can show that to the user that you are copying that password
      // passworRef.current?.setSelectionRange(0,3); // by this we can select only given range of password
      window.navigator.clipboard.writeText(password) // By the help of this line we can copy the password
  }, [password] )

  // Now using useEffect hook
  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator]) // Without this hook we cannot show our passwrod because, 
                // when we save the data it will refresh and for running any programm on refresh there is only useEffect hook,
                // After that they drop the responsibility to useCallback hook.
  
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passworRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-900 text-white px-3 py-0.5 shrink-0 hover:bg-sky-300'
        >copy</button>
    </div>

    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>

      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>

      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
  </div>
  )

  }

export default App
