import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")


  const copy = () => {
    alert("Copied")
    window.navigator.clipboard.writeText(Password)
  }
  // useref hook
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "QWERTYUIIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(numberAllowed) str+= "1234567890"
    if(charAllowed) str+= "!@#$%^&*()"
    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random()*length+1) // randon genera
      pass += str.charAt(char);
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword]) //dependencies

  // useEffect(() => {}, [])
  useEffect(() => {passwordGenerator()}, [length, charAllowed, numberAllowed, passwordGenerator])

  return (
    <>
   
   <div className="flex justify-center items-center min-h-screen bg-gray-800">
  <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-6 text-center">Password Generator</h1>
    <div className="flex items-center mb-4">
      <input
        type="text"
        value={Password}
        placeholder="Password"
        readOnly
        className="w-full h-10 px-3 rounded-lg mr-2 focus:outline-none"
        ref={passwordRef}
      />
      <button
        onClick={copy}
        type="button"
        className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg focus:outline-none"
      >
        Copy
      </button>
    </div>
    <div className="mb-4">
      <label htmlFor="passwordLength" className="block mb-2">Password Length: {length}</label>
      <input
        type="range"
        id="passwordLength"
        min={6}
        max={100}
        value={length}
        onChange={(e) => { setLength(e.target.value) }}
        className="w-full cursor-pointer"
      />
    </div>
    <div className="mb-4">
      <input
        type="checkbox"
        id="numberInput"
        checked={numberAllowed}
        onChange={() => { setNumberAllowed((prev) => !prev) }}
        className="mr-2"
      />
      <label htmlFor="numberInput">Include Numbers</label>
    </div>
    <div className="mb-4">
      <input
        type="checkbox"
        id="charInput"
        checked={charAllowed}
        onChange={() => { setCharAllowed((prev) => !prev) }}
        className="mr-2"
      />
      <label htmlFor="charInput">Include Special Characters</label>
    </div>
  </div>
</div>

      
    </>
  )
}

export default App
