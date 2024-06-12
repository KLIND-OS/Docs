# JSStyles SDK

JSStyles SDK se využívá pro psaní CSS stylů přímo v JavaScriptu. JSStyles se vytváří v konstruktoru vaši aplikace.

## Syntax

```javascript
const styles = new JSSElement("", undefined, [
  new JSSElement(
    `.${this.app.windowParser.parseClass(this.windowNames.MAIN)}`,
    new JSSStyles([new JSSStyle("color", "black")]),
    [
      new JSSElement(`button`,
        new JSSStyles([new JSSStyle("height", "50px")])
      )
    ]
  ),
]);
const compiledStyles = JSSCompiler.compile(styles);
JSSCompiler.add(compiledStyles);

// Compiled to:
// .tridaoknamain {color: black;} .tridaoknamain button {height: 50px;}
```

Zde se vytváří styly pro vaši aplikaci. První se vytváří prázdný element:

```javascript
const styles = new JSSElement("", undefined, [

]);
```

Má prázdný selector `""` a žádné styly `undefined` takže bude přeskočen. Využívá se na to aby jste do něj mohli vložit více elemetů.

Následně do něj vložímé další element. Ten bude mít selector třídy, která je získaná z funkce `parseClass`. Taky bude mít jeden styl. Ten bude color: black;

```javascript
const styles = new JSSElement("", undefined, [
  new JSSElement(
    `.${this.app.windowParser.parseClass(this.windowNames.MAIN)}`,
    new JSSStyles([new JSSStyle("color", "black")]),
    [
      
    ]
  ),
]);
```

Nyní řekneme že uvnitř okna `MAIN` bude button na který chceme vložit height: 50px.

```javascript
const styles = new JSSElement("", undefined, [
  new JSSElement(
    `.${this.app.windowParser.parseClass(this.windowNames.MAIN)}`,
    new JSSStyles([new JSSStyle("color", "black")]),
    [
      new JSSElement(`button`,
        new JSSStyles([new JSSStyle("height", "50px")])
      )
    ]
  ),
]);
```

Nyní máme finální kód. Nyní už ho jenom vložíme do compileru.

```javascript
const compiledStyles = JSSCompiler.compile(styles);
JSSCompiler.add(compiledStyles);
```

## Více podřadných elementů

Múžete taky mít více podřadných elementu. Kdybych chtěl nastavit styl pro `input` uvnitř `MAIN` okna přidám element do třetího argumentu konstruktoru třídy `JSSElement`. Následovně:

```javascript
const styles = new JSSElement("", undefined, [
  new JSSElement(
    `.${this.app.windowParser.parseClass(this.windowNames.MAIN)}`,
    new JSSStyles([new JSSStyle("color", "black")]),
    [
      new JSSElement(`button`,
        new JSSStyles([new JSSStyle("height", "50px")])
      ),
      new JSSElement(`input`,
        new JSSStyles([new JSSStyle("width", "150px")])
      )
    ]
  ),
]);
```

Nebo takto:

```javascript
const styles = new JSSElement("", undefined, [
  new JSSElement(
    `.${this.app.windowParser.parseClass(this.windowNames.MAIN)}`,
    new JSSStyles([new JSSStyle("color", "black")]),
    [
      new JSSElement(`button`,
        new JSSStyles([new JSSStyle("height", "50px")])
      ),
    ]
  ),
  new JSSElement(
    `.${this.app.windowParser.parseClass(this.windowNames.TEST)}`,
    new JSSStyles([new JSSStyle("color", "white")]),
    [
      new JSSElement(`input`,
        new JSSStyles([new JSSStyle("width", "150px")])
      ),
    ]
  ),
]);

// Compiled to
// .tridaoknamain {color: black;} .tridaoknamain button {height: 50px;} .tridaoknatest {color: white;} .tridaoknatest input {width: 150px;}
//
// Nezapomeňte že musíte mít taky vytvořené okno `TEST`
```
