# TrackingStatus API

Do you want to create a dialog with percentages? For example when saving or converting a file? It's easy with the TrackingStatus API.

Using the TrackingStatus API, you create a dialog similar to the dialog when copying or downloading a file.

## Creation

```javascript
const trackingStatus = new TrackingStatus("Name");
```

## Update by percentage

```javascript
trackingStatus.updatePercentage(20); // 20%
```

## Custom message

If you insert your own message, the percentages will be removed.

```javascript
trackingStatus.customMessage("Please wait");
```

## The end

Use the `finish' function to exit and close the dialog.

```javascript
trackingStatus.finish();
```

## Error

The error function throws an error message and closes the dialog.

```javascript
trackingStatus.error();
```

## Warning

When they are running, close TrackingStatus using the `finish` function or using the `error` function, you can no longer open the given dialog or change percentages, etc.
