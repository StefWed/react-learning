import { useEffect, useState } from 'react'
import NameList from './NameList'
import AddName from './AddName'

function App() {
  const [names, setNames] = useState(() => {
    const saved = localStorage.getItem("names")
    return saved ? JSON.parse(saved) : ["Steffi", "Alex"]
  })

  useEffect(() => {
    localStorage.setItem("names", JSON.stringify(names))
  }, [names])

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
