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
control.fileManager.open(fileArray)
// Např.
control.fileManager.open(control.fileManager.getFile("/file.txt"))
```

## openFileWithApp

Tato funkce není pro API a používá se v jiných funkcích.

## Properties

`properties` je funkce která otevře okno vlastnosti souboru. Tato funkce bere `FileArray`

```javascript
control.fileManager.properties(fileArray)
// Např.
control.fileManager.open(control.fileManager.getFile("/file.txt"))
```

## Save text

Funkce `savetext` se používá k uložení dat do souboru. První parametr je lokace souboru a druhý je data souboru.

```javascript
control.fileManager.saveText("/file.txt", "ahoj")
```

## Save

Funkce `save` se používá pokud chcete uložit do souboru něco jiného než text. Musíte vložit datauri.

```javascript
control.fileManager.save("/file.txt", "data:text/plain;base64,TmV2w61tIGNvIGNoY2k=")
```

## Set wallpaper

Tato funkce se používá na nastavení pozadí. Bere jeden parametr a to je cesta k souboru.

```javascript
control.fileManager.setWallpaper("/wallpaper.jpg")
```

## Get content

Funkce `getContent` se používá když chcete získat obsah souboru. Bere jeden parametr a to je cesta k souboru. Vrací data uri souboru.

```javascript
console.log(control.fileManager.getContent("/file.jpg"))
```

## Get text content

Funkce `getTextContent` se používá když chcete získat obsah souboru. Bere jeden parametr a to je cesta k souboru. Vrací text souboru.

```javascript
console.log(control.fileManager.getTextContent("/file.txt"))
```

## Folder Exist

Funkce `folderExist` zjistí jestli složka existuje. Bere jeden parametr a to je cesta ke složce.

```javascript
if (control.fileManager.folderExist("/folder")) {
    console.log("existuje")
}
else {
    console.log("neexistuje")
}
```

## All Files

Funkce `allFiles` vrátí všechny soubory ve složce. Bere jeden parametr a to je cesta ke složce.

```javascript
control.fileManager.allFiles("/folder")
```

## Get File

Funkce `getFile` vrací `FileArray` podle cesty. Bere jeden parametr a to je cesta k souboru.

```javascript
console.log(control.fileManager.getFile("/file.txt"))
```

## Create File

Funkce `create file` se používá pro vytváří souboru. Bere 4 parametry ve formátu objektu:

1. `name`: Název souboru
2. `type` (volitelné): Mime typ souboru. Výchozí text/plain
3. `content` (volitelné): Obsah souboru. Výchozí ""
4. `parentFolder` (volitelné): Složke ve které bude soubor uložen. Výchozí "/"

## File Exists

Funkce `fileExists` vrací `true` nebo `false` jestli soubor existuje podle cesty.

```javascript
if (control.fileManager.fileExists("/file.txt")) {
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

1. Typ/Tyypy souboru pro otevření buď jako string nebo array stringů
   Např. `text/plain` nebo `["text/plain", "text/html"]`
   a nebo můžete použít jenom první část mime typu. Např `text` nebo `["text", "image"]` to vezme všechny mime typy které mají na začátku text nebo image
2. Script který se má spustit při otevření souboru. Musí mít jeden parametr a to bude `FileArray`
3. Název aplikace

```javascript
control.fileManager.addProgramToOpenApps(["text", "image"], (fileArray) => {
    console.log(fileArray)
}, "Nejlepší program")
```

## saveFromUri

Funkce která se používá v jiných funkcích a nemusíte ji řešit.

# Třída File

Třída `File` je třída pro jednodužší práci s `FileArray`.

## Konstruktor

Konstruktor bere jeden parametr a to je `FileArray`

```javascript
var soubor = new File(control.fileManager.getFile("name"))
```

## Decode to array

Funkce `decodeToArray` se používá pro zpětné převedení na `FileArray`

```javascript
console.log(soubor.decodeToArray())
```

## Open

Funkce `open` otevře soubor

```javascript
soubor.open()
```

## Save

Funkce `save` uloží data do souboru

```javascript
soubor.save("Ahoj, jak se máš?")
```

## Remove

Funkce `remove` soubor odstraní.

```javascript
soubor.remove()
```
