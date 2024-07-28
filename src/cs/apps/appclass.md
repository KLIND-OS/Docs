# Třída App

Třída App se využívá pro registraci aplikace do KLIND OS. Konstruktovat tuto aplikaci je nutné pokaždé při startu KLIND OS.

Tato třída se dává do konstruktoru soukromé třídy která se přidává do ClassAutoConstructoru.

## Ukázka app třídy

```javascript
ClassConstructor.add(
  class {
    app;
    key;

    windowNames = windowNames;

    constructor(key) {
      this.key = key;

      // Třída app
      this.app = new App({
        name: "test",
        hidden: false,
      });

      addWindows.bind(this)();

      styles.bind(this)();
    }
  }
);
```

## Funkce třídy app

Třída app má několik funkcí na úpravu funkcionality vaši aplikace.

## Create window

Funkce `createWindow` se využíá na vytváření okna.

```javascript
import mainStart from "./MAIN/start";

export const windowNames = {
  MAIN: "Hlavní okno",
};

export function addWindows() {
  // Volání funkce createWindow
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

Dokumentace pro AppData je [zde](appdata.md).

## Storage

Dokumentace pro Storage SDK je [zde](storage.md).

## Window parser

Window parser se využívá pro získání vygenerovaného názvu okna nebo vygenerovanéhé třídy okna.

### Parse class

```javascript
const windowclass = this.app.windowParser.parseClass(this.windowNames.MAIN);
```

Nyní tuto třídu můžete použít v [JSStyles](jsstyles.md). Nezapomeňte přidat na začátek `.` selector pro CSS.

### Parse name

Systémové jméno okna se následně používá pro otevírání aplikace.

```javascript
const windowname = this.app.windowParser.parseName(this.windowNames.MAIN);
// Otevřít okno
windows.open(windowname);
```

## File open

Otevírání souborů vaší aplikací

### Register

Funkce `register` se volá pro zaregistrování aplikace pro otevírání specifického typu souboru.

```javascript
this.app.fileOpen.register(["txt", "csv"], (path) => {
  windows.open(this.app.windowParser.parseName(this.windowNames.MAIN), {
    path,
  });
});

// Nebo
this.app.fileOpen.register("txt", (path) => {
  windows.open(this.app.windowParser.parseName(this.windowNames.MAIN), {
    path,
  });
});
```

### Supported

`Set` podporovaných typů souborů, které jste zaregistrovali.

```javascript
console.log(this.app.fileOpen.supported);
```
