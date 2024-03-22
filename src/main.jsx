import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.querySelector("#root");

const tasks = ["Book to read","Place to travel","Bed to Sleep", "Time to Sleep"];

const root = createRoot(rootElement)
root.render(
  createElement("div", null,
    createElement("h1", null, "Todo App"),
    createElement("form", null,
      createElement("input", null),
      createElement("button", null, "Click")
    ),
    createElement("ul",null,
      // createElement("li",null,"Book to read"),
      // createElement("li",null,"Place to travel"),
      // createElement("li",null,"Bed to Sleep")
      tasks.map((task,index) => createElement("li",{key: index, className: "list pb-4", title:"listName"},task))
    )
  )
);