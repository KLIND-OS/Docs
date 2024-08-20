# File dragging API

Do you want your app to be able to accept files using dragging? File dragging API is there for you.

## Register a drop zone

You register a drop zone by selecting what element should be accepting files. It will also include all the child elements.

```javascript
const element = document.querySelector(".yourelement");
FileDraggingAPI.registerDroppable(
  element, // What element should be accepting the files
  true, // If should accept files
  true, // If should accept folders
  "Open", // Helper text that will appear when user hovers over your element with a file/folder
  (path, type) => {
    if (type == "file") {
      console.log("File dropped! Path:", path);
    } else if (type == "folder") {
      console.log("Folder dropped! Path:", path);
    }
  },
  (hovering, type) => {
    if (hovering) {
      if (type == "file") {
        console.log("File is being hovered over the element");
      } else if (type == "folder") {
        console.log("Folder is being hovered over the element");
      }

      // Like this you can create animations when user hovers over your element with file/folder
      element.style.opacity = "0.8";
    } else {
      if (type == "file") {
        console.log("File is not being hovered over the element");
      } else if (type == "folder") {
        console.log("Folder is not being hovered over the element");
      }

      // Reset the animation
      element.style.opacity = "1";
    }
  }
);
```
