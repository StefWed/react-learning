import { useState } from 'react'
import NameList from './NameList'

function App() {
  const [names, setNames] = useState(["Steffi", "Alex"])
  const [newName, setNewName] = useState("")
  

  function addName() {
    setNames([...names, newName])
    setNewName("")
  }


  return (
    <div>
      <h1>Names</h1>

      <NameList names={names} />


      <input
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      
      <button onClick={addName}>Add</button>
    </div>
  )
}

export default App