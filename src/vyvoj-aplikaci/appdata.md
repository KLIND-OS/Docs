# AppData

Potřebuje Vaše aplikace soubory jako např. obrázky ale i jiné! Není problém! Stačí využít funkce AppData v KLIND OS App API.

## Kam uložit soubory?

Všechny soubory ukládáte do složky `assets/custom`.

## Jak získat soubor?

Zde si ukážeme jak funguje AppData API.

### Získat binary

Využijte funkci `getBinary`.

```javascript
const binary = await this.app.appData.getBinary("image.png");
```

### Jak získat text

Využijte funkci `getText`.

```javascript
const text = await this.app.appData.getText("script.js");
```

### Ostatní formáty

Pokud potřebujete jiné enkódování než utf8 a binary můžete použít funkci `get`. Jako encoding dávejte jakýkoliv encoding který je podporován funkcí `readFile` v NodeJS knihovně `fs`.

```javascript
const text = await this.app.appData.get("script.js", "utf8");
```

### Získat URL

Taky můžete získat url adresu. Následně na tuto adresu můžete poslat `GET` request nebo např. vložit jako `src` obrázku v HTML.

```javascript
const url = this.app.appData.getUrl("image.png");

win.querySelector("img").src = url;
// Nebo
fetch(url).then(res => res.blob()).then(data => {
  // Do something with data
})
```
