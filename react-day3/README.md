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


#### Passing props from a parent component (App) to a child component (Greeting) (done in App.jsx)

    import { useState } from 'react'
    import Greeting from './Greeting'
    
    function App() {
      const [name, setName] = useState("Steffi")
    
      return (
        <div>
          <Greeting name={name} />
        </div>
      )
    }
    
    export default App

name={name} is passing the prop. The Greeting component receives name as a prop (argument). So Greeting name={name} is like calling a function with an argument: Greeting({name: "Steffi"}).


#### Controlled Input - Controlled Component

    function App() {
      const [name, setName] = useState("Steffi")
    
      return (
        <div>
          <Greeting name={name} />
    
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      )
    }

This adds an input field which lets one type a name. As one types, onChange updates the state with setName, which re-renders and shows the new name in the Greeting component.

#### Breaking out the handler - define the handler separately for cleaner code

    import { useState } from 'react'
    import Greeting from './Greeting'
    
    function App() {
      const [name, setName] = useState("Steffi")
    
      function handleChange(event) {
        setName(event.target.value)
      }
    
      return (
        <div>
          <Greeting name={name} />
    
          <input
            value={name}
            onChange={handleChange}
          />
    
          { name && <p>You typed: {name}</p> }
        </div>
      )
    }
    
    export default App

Events (click, change, mouseover) are data pipelines. The event object carries data from the DOM element to the handler function, which then updates state.

#### Render a List in React

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

When React renders a list, it needs to track which items are which - especially when the list changes (items added, removed, or reordered). Keys are needed to do so - without keys, React can't efficiently figure out what changed.


#### Extracting a List Component

Create src/NameList.jsx:

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

Use in App.jsx:

    import { useState } from 'react'
    import NameList from './NameList'

    function App() {
      const [names] = useState(["Steffi", "Alex", "Jamie"])

      return (
        <div>
          <h1>Names</h1>
          <NameList names={names} />
        </div>
      )
    }

    export default App

This extracts the list rendering logic into its own reusable component. Instead of having the `.map()` code directly in App, ou move it to NameList.

#### Dynamic Lists

Add an input and button.

    import { useState } from 'react'
    import NameList from './NameList'

    function App() {
      const [names, setNames] = useState(["Steffi", "Alex"])
      const [newName, setNewName] = useState("")

      function addName() {
        setNames([...names, newName])
        setNewName("")
      }

      return (
        <div>
          <h1>Names</h1>

          <NameList names={names} />

          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />

          <button onClick={addName}>Add</button>
        </div>
      )
    }

    export default App

There are two pieces of state: newName and names. The input filed controlled by newName state. The button calls addName which adds newName tothe names array, then clears the output.


#### Refactor: move input into its own component

Create new file src/AddName.jsx

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

This component does not own the list, it only reports intent ("add this name").


#### Lift State Up to App

Update App.jsx

    import { useState } from 'react'
    import NameList from './NameList'
    import AddName from './AddName'

    function App() {
      const [names, setNames] = useState(["Steffi", "Alex"])

      function addName(name) {
        if (!name) return
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

`const [names, setNames] = useState(["Steffi", "Alex"])`
The "source of truth" - App owns the list of names


Now:
- `App` owns the data
- `AddName` triggers changes
- `NameList` just displays

Reusable components: `AddName` doesn't care _what_ list it's adding to. You could use it for names, tasks, or emails - just pass a different `onAdd` function.

Predictable data flow: There's only one place where `names` can change: the `App` component. You always know where to look.

Easy debugging: If the name list is wrong, you check `App`. If the input behaves oddly, you check `AddName`. Clear boundaries.

React avoids shared mutable state: Instead of multiple components directly modifying the same data (which causes chaos), only the owner can change it.

Components secretly changing each other: `AddName` can't reach into `NameList` and mess with it. Everything goes through `App` as the mediator.


#### Add first useEffect

In App.jsx add:

     import { useEffect, useState } from 'rect'

Inside the component:

    useEffect(() => {
      console.log("Effect ran")
    })

This is a minimal introduction to `useEffect` that demonstrates its most basic behavior. It can be controlled when the effect runs: The three dependency arrys were demonstrated: no array (every render), empty array (once on mount), and [names] (when names changes).

#### Practical Example

Add this effect to App:

    useEffect(() => {
      localStorage.setItem("names", JSON.stringify(names))
    }, [names])


Initialize state from storage:

    const [names, setNames] = useState(() => {
      const saved = localStorage.getItem("names")
      return saved ? JSON.parse(saved) : ["Steffi", "Alex"]
    })

localStorage = browser’s tiny persistent database

**What's happening:**
1. **Lazy initialization** - `useState(() => {...})` runs only once on mount to read from localStorage. This avoids parsing JSON on every render.
2. **Sync to localStorage** - whenever `names` changes, the effect saves the new value. This happens _after_ the render, so the UI updates immediately and storage syncs in the background.
3. **The cycle** - load from storage → render → user updates state → React re-renders → effect saves to storage → refresh page → repeat