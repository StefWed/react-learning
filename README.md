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

Focused on passing data between components and handling user input in React. I worked with props as function arguments, introduced controlled inputs using useState, and connected user events (onChange) to state updates. This day emphasized React’s “single source of truth” principle and showed how UI can be conditionally rendered based on state.

---
Day 6

Read some more info, theory on JSX and looked at examples for JSX. Covered Expressions in JSX, how to insert a larger block of HTML, comments in JSX and JSX in React components. Other than that, following take-aways: HTML code must be wrapped in ONE top level element. Alternatively, a "fragment" can be used to wrap multiple lines. HTML elements must be properly closed. The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.
Use  attribute className instead.

---
Day 7

Read some more info, theory on Components and Props. Focus for components was on Function components - write a component, using it in the application, that arguments can be passed into a component as props. Also, one can refer to components inside other components, and render components twice, whichmostly makes sense when working with arguments (props). Finally, how for parctice (maintainability and so on), it makes sense to split components into seperate files. To do that, create a new file in the `src` folder with a `.jsx` file extension and put the code inside it (given using Vite). Note that the filename must start with an uppercase character. To be able to use the component, you have to import the `.jsx` file in your application (main.jsx).
