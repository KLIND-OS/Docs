# Storage API

The Storage API is used for data storage applications.

Normally application data is saved in a file but in KLIND OS it is saved in storage.

## Saving to Storage SDK

```javascript
this.app.storage.set("key", "value");
```

## Loading from memory

```javascript
const text = this.app.storage.get("key");
```

## Clear and remove functions

There are also `clear` and `remove` functions.

```javascript
this.app.storage.clear();
this.app.storage.remove("stored-text");
```
