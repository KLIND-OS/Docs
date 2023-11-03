# Správce souborů

KLIND OS má svůj správce souborů. Je napsaný v JavaScriptu a funguje trochu jinak než Windows správce souborů

## Technické specifikace

Všechny data se ukládají do localStorage.

Soubory se ukládají do klíče `files-uploaded` s složky do `folders-uploaded`

### Soubory se ukládají jako array:

---

Index 0: Název souboru

Index 1: Velikost suboru

Index 2: Mime typ souboru

Index 3: Poslední změna

Index 4: Obsah souboru

Index 5: Nadřazená složka

---

## Rozdíly oproti Windows File Manageru

KLIND OS Správce souborů se neřídí příponou souboru ale [Mime Type](https://en.wikipedia.org/wiki/Media_type).

Mime Type můžete změnit když kliknete pravým tlačítkem a kliknete na `Convertovat`

V KLIND OS není žádný koš. Pokud něco smažete, je to navždy pryč.

Cesta nezačíná `C:/` ale vždy `/`. Tomu se říká `kořenová složka`.

## Složky nejdou přejmenovat

Složky nemůžete přejmenovat. Pokud chcete složku přejmenovat, vytvořte jinou složku a přesuňte všechny soubory do nové a tu starou smažte.

## Složky nejdou přesouvat

Jsem líný to implementovat. Jestli se to někomu bude chtít můžete to naimplementovat a poslat pull request.
