# App class

The App class is used to register an application to KLIND OS. It is necessary to construct this application every time KLIND OS is started.

This class is put into the private class constructor which is added to the ClassAutoConstructor.

## Sample app class

```javascript
ClassConstructor.add(
  class {
    apps;
    keys;

    windowNames = windowNames;

    constructor(key) {
      this.key = key;

      // App class
      this.app = new App({
        name: "test",
        hidden: false,
      });

      addWindows.bind(this)();

      styles.bind(this)();
    }
  },
);
```

## Function of class app

The app class has several functions to modify the functionality of your application.

## Create window

The `createWindow` function is used to create a window.

```javascript
import mainStart from "./MAIN/start";

export const windowNames = {
  MAIN: "Main Window",
};

export function addWindows() {
  // Call the createWindow function
  this.app.createWindow({
    name: windowNames.MAIN,
    buttons: {
      close: () => {},
      mini: () => {},
    },
    onStart: mainStart,
    defaultWindow: true,
    content: "pages/main.html",
  });
}
```

## AppData

Documentation for AppData is [here](appdata.md).

## Storage

Documentation for the Storage SDK is [here](storage.md).

## Window parser

The window parser is used to get the generated window name or the generated window class.

### Parse class

```javascript
const windowclass = this.app.windowParser.parseClass(this.windowNames.MAIN);
```

Now you can use this class in [JSStyles](jsstyles.md). Don't forget to add the `.` CSS selector at the beginning.

### Parse name

The system name of the window is then used to open the application.

```javascript
const windowname = this.app.windowParser.parseName(this.windowNames.MAIN);
// Open the window
windows.open(windowname);
```

## File open

Opening your application files

### Register

The `register` function is called to register the application to open a specific file type.

```javascript
this.app.fileOpen.register(["txt", "csv"], (path) => {
  windows.open(this.app.windowParser.parseName(this.windowNames.MAIN), {
    path,
  });
});

// Or
this.app.fileOpen.register("txt", (path) => {
  windows.open(this.app.windowParser.parseName(this.windowNames.MAIN), {
    path,
  });
});
```

### Supported

The `set` of supported file types that you have registered.

```javascript
console.log(this.app.fileOpen.supported);
```
