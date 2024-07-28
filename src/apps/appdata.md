# AppData

Does your application need files such as images but also others! Not a problem! Just use the AppData function in the KLIND OS App SDK.

## Where to save files?

You save all files in the `assets/custom` folder.

## How to get the file?

Here we will show how the AppData API works.

### Get binary

Use the `getBinary` function.

```javascript
const binary = await this.app.appData.getBinary("image.png");
```

### How to get the text

Use the `getText` function.

```javascript
const text = await this.app.appData.getText("script.js");
```

### Other formats

If you need an encoding other than utf8 and binary you can use the `get` function. As encoding, put any encoding that is supported by the function `readFile` in the NodeJS library `fs`.

```javascript
const text = await this.app.appData.get("script.js", "utf8");
```

### Get URL

You can also get the url address. Subsequently, you can send a `GET` request to this address or, for example, insert it as the `src` of an image in HTML.

```javascript
const url = this.app.appData.getUrl("image.png");

win.querySelector("img").src = url;
// Or
fetch(url).then(res => res.blob()).then(data => {
 // Do something with data
})
```
