# Storage API

Storage API se používá pro aplikace na ukládání dat.

Normálně se data aplikací ukládají do souboru ale v KLIND OS se ukládají do storage.

## Jak použít storage API

Jako první si musíme vytvořit aplikaci.

```javascript
class _NazevaplikacePublic {
  static key;
}

class NazevaplikaceApp {
  app;
  functions = {
    saveText: (win) => {
      // Uložit text do paměti
    },
  };
  windowNames = {
    MAIN: "Test",
  };
  contents = {
    MAIN: `
      <textarea></textarea>
      <button onclick="ClList[_NazevaplikacePublic.key].functions.saveText(this.parentElement)">Uložit</button>
    `,
  };

  mainOpen(win) {
    // Získat naposledy uložený text a dát ho do textarea
  }

  constructor(key) {
    _NazevaplikacePublic.key = key;
    this.app = new App({
      name: "Název aplikace",
      hidden: false,
    });

    this.mainOpen = this.mainOpen.bind(this);

    this.app.createWindow({
      name: this.windowNames.MAIN,
      buttons: {
        close: () => {},
        mini: () => {},
      },
      onStart: this.mainOpen,
      content: this.contents.MAIN,
      defaultWindow: true,
    });

    // CSS styly
    const styles = new JSSElement(
      `.${this.app.windowParser.parseClass(this.windowNames.MAIN)}`,
      undefined,
      [
        new JSSElement(
          `textarea`,
          new JSSStyles([new JSSStyle("color", "black")])
        ),
      ]
    );
    const compiledStyles = JSSCompiler.compile(styles);
    JSSCompiler.add(compiledStyles);
  }
}

ClassConstructor.add(NazevaplikaceApp);
```

Nyní musíme implementovat `mainOpen` a `saveText`. Začneme ukládáním.

## Ukládání do storage API

Naimplementujeme funkci která bude ukládat text

```javascript
saveText: (win) => {
  // Uložit text do paměti
  var text = win.querySelector("textarea").value;
  this.app.storage.set("ulozeny-text", text);
};
```

## Načítání z paměti

Nyní naimplementujeme funkci která bude načítat uložený text

```javascript
mainOpen(win) {
  // Získat naposledy uložený text a dát ho do textarea
  var text = this.app.storage.get("ulozeny-text") || "";
  win.querySelector("textarea").value = text;
}
```

## Funkce clear a remove

Existují taky funkce `clear` a `remove`.

```javascript
this.app.storage.clear();
this.app.storage.remove("ulozeny-text");
```

## Výsledný kód

A výsledný kód bude vypadat takto

```javascript
class _NazevaplikacePublic {
  static key;
}

class NazevaplikaceApp {
  app;
  functions = {
    saveText: (win) => {
      // Uložit text do paměti
      var text = win.querySelector("textarea").value;
      this.app.storage.set("ulozeny-text", text);
    },
  };
  windowNames = {
    MAIN: "Test",
  };
  contents = {
    MAIN: `
      <textarea></textarea>
      <button onclick="ClList[_NazevaplikacePublic.key].functions.saveText(this.parentElement)">Uložit</button>
    `,
  };

  mainOpen(win) {
    // Získat naposledy uložený text a dát ho do textarea
    var text = this.app.storage.get("ulozeny-text") || "";
    win.querySelector("textarea").value = text;
  }

  constructor(key) {
    _NazevaplikacePublic.key = key;
    this.app = new App({
      name: "Název aplikace",
      hidden: false,
    });

    this.mainOpen = this.mainOpen.bind(this);

    this.app.createWindow({
      name: this.windowNames.MAIN,
      buttons: {
        close: () => {},
        mini: () => {},
      },
      onStart: this.mainOpen,
      content: this.contents.MAIN,
      defaultWindow: true,
    });

    // CSS styly
    const styles = new JSSElement(
      `.${this.app.windowParser.parseClass(this.windowNames.MAIN)}`,
      undefined,
      [
        new JSSElement(
          `textarea`,
          new JSSStyles([new JSSStyle("color", "black")])
        ),
      ]
    );
    const compiledStyles = JSSCompiler.compile(styles);
    JSSCompiler.add(compiledStyles);
  }
}

ClassConstructor.add(NazevaplikaceApp);
```
