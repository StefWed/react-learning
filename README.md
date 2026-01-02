## Learning React Mini Course


A small project to gain basic understanding about how to create a small app with React. Also adding daily notes, important key points - extensive version of learning note to be found in personal obsidian.


Day 1

Start with some [JavaScript snippets](https://github.com/StefWed/react-learning/tree/main/JavaScriptSnippets) for arrow function, object, array, map and filter. Looked at comparisons between Python and JavaScript.

Ran smaller snippets saved in files or in console, like:
```
node
const books = ["Dune", "The Hobbit"]
books.map(b => b.toUpperCase())
```
---
Day 2

Day 2 was more about theory - mental models: the problem React solves, about JSX, example for React-style component, and it was also about what react is not: a framework (it’s a library), responsible for routing, responsible for data fetching or responsible for styling. 

“React is about describing what the UI should look like for a given state, using functions.”

---
Day 3

Running `npm create vite@latest react-day3 -- --template react` in terminal, I used Vite to create a React app from a template. The preconfigured React app was run. In a first step, App.jsx was adapted to a more personalized UI. In a second step, a component Greeting.jsx was written, App.jsx was adapted to integrate the component. See readme in react-day3 for more info. 

---
Day 4

Read some theory about what State is. Add first state hook to App.jsx and ran app again. Looked deeper into some parts of the hook. See readme in react-day3 for more info. 

---
Day 5

Focused on passing data between components and handling user input in React. I worked with props as function arguments, introduced controlled inputs using useState, and connected user events (onChange) to state updates.

---
Day 6

Read some more info, theory on JSX and looked at examples for JSX. Covered Expressions in JSX, how to insert a larger block of HTML, comments in JSX and JSX in React components. Other than that, following take-aways: HTML code must be wrapped in ONE top level element. Alternatively, a "fragment" can be used to wrap multiple lines. HTML elements must be properly closed. The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX. Use  attribute className instead.

---
Day 7

Read some more info, theory on Components. Focus was on Function components - write a component, using it in the application, learned that arguments can be passed into a component as props. Also, one can refer to components inside other components, and render components twice, which mostly makes sense when working with arguments (props). Finally, how for practice (maintainability and so on), it makes sense to split components into seperate files. To do that, create a new file in the `src` folder with a `.jsx` file extension and put the code inside it (given using Vite). Note that the filename must start with an uppercase character. To be able to use the component, you have to import the `.jsx` file in your application (main.jsx).

--- 
Day 8

Looked more into Props and Events. 

Props are arguments passed into React components, and moreover Props are like function arguments in JavaScript and attributes in HTML. One can send as many properties as one wants. React props can be of any data type, including variables, numbers, strings, objects, arrays, and more. Strings can be sent inside quotes, but numbers, variables, and objects need to be sent inside curly brackets. Attributes are also how you pass data from one component to another, as parameters. Destructuring can be used to limit the properties a component. With Destructuring, one can set default values for props.

Just like HTML DOM events, React can perform actions based on user events. React has the same events as HTML: click, change, mouseover etc. Theory was about adding Events, about passing an rgument to an event handler (use an arrow function). 

---
Day 9

Built a dynamic name list application that demonstrates how user interactions flow through event handlers to update state, triggering component re-renders that reflect changes in the UI. I learned about the importance of key props when rendering lists, which help React efficiently track and update individual items. The exercise reinforced React's unidirectional data flow: user actions trigger handlers, handlers update state, and state changes cause targeted re-renders without full page reloads.

---
Day 10

The input functionality was refactored by extracting it into a separate AddName component, which keeps the code modular and maintainable. The names state was lifted up to the App component because both NameList (which displays names) and AddName (which adds names) need access to it. Child components now receive data through props and trigger changes by calling callback functions passed from the parent. This creates a predictable one-way data flow: props flow down from parent to children, and events flow up through callbacks, making the app easier to understand and debug.

---
Day 11

Started by introducing `useEffect` with a simple console log to show it runs after every render. The three dependency arrys were demonstrated: no array (every render), empty array (once on mount), and [names] (when names changes). Finally, this was applied to a practical example: persisting the names array to localStorage, using lazy state initialization to read saved data on mount and an effect with [names] dependency to automatically save changes. 
