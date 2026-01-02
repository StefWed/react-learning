function NameList({ names }) {
  return (
    <ul>
      {names.map(name => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  )
}

export default NameList
