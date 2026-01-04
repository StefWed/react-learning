import NameList from './components/NameList'
import AddName from './components/AddName'
import useNames from './hooks/useNames'
import NameCount from './components/NameCount'

function App() {
  const { names, setNames } = useNames()
  

  return (
    <div>
      <h1>Names</h1>
      <NameList names={names} />
      <AddName onAdd={(name) => setNames([...names, name])} />
      <NameCount count={names.length} />
    </div>
  )
}

export default App
