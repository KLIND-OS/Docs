# File Manager API

Pokud chcete pracovat se soubory ve vaši aplikaci pro KLIND OS, File Manager API je na to udělané.

Všechny funkce, které upravují soubor berou také bypass klíč. Více info v [FileLocker API](filelocker.md)

## Open With

`openWith` je objekt který obsahuje programy které se mají spustit podle toho co je to za formát souboru.

```javascript
console.log(control.fileManager.openWith);
```

## Open

`open` se používá na otevření souboru. Funkce `open` bere 2 parametry. Složku ve které je daný soubor a název souboru.

```javascript
await control.fileManager.open(folder, file);
// Např.
await contol.fileManager.open("/Downloads/", "file.txt");
```

## openFileWithApp

Tato funkce není pro API a používá se v jiných funkcích.

## Properties

`properties` je funkce která otevře okno vlastnosti souboru. Tato funkce bere cestu k souboru.

```javascript
await control.fileManager.properties(cesta);
// Např.
await control.fileManager.properties("/Downloads/file.txt");
```

## Save

Funkce `save` se používá pokud chcete uložit data do souboru.

```javascript
const binaryData = Buffer.from("Hello, World!", "utf-8");
await control.fileManager.save("/file.txt", binaryData);
```

## Save text

**Deprecated!**

Funkce `saveText` je deprecated. Použíjte tohle místo toho:

```javascript
await control.fileManager.save("/file.txt", "ahoj", undefined, "utf8");
```

(pokud používáte bypass klíč na ukládání vložte ho místo undefined)

## Set wallpaper

Tato funkce se používá na nastavení pozadí. Bere jeden parametr a to je cesta k souboru.

```javascript
control.fileManager.setWallpaper("/wallpaper.jpg");
```

## Get content

Funkce `getContent` se používá když chcete získat obsah souboru. Bere jeden nebo dva parametry. První parameter je cesta k souboru. Druhý volitelný parametr je encoding (default je "binary").

```javascript
console.log(await control.fileManager.getContent("/file.jpg"));
```

## Get text content

**Deprecated!**

Funkce `getTextContent` je deprecated. Použíjte tohle místo toho:

```javascript
console.log(await control.fileManager.getContent("/file.txt", "utf8"));
```

## Folder Exist

Funkce `folderExist` zjistí jestli složka existuje. Bere jeden parametr a to je cesta ke složce.

```javascript
if (await control.fileManager.folderExist("/folder")) {
  console.log("existuje");
} else {
  console.log("neexistuje");
}
```

## All Files

Funkce `allFiles` vrátí všechny soubory ve složce. Bere jeden parametr a to je cesta ke složce.

```javascript
await control.fileManager.allFiles("/folder");
```

## Create File

Async funkce `create file` se používá pro vytváří souboru. Bere 4 parametry ve formátu objektu:

1. `name`: Název souboru
2. `parentFolder` (volitelné): Složke ve které bude soubor uložen. Výchozí "/"

## File Exists

Funkce `fileExists` vrací `true` nebo `false` jestli soubor existuje podle cesty.

```javascript
if (await control.fileManager.fileExists("/file.txt")) {
  console.log("Soubor existuje!");
} else {
  console.log("Soubor neexistuje!");
}
```

## Add Program To Open Apps

Funkce `addProgramToOpenApps` se používá pro přidání aplikace pro otevírání souboru.
Třeba chcete vytvořit aplikaci která bude otevírat textové soubory. Pomocí této funkce to můžete udělat.
Funkce bere 3 parametry:

1. Typ/Typy souboru pro otevření buď jako string nebo array stringů
   Např. `txt` nebo `["txt", "html"]`
2. Script který se má spustit při otevření souboru. Musí mít jeden parametr a to bude `path`
3. Název aplikace

```javascript
control.fileManager.addProgramToOpenApps(
  ["txt", "png"],
  (path) => {
    console.log(path);
  },
  "Nejlepší program"
);
```

## FileLocker API

Pro správnou práci se soubory by jste měli soubor zamknout v té době kdy s daným souborem pracujete. Pro to slouží [FileLocker API](filelocker.md).
