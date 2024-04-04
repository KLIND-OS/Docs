# File Manager API

Pokud chcete pracovat se soubory ve vaši aplikaci pro KLIND OS, File Manager API je na to udělané.

## Open With

`openWith` je objekt který obsahuje programy které se mají spustit podle toho co je to za formát souboru.

```javascript
console.log(control.fileManager.openWith)
```

## Open

`open` se používá na otevření souboru. Funkce `open` bere 1 parametr a to je `FileArray`. [Jak získat FileArray](#get-file)

```javascript
await control.fileManager.open(folder, file)
// Např.
await contol.fileManager.open("/Downloads/", "file.txt")
```

## openFileWithApp

Tato funkce není pro API a používá se v jiných funkcích.

## Properties

`properties` je funkce která otevře okno vlastnosti souboru. Tato funkce bere `FileArray`

```javascript
await control.fileManager.properties(cesta)
// Např.
await control.fileManager.open("/Downloads/file.txt")
```

## Save text

Funkce `savetext` se používá k uložení dat do souboru. První parametr je lokace souboru a druhý je data souboru.

```javascript
control.fileManager.saveText("/file.txt", "ahoj")
```

## Save

Funkce `save` se používá pokud chcete uložit do souboru něco jiného než text. Musíte vložit binary.

```javascript
const binaryData = Buffer.from("Hello, World!", 'utf-8');
control.fileManager.save("/file.txt", binaryData)
```

## Set wallpaper

Tato funkce se používá na nastavení pozadí. Bere jeden parametr a to je cesta k souboru.

```javascript
control.fileManager.setWallpaper("/wallpaper.jpg")
```

## Get content

Funkce `getContent` se používá když chcete získat obsah souboru. Bere jeden parametr a to je cesta k souboru. Vrací binary souboru.

```javascript
console.log(await control.fileManager.getContent("/file.jpg"))
```

## Get text content

Funkce `getTextContent` se používá když chcete získat obsah souboru. Bere jeden parametr a to je cesta k souboru. Vrací text souboru.

```javascript
console.log(await control.fileManager.getTextContent("/file.txt"))
```

## Folder Exist

Funkce `folderExist` zjistí jestli složka existuje. Bere jeden parametr a to je cesta ke složce.

```javascript
if (await control.fileManager.folderExist("/folder")) {
    console.log("existuje")
}
else {
    console.log("neexistuje")
}
```

## All Files

Funkce `allFiles` vrátí všechny soubory ve složce. Bere jeden parametr a to je cesta ke složce.

```javascript
await control.fileManager.allFiles("/folder")
```


## Create File

Async funkce `create file` se používá pro vytváří souboru. Bere 4 parametry ve formátu objektu:

1. `name`: Název souboru
4. `parentFolder` (volitelné): Složke ve které bude soubor uložen. Výchozí "/"

## File Exists

Funkce `fileExists` vrací `true` nebo `false` jestli soubor existuje podle cesty.

```javascript
if (await control.fileManager.fileExists("/file.txt")) {
    console.log("Soubor existuje!")
}
else {
    console.log("Soubor neexistuje!")
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
control.fileManager.addProgramToOpenApps(["text", "image"], (path) => {
    console.log(fileArray)
}, "Nejlepší program")
```

## FileLocker API

Pro správnou práci se soubory by jste měli soubor zamknout v té době kdy s daným souborem pracujete. Pro to slouží [FileLocker API](filelocker.md).
