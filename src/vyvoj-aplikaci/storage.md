# Storage API

Storage API se používá pro aplikace na ukládání dat.

Normálně se data aplikací ukládají do souboru ale v KLIND OS se ukládají do storage.

## Jak použít storage API

Jako první si musíme vytvořit aplikaci.

```javascript
var aplikace = new App({
    name: "Název aplikace",
    hidden: false
})
aplikace.createWindow({
    name: "Test",
    buttons: {
        close: (win) => {

        },
        mini: (win) => {

        }
    },
    content: `
        <textarea></textarea>
        <button onclick="saveTextTest(this.parentElement)">Uložit</button>
    `,
    defaultWindow: true,
    onStart: (win) => {
        // Získat naposledy uložený text a dát ho do textarea
    }
})
function saveTextTest(win) {
    // Uložit text do paměti
}
```

Nyní musíme implementovat `onStart` a `saveTextTest`. Začneme ukládáním.

## Ukládání do storage API

Naimplementujeme funkci která bude ukládat text

```javascript
function saveTextTest(el) {
    // Uložit text do paměti
    var text = el.querySelector("textare").value
    aplikace.storage.set("ulozeny-text", text)
}
```

## Načítání z paměti

Nyní naimplementujeme funkci která bude načítat uložený text

```javascript
onStart: (win) => {
    // Získat naposledy uložený text a dát ho do textarea
    var text = aplikace.storage.get("ulozeny-text")
    win.querySelector("textarea").value = text
}
```

## Funkce clear a remove
Existují taky funkce `clear` a `remove`.
```javascript
aplikace.storage.clear();
aplikace.storage.remove("ulozeny-text")
```

## Výsledný kód

A výsledný kód bude vypadat takto

```javascript
var aplikace = new App({
    name: "Název aplikace",
    hidden: false
})
aplikace.createWindow({
    name: "Test",
    buttons: {
        close: (win) => {

        },
        mini: (win) => {

        }
    },
    content: `
        <textarea></textarea>
        <button onclick="saveTextTest(this.parentElement)">Uložit</button>
    `,
    defaultWindow: true,
    onStart: (win) => {
        // Získat naposledy uložený text a dát ho do textarea
        var text = aplikace.storage.get("ulozeny-text")
        win.querySelector("textarea").value = text
    }
})
function saveTextTest(el) {
    // Uložit text do paměti
    var text = el.querySelector("textare").value
    aplikace.storage.set("ulozeny-text", text)
}
```