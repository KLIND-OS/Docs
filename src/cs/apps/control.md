# Control API

Control API se používá na jednoduché ovládání systému

## Do when login

`dowhenlogin` se používá když chcete vytvořit funkci která se spustí při přihlášení. (pokud uživatel nemá přihlašování tak po spuštění)

Do when login se používá následovně

```javascript
control.dowhenlogin.add(() => {
  console.log("přihlášeno");
});
```

## Error

`error` se používá když chcete vytvořit chybu.

error se používá následovně:

```javascript
control.error(typChyby)(text, nazevAplikace);
// Takže např.
control.error("warn")("Nastala chyba", "Poznámkový blok");
```

Typy chyb jsou `fatal` a `warn`. Fatal vyvolá červenou obrazovku.

## Loged

`loged` se používá když chcete zjistit jestli je uživatel přihlášen

loged se používá následovně:

```javascript
if (control.loged) {
  // Uživatel přihlášen
} else {
  // Uživatel odhlášen
}
```

## Functions

`functions` má v sobě 2 funkce. `logout` a `reboot`

functions se používá následovně:

```javascript
var aplikace = new App({
  name: "Název aplikace",
  hidden: false,
});
control.functions.logout(aplikace);
control.functions.reboot(aplikace);
```

## Play sound

`playsound` se používá když chcete přehrát zvuk.

playsound se používá následovně:

```javascript
control.playSound(dataUri);
// Nebo
control.playSound("https://example.com/sound.mp3");
```

Return hodnota je `howl` objekt.

## Play song

`playsong` je podobné jako playsound. Ale jsou tam funkce navíc.

```javascript
control.playSong(dataUri, otherSettings, autoplay);
// Např.
control.playSong("https://example.com/song.mp3", {}, true);
```

Return hodnota je `howl` objekt.

## Notify

`notify` se používá když chcete poslat notifikace

notify se používá následovně:

```javascript
control.notify(appname, text);
// Např.
control.notify("Poznámkový blok", "Poznámka byla uložena!");
```

## fileManager

Tohle je FileManager API. Více info zde: [FileManager API](filemanager.md)

## Message

`message` se používá když chcete poslat prompt nebo confirm dialog.

```javascript
control.message.prompt("Zadejte jméno: ", (response) => {
  console.log(response);
});
control.message.confirm("Opravdu chcete smazat soubor?", (response) => {
  if (response) {
    console.log("potvrzeno");
  }
});
```
