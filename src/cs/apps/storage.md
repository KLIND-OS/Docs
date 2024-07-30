# Storage API

Storage API se používá pro aplikace na ukládání dat.

Normálně se data aplikací ukládají do souboru ale v KLIND OS se ukládají do storage.

## Ukládání do Storage SDK

```javascript
this.app.storage.set("key", "value");
```

## Načítání z paměti

```javascript
const text = this.app.storage.get("key");
```

## Funkce clear a remove

Existují taky funkce `clear` a `remove`.

```javascript
this.app.storage.clear();
this.app.storage.remove("ulozeny-text");
```
