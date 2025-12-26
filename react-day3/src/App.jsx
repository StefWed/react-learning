import { useState } from 'react'
import Greeting from './Greeting'

function App() {
  const [name, setName] = useState("Steffi")

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <Greeting name={name} />

      <input
        value={name}
        onChange={handleChange}
      />

      { name && <p>You typed: {name}</p> }
    </div>
  )
}

export default App





