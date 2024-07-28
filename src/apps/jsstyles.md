# JSStyles SDK

The JSStyles SDK is used for writing CSS styles directly in JavaScript. JSStyles are created in the constructor of your application.

## Syntax

```javascript
const styles = new JSSElement("", undefined, [
  new JSSElement(
    `.${this.app.windowParser.parseClass(this.windowNames.MAIN)}`,
    new JSSStyles([new JSSStyle("color", "black")]),
    [new JSSElement(`button`, new JSSStyles([new JSSStyle("height", "50px")]))],
  ),
]);
const compiledStyles = JSSCompiler.compile(styles);
JSSCompiler.add(compiledStyles);

// Compiled to:
// .tridaoknamain {color: black;} .tridaoknamain button {height: 50px;}
```

This is where the styles for your app are created. First, an empty element is created:

```javascript
const styles = new JSSElement("", undefined, []);
```

It has an empty `""` selector and no `undefined` styles so it will be skipped. It is used so that you can insert more elements into it.

Subsequently, we will insert another element into it. It will have a class selector that is obtained from the `parseClass` function. It will also have one style. It will be color: black;

```javascript
const styles = new JSSElement("", undefined, [
  new JSSElement(
    `.${this.app.windowParser.parseClass(this.windowNames.MAIN)}`,
    new JSSStyles([new JSSStyle("color", "black")]),
    [],
  ),
]);
```

Now let's say that inside the `MAIN` window there will be a button on which we want to insert height: 50px.

```javascript
const styles = new JSSElement("", undefined, [
  new JSSElement(
    `.${this.app.windowParser.parseClass(this.windowNames.MAIN)}`,
    new JSSStyles([new JSSStyle("color", "black")]),
    [new JSSElement(`button`, new JSSStyles([new JSSStyle("height", "50px")]))],
  ),
]);
```

Now we have the final code. Now we just put it in the compiler.

```javascript
const compiledStyles = JSSCompiler.compile(styles);
JSSCompiler.add(compiledStyles);
```

## More child elements

You can also have multiple child elements. If I wanted to set the style for the `input` inside the `MAIN` window, I would add an element to the third argument of the constructor of the `JSSElement` class. As follows:

```javascript
const styles = new JSSElement("", undefined, [
  new JSSElement(
    `.${this.app.windowParser.parseClass(this.windowNames.MAIN)}`,
    new JSSStyles([new JSSStyle("color", "black")]),
    [
      new JSSElement(`button`, new JSSStyles([new JSSStyle("height", "50px")])),
      new JSSElement(`input`, new JSSStyles([new JSSStyle("width", "150px")])),
    ],
  ),
]);
```

Or like this:

```javascript
const styles = new JSSElement("", undefined, [
  new JSSElement(
    `.${this.app.windowParser.parseClass(this.windowNames.MAIN)}`,
    new JSSStyles([new JSSStyle("color", "black")]),
    [new JSSElement(`button`, new JSSStyles([new JSSStyle("height", "50px")]))],
  ),
  new JSSElement(
    `.${this.app.windowParser.parseClass(this.windowNames.TEST)}`,
    new JSSStyles([new JSSStyle("color", "white")]),
    [new JSSElement(`input`, new JSSStyles([new JSSStyle("width", "150px")]))],
  ),
]);

// Compiled it
// .tridaoknamain {color: black;} .tridaoknamain button {height: 50px;} .tridaoknatest {color: white;} .tridaoknatest input {width: 150px;}
//
// Don't forget that you must also have a `TEST` window created
```
