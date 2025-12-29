# Working with React + Vite to create a first app (started: day 3)

#### First Step - using Vite to create a React app from a template

`npm create vite@latest react-day3 -- --template react`

means:

    npm create vite@latest → run Vite’s project generator

    react-day3 → name of the new folder/project

    --template react → use the React starter template


#### First adaption to app: Modify App.jsx where the first generated component lives

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

#### Add a new component in a seperate file

It is a good idea to split components into separate files. To do that, create a new file in the `src` folder with a `.jsx` file extension and put the code inside it. Created `src/Greeting.jsx`.

    function Greeting({ name }) {
      return <h2>Hello {name}</h2>
    }
    
    export default Greeting

To be able to use the new component, it needs to be imported in the beginning of main.jsx. 

    import Greeting from './Greeting'
    
    function App() {
      return (
        <div>
          <Greeting name="Steffi" />
          <Greeting name="React" />
          <Greeting name="World" />
        </div>
      )
    }
    
    export default App

#### Add a first state hook

The React `useState` Hook allows us to track state in a function component.

    import { useState } from 'react'
    
    function App() {
      const [count, setCount] = useState(0)
    
      return (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={() => setCount(count + 1)}>
            Increment
          </button>
        </div>
      )
    }
    
    export default App

A simple counter that increments on click and shows the current value. (Button click - Calls setCount(count + 1), updating state.)
