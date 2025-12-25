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

 Running `npm create vite@latest react-day3 -- --template react` in terminal, I used Vite to create a React app from a template. The preconfigured React app was run. In a first step, App.jsx was adapted to a more personalized UI. In a second step, a component Greeting.jsx was written, App.jsx was adapted to integrate the component. See specific readme for more info. 
