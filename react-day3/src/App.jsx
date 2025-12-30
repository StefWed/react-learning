import { useState } from 'react'

function App() {
  const [names] = useState(["Steffi", "Alex", "Jamie"])

  return (
    <div>
      <h1>Names</h1>

      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App




