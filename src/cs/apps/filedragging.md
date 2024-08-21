# File dragging API

Chcete aby vaše aplikace byla schopna příjmat souboru pomocí přetáhnutí souboru? File dragging API je tady právě pro to.

## Registrovat zónu pro příjmání souboru

Můžete registrovat místo kde budou přetáhnuté soubory akceptovány pomocí elementu. Bude to taky obsahovat všechny child elementy.

```javascript
const element = document.querySelector(".yourelement");
FileDraggingAPI.registerDroppable(
  element, // Jaký element by měl příjmat soubory
  true, // Jestli má příjmat soubory
  true, // Jestli má příjmat složky
  "Open", // Pomocný text, který se ukáže když uživatel přetahuje souborem/složkou přes váš element
  (path, type) => {
    if (type == "file") {
      console.log("Soubor přetáhnut! Cesta:", path);
    } else if (type == "folder") {
      console.log("Soubor přetáhnut! Cest:", path);
    }
  },
  (hovering, type) => {
    if (hovering) {
      if (type == "file") {
        console.log("Soubor je umístěn nad elementem");
      } else if (type == "folder") {
        console.log("Složka je umístěna nad elementem");
      }

      // Tímto způsobem můžete vytvořit animace když soubor/složka bued umístěna nad vaším elementem
      element.style.opacity = "0.8";
    } else {
      if (type == "file") {
        console.log("Soubor není umístěn nad elementem");
      } else if (type == "folder") {
        console.log("Složka není umístěn nad elementem");
      }

      // Resetovat animaci
      element.style.opacity = "1";
    }
  }
);
```

## Register file/folder

Můžete registrovar soubor/složku pomocí register funkce.

### Soubor

```javascript
const element = win.querySelector(".yourelement");
FileDraggingAPI.registerFile(element, "filename", "/path/to/file.txt");
```

### Složka

```javascript
const element = win.querySelector(".yourelement");
FileDraggingAPI.registerFolder(element, "foldername", "/path/to/folder");
```
