# FileLocker API

Pro správnou práci se soubory by jste měli soubor zamknout v té době kdy s daným souborem pracujete. Pro to slouží FileLocker API.

## Zamknout soubor

Následujícím způsobem můžete zamknout soubor.

```javascript
const path = "/folder/file.txt";
const bypass = FileLocker.add(path);
```

Funkce `add` vrací bypass klíč. Tento klíč slouží k autorizaci aplikace. Takže pokud následně budete s daným souborem pracovat musíte využít bypass key.

```javascript
control.fileManager.save(path, "Hello world!", bypass, "utf8");
```

## Uchovat soubor zamknutý

Soubor se po deseti 5 sekundách sám odemkne. Toto je ochrana v případě že by aplikace spadla aby soubor nezůstal zamknutý. Proto aby soubor zůstal zamknutý musíte zavolat funkce `continue` nejméně každých 5 sekund.

```javascript
const intervalID = setInterval(() => {
  FileLocker.continue(path);
}, 5000);
```

To zaručí že soubor zůstane zamčen

## Odemknout soubor

Pokud soubor chcete následně odemknout musíte využít funkce `remove`

```javascript
FileLocker.remove(path, bypass);
clearInterval(intervalID);
```
