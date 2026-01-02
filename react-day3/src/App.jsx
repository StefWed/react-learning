import NameList from './components/NameList'
import AddName from './components/AddName'
import useNames from './hooks/useNames'

function App() {
  const { names, setNames } = useNames()
  

  return (
    <div>
      <h1>Names</h1>
      <NameList names={names} />
      <AddName onAdd={(name) => setNames([...names, name])} />
    </div>
  )
}

export default App
