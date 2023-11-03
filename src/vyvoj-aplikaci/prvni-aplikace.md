# Vytvoření první aplikace

Vytvořte si složku a poté 2 soubory. `install.js` a `script.js`. Do těchto souborů budeme psát naši aplikaci.

Vytvoříme si hello world aplikaci. Ze začátku budeme psát pouze do script.js.

## Vytvoření aplikace

Začneme tím že si vytvoříme aplikaci pomocí KLIND OS Api:

```javascript
var aplikace = new App({
    name: "Název aplikace",
    hidden: false
})
```

`name` je název vaší aplikace a `hidden` je hodnota která udává jestli aplikace se má ukazovat ve start menu.

## Vytvoření výchozího okna

Nyní si vytvoříme výchozí okno:

```javascript
aplikace.createWindow({
    name: "Název okna",
    buttons: {
        close: (win) => {
            console.log("Aplikace byla zavřena")
        },
        mini: (win) => {
            console.log("Aplikace byla minimizována")
        }
    },
    content: `<h1>Hello World!</h1>`,
    defaultWindow: true,
    onStart: (win) => {
        console.log("Aplikace byla spuštěna")
    }
})
```

Hodnota `name` udává název okna (většinou se dává stejná jako název aplikace)

Hodnota `buttons` je objekt který obsahuje hodnoty `close` a `mini` která říká jestli má být minimalizační a zavírací tlačítko v horní liště. Tyto hodnoty můžete vynechat a můžete dát např. `buttons: {}`. To znamená že aplikace nebude mít ani minimalizaci ani zavření.

## Finální kód

A tohle je finální kód:

```javascript
// Vytvoření aplikace
var aplikace = new App({
    name: "Název aplikace",
    hidden: false
})

// Vytvoření výchozího okna
aplikace.createWindow({
    name: "Název okna",
    buttons: {
        close: (win) => {
            console.log("Aplikace byla zavřena")
        },
        mini: (win) => {
            console.log("Aplikace byla minimizována")
        }
    },
    content: `<h1>Ahoj</h1>`,
    defaultWindow: true,
    onStart: (win) => {
        console.log("Aplikace byla spuštěna")
    }
})
```
