# File Manager API

If you want to work with files in your KLIND OS application, the File Manager API is made for that.

All functions that modify the file also take the bypass key. More info in [FileLocker API](filelocker.md)

## Open With

`openWith` is an object that contains programs to be run depending on the file format.

```javascript
console.log(control.fileManager.openWith);
```

## Open

`open` is used to open a file. The `open` function takes 2 parameters. The folder in which the file is located and the name of the file.

```javascript
await control.fileManager.open(folder, file);
// E.g.
await contol.fileManager.open("/Downloads/", "file.txt");
```

## Properties

`properties` is a function that opens a file properties window. This function takes a file path.

```javascript
await control.fileManager.properties(path);
// E.g.
await control.fileManager.properties("/Downloads/file.txt");
```

## Save

The `save` function is used if you want to save the data to a file.

```javascript
const binaryData = Buffer.from("Hello, World!", "utf-8");
await control.fileManager.save("/file.txt", binaryData);
```

## Save text

**Deprecated!**

The `saveText` function is deprecated. Use this instead:

```javascript
await control.fileManager.save("/file.txt", "hello", undefined, "utf8");
```

(if you use a bypass key for storage, put it instead of undefined)

## Set wallpaper

This function is used to set the background. It takes one parameter and that is the file path.

```javascript
control.fileManager.setWallpaper("/wallpaper.jpg");
```

## Get content

The function `getContent` is used when you want to get the contents of a file. It takes one or two parameters. The first parameter is the file path. The second optional parameter is encoding (default is "binary").

```javascript
console.log(await control.fileManager.getContent("/file.jpg"));
```

## Get text content

**Deprecated!**

The function `getTextContent` is deprecated. Use this instead:

```javascript
console.log(await control.fileManager.getContent("/file.txt", "utf8"));
```

## Folder Exists

The `folderExist` function checks if a folder exists. It takes one parameter and that is the path to the folder.

```javascript
if (await control.fileManager.folderExist("/folder")) {
  console.log("exists");
} else {
  console.log("does not exist");
}
```

## All Files

The `allFiles` function returns all files in a folder. It takes one parameter and that is the path to the folder.

```javascript
await control.fileManager.allFiles("/folder");
```

## Create File

The async function `create file` is used to create a file. It takes 4 parameters in object format:

1. `name`: Name of the file
2. `parentFolder` (optional): The folder in which the file will be saved. Default "/"

## File Exists

The function `fileExists` returns `true` or `false` if the file exists according to the path.

```javascript
if (await control.fileManager.fileExists("/file.txt")) {
  console.log("The file exists!");
} else {
  console.log("The file does not exist!");
}
```

## File selection

If you want the user to select a file, this is the function you use to create a file select dialog.

```javascript
control.fileManager.fileSelect({
  success: async (path) => {
    const content = await control.fileManager.getContent(path, "utf8");
  },
  closed: () => {
    // User closed dialog.
  },
});
```

## Folder selection

If you want the user to select a folder, this is the function you use to create a folder select dialog.

```javascript
control.fileManager.folderSelect({
  success: async (path) => {
    const files = await control.fileManager.allFiles(path);
  },
  closed: () => {
    // User closed dialog.
  },
});
```

## FileLocker API

To work with files correctly, you should lock the file at the time you are working with the given file. This is what the [FileLocker API](filelocker.md) is for.
