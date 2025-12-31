import { useState } from 'react'
import NameList from './NameList'
import AddName from './AddName'

function App() {
  const [names, setNames] = useState(["Steffi", "Alex"])

  function addName(name) {
    if (!name) return
    if (names.includes(name)) return
    setNames([...names, name])
  }

  return (
    <div>
      <h1>Names</h1>
      <NameList names={names} />
      <AddName onAdd={addName} />
    </div>
  )
}

export default App
