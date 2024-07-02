# ContextMenu SDK

SDK pro vytváření menu, které se zobrazí při kliknutí pravým tlačítkem na specifický element.

## ContextMenu na pouze jeden element

Vytváření kontext menu pouze pro jeden element je velice jednoduché.

```javascript
const element = document.querySelector(".vaselement");

new ContextMenu(element, [
  new ContextMenuItem("Možnost 1", () => {
    console.log("Možnost 1 stisknuta");
  }),
  new ContextMenuItem("Možnost 2", () => {
    console.log("Možnost 2 stisknuta");
  }),
  new ContextMenuItem("Možnost 3", () => {
    console.log("Možnost 3 stisknuta");
  }),
]);
```

## Context menu pro array elementů

```javascript
const elements = [
  document.querySelector(".vaselement"),
  document.querySelector(".vaselement2"),
];

new ContextMenu(
  elements,
  [
    new ContextMenuItem("Možnost 1", (el) => {
      console.log("Context menu bylo otevřeno z: ", el);
      console.log("Možnost 1 stisknuta");
    }),
    new ContextMenuItem("Možnost 2", (el) => {
      console.log("Context menu bylo otevřeno z: ", el);
      console.log("Možnost 2 stisknuta");
    }),
    new ContextMenuItem("Možnost 3", (el) => {
      console.log("Context menu bylo otevřeno z: ", el);
      console.log("Možnost 3 stisknuta");
    }),
  ],
  true
);
```

Nezapomeňte přidat třetí argument který říka že vstup je array.

## Vlastní vyvolání context menu

```javascript
const contextmenu = new ContextMenu(undefined, [
  new ContextMenuItem("Možnost 1", (passArgument) => {
    console.log("Předaný argument: ", passArgument);
    console.log("Možnost 1 stisknuta");
  }),
  new ContextMenuItem("Možnost 2", (passArgument) => {
    console.log("Předaný argument: ", passArgument);
    console.log("Možnost 2 stisknuta");
  }),
  new ContextMenuItem("Možnost 3", (passArgument) => {
    console.log("Předaný argument: ", passArgument);
    console.log("Možnost 3 stisknuta");
  }),
]);

const xpozice = 25; // 25px z leva. Tj left: 25px;
const ypozice = 70; // 70px z vrchu. Tj top: 70px;
const passArgument = "something"; // Proměná kterou můžete následně poslat přes context menu a získat zpět při stisknutí možnosti v context menu.

contextmenu.manualTrigger(xpozice, ypozice, passArgument);
```
