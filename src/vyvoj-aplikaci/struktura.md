# Správné strukturování kódu

KLIND OS má pravidla pro správné strukturování kódu. Nikdo vás nebude nutit toto pravidlo dodržovat, ale aby jste předešli problémům, toto pravidlo doporučuji dodržovat.

## Třídy

Každá aplikace je jedna třída

```javascript
class PoznamkovyBlok {
    static app = new App({
        name: "Název aplikace",
        hidden: false
    })
    static defaultWindow = this.app.createWindow({
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
```

## Všechny funkce se dávají do této třídy

```javascript
class PoznamkovyBlok {
    static app = new App({
        name: "Název aplikace",
        hidden: false
    })
    static defaultWindow = this.app.createWindow({
        name: "Název okna",
        buttons: {
            close: (win) => {
                console.log("Aplikace byla zavřena")
            },
            mini: (win) => {
                console.log("Aplikace byla minimizována")
            }
        },
        content: `<h1>Ahoj</h1><button onclick="PoznamkovyBlog.ahoj()">Ahoj</button`,
        defaultWindow: true,
        onStart: (win) => {
            console.log("Aplikace byla spuštěna")
        }
    })
    static ahoj() {
        spawnNotification(PoznamkovyBlog.infor.name, "Ahoj")
    }
}
```