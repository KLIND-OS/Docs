# Shortcuts API

API pro vytváření globálních a window-specific zkratek.

## Shortcut třída

První si budete muset vytvořit Shortcut třídu. Tato třída se dále bude používat v dalším kroku. První parametr constructoru je Array kláves pro danou zkratku. Zkratka je ve stringu a je to tento formát: [dokumentace](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)

Jako druhý argument se dává funkce, která se vyvolá při stisku klávesy.

```javascript
const shortcut = new Shortcut(["Meta", "o"], () => {
  // Executes when user presses Win + o
  console.log("idk");
});
```

## Vytvoření globální zkratky

Pro vytvoření globální zkratky musíte vyvolat funkci `createGlobalShortcut`. Do dané funkce musíte vložit [Shortcut třídu](#shortcut-trida).

```javascript
this.app.Shortcuts.createGlobalShortcut(
  new Shortcut(["Meta", "o"], () => console.log("idk"))
);
```

## Vytvoření window-specific zkratky

Pro vytvoření window-specific zkratky musíte vyvolat funkce `createWindowShortcut`. První parametr bude string názvu daného okna, druhý argument bude [Shortcut třída](#shortcut-trida)

```javascript
this.appShortcuts.createWindowShortcut(
  this.windowNames.MAIN,
  new Shortcut(["Meta", "o"], () => console.log("idk"))
);
```
