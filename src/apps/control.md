# Control API

The Control API is used for simple system control

## Do when login

`dowhenlogin` is used when you want to create a function that runs when you log in. (if the user is not logged in, then after startup)

Do when login is used as follows

```javascript
control.dowhenlogin.add(() => {
 console.log("logged in")
})
```

## Error

`error` is used when you want to generate an error.

error is used as follows:

```javascript
control.error(typeErrors)(text, nameApplication)
// So e.g.
control.error("warn")("An error occurred", "Notepad")
```

Error types are `fatal` and `warn`. Fatal brings up a red screen.

## Logged

`loged` is used when you want to check if the user is logged in

loged is used as follows:

```javascript
if (control.logged) {
 // User logged in
}
otherwise {
 // User logged out
}
```

## Functions

`functions` has 2 functions in it. `logout` and `reboot`

functions is used as follows:

```javascript
var app = new App({
 name: "Application name",
 hidden: false
})
control.functions.logout(app)
control.functions.reboot(app)
```

## Play sound

`playsound` is used when you want to play a sound.

playsound is used as follows:

```javascript
control.playSound(dataUri)
// Or
control.playSound("https://example.com/sound.mp3")
```

The return value is a `howl` object.

## Play song

`playsong` is similar to playsound. But there are extra features.

```javascript
control.playSong(dataUri, otherSettings, autoplay)
// E.g.
control.playSong("https://example.com/song.mp3", {}, true)
```

The return value is a `howl` object.

## Notifications

`notify` is used when you want to send notifications

notify is used as follows:

```javascript
control.notify(appname, text)
// E.g.
control.notify("Notepad", "Note has been saved!")
```

## fileManager

This is the FileManager API. More info here: [FileManager API](filemanager.md)

## Message

`message` is used when you want to send a prompt or confirm dialog.

```javascript
control.message.prompt("Enter name: ", (response) => {
 console.log(response)
})
control.message.confirm("Are you sure you want to delete the file?", (response) => {
 if (response) {
 console.log("confirmed")
 }
})
```
