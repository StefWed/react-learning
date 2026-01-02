import { useEffect, useState } from 'react'

export default function useNames() {
  const [names, setNames] = useState(() => {
    const saved = localStorage.getItem("names")
    return saved ? JSON.parse(saved) : ["Steffi", "Alex"]
  })

  useEffect(() => {
    localStorage.setItem("names", JSON.stringify(names))
  }, [names])

  return { names, setNames }
}
