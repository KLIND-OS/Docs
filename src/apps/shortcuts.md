# Shortcuts API

API for creating global and window-specific shortcuts.

## Shortcut class

First you will need to create a Shortcut class. This class will be used further in the next step. The first parameter of the constructor is the Array of keys for the given shortcut. The shortcut is in a string and is in this format: [documentation](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)

The second argument is a function that is invoked when a key is pressed.

```javascript
const shortcut = new Shortcut(["Meta", "o"], () => {
  // Executes when user presses Win + o
  console.log("idk");
});
```

## Creating a global shortcut

To create a global shortcut, you must call the `createGlobalShortcut` function. You need to insert [Shortcut class](#shortcut-trida) into the given function.

```javascript
this.app.Shortcuts.createGlobalShortcut(
  new Shortcut(["Meta", "o"], () => console.log("idk")),
);
```

## Create a window-specific shortcut

To create a window-specific shortcut, you must call the `createWindowShortcut` function. The first parameter will be the string of the given window name, the second argument will be [Shortcut class](#shortcut-trida)

```javascript
this.appShortcuts.createWindowShortcut(
  this.windowNames.MAIN,
  new Shortcut(["Meta", "o"], () => console.log("idk")),
);
```
