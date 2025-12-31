import { useState } from 'react'

function AddName({ onAdd }) {
  const [value, setValue] = useState("")

  function handleSubmit() {
    onAdd(value)
    setValue("")
  }

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default AddName