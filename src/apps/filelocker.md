# FileLocker API

To work with files correctly, you should lock the file at the time you are working with the given file. That's what the FileLocker API is for.

## Lock the file

You can lock a file as follows.

```javascript
const path = "/folder/file.txt";
const bypass = FileLocker.add(path);
```

The `add` function returns the bypass key. This key is used to authorize the application. So if you subsequently work with the given file, you must use the bypass key.

```javascript
control.fileManager.save(path, "Hello world!", bypass, "utf8");
```

## Keep file locked

The file will unlock itself after ten 5 seconds. This is a protection in case the application crashes so that the file does not remain locked. In order to keep the file locked, you must call the `continue` function at least every 5 seconds.

```javascript
const intervalID = setInterval(() => {
 FileLocker.continue(path);
}, 5000)
```

This will ensure that the file remains locked

## Unlock the file

If you want to unlock the file afterwards, you have to use the `remove` function

```javascript
FileLocker.remove(path, bypass);
clearInterval(intervalID);
```
