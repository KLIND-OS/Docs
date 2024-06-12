# TrackingStatus SDk

Chcete vytvořit dialog s procentama? Například při ukládání nebo convertování souboru? Je to jednoduché s TrackingStatus SDK.

Pomocí TrackingStatus SDK vytvoříte dialog stejný, jako dialog při kopírování nebo stahování souboru.

## Vytvoření

```javascript
const trackingStatus = new TrackingStatus("Název");
```

## Aktualizace procentama

```javascript
trackingStatus.updatePercentage(20); // 20%
```

## Vlastní zpráva

Pokud vložíte vlastní zprávu, procenta budou odebrána.

```javascript
trackingStatus.customMessage("Prosím počkejte");
```

## Konec

Pro ukončení a zavření dialogu použijte funkci `finish`.

```javascript
trackingStatus.finish();
```

## Error

Funkce error vyhodí chybovou hlášku a zavře dialog.

```javascript
trackingStatus.error();
```

## Upozornění

Když jedou zavřete TrackingStatus pomocí funkce `finish` nebo pomocí funkce `error` už nemůžete znovu daný dialog otevřít ani měnit procenta atd.
