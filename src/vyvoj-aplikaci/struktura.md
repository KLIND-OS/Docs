# Správné strukturování kódu

KLIND OS má pravidla pro správné strukturování kódu. Nikdo vás nebude nutit toto pravidlo dodržovat, ale aby jste předešli problémům, toto pravidlo doporučuji dodržovat.

## Třídy

Každá aplikace je jedna třída a používá se ClassConstructor na vytváření aplikací.

```javascript
class PoznamkovyBlok {
    constructor() {
        this.app = new App({
            name: "Název aplikace",
            hidden: false
        })
        this.app.createWindow({
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
    }
}

ClassConstructor.add(PoznamkovyBlok);
```

## Všechny funkce se dávají do této třídy
Všechny funkce se dávají do této třídy. Pokud chcete spustit funkci, třídu najdete v objektu "ClList"

```javascript
class PoznamkovyBlok {
    constructor(key) {
        this.app = new App({
            name: "Název aplikace",
            hidden: false
        })
        this.app.createWindow({
            name: "Název okna",
            buttons: {
                close: (win) => {
                    console.log("Aplikace byla zavřena")
                },
                mini: (win) => {
                    console.log("Aplikace byla minimizována")
                }
            },
            content: `<h1>Ahoj</h1><button onclick="ClList['${key}'].ahoj()">Ahoj</button`,
            defaultWindow: true,
            onStart: (win) => {
                console.log("Aplikace byla spuštěna")
            }
        })
    }
    ahoj() {
        control.notify(this.app.info.name, "Ahoj")
    }
}

ClassConstructor.add(PoznamkovyBlok);
```
