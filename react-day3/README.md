# React + Vite

### First Step

`npm create vite@latest react-day3 -- --template react`

means:

    npm create vite@latest → run Vite’s project generator

    react-day3 → name of the new folder/project

    --template react → use the React starter template


### First adaption to app

    function App() {
    const name = "Steffi"

    return (
        <div>
        <h1>Hello {name}</h1>
        <p>This is my first React component.</p>
        </div>
    )
    }

    export default App
