# ContextMenu API

API for creating a menu that appears when you right-click on a specific element.

## ContextMenu to only one element

Creating a context menu for only one element is very simple.

```javascript
const element = document.querySelector(".yourelement");

new ContextMenu(element, [
  new ContextMenuItem("Option 1", () => {
    console.log("Option 1 pressed");
  }),
  new ContextMenuItem("Option 2", () => {
    console.log("Option 2 pressed");
  }),
  new ContextMenuItem("Option 3", () => {
    console.log("Option 3 pressed");
  }),
]);
```

## Context menu for array elements

```javascript
const elements = [
 document.querySelector(".vaselement"),
 document.querySelector(".vaselement2"),
];

new ContextMenu(
 elements
 [
 new ContextMenuItem("Option 1", (el) => {
 console.log("Context menu was opened from: ", el);
 console.log("Option 1 pressed");
 }),
 new ContextMenuItem("Option 2", (el) => {
 console.log("Context menu was opened from: ", el);
 console.log("Option 2 pressed");
 }),
 new ContextMenuItem("Option 3", (el) => {
 console.log("Context menu was opened from: ", el);
 console.log("Option 3 pressed");
 }),
 ],
 true
);
```

Don't forget to add a third argument that says the input is an array.

## Custom invocation of the context menu

```javascript
const contextmenu = new ContextMenu(undefined, [
  new ContextMenuItem("Option 1", (passArgument) => {
    console.log("Argument passed: ", passArgument);
    console.log("Option 1 pressed");
  }),
  new ContextMenuItem("Option 2", (passArgument) => {
    console.log("Argument passed: ", passArgument);
    console.log("Option 2 pressed");
  }),
  new ContextMenuItem("Option 3", (passArgument) => {
    console.log("Argument passed: ", passArgument);
    console.log("Option 3 pressed");
  }),
]);

const xposition = 25; // 25px from left. Tj left: 25px;
const yposition = 70; // 70px from top. Ie top: 70px;
const passArgument = "something"; // A transformation that you can then send via the context menu and get back when you press the option in the context menu.

contextmenu.manualTrigger(xposition, yposition, passArgument);
```
