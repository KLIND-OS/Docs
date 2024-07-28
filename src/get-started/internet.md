# Internet connection

Instructions for a simple Internet connection.

## Via cable (Ethernet)

Just connect the Ethernet cable to the computer. NetworkManager automatically obtains an IP address.

## Wifi

### WiFi Controller check (optional)

Make sure your computer supports WiFi and KLIND OS has found the correct driver.

Run the following command in the terminal:

```javascript
parent.LowLevelApi.child_process.execSync("lspci -k | grep Network").toString()
```

If you see some output like this:

```
9:00 a.m. Network Controller: Realtek Semiconductor Co., Ltd. RTL8723BE PCIe Wireless Network Adapter
```

so you have successfully found the driver.

### Creating a WiFi connection

1. Open the ``Network Manager'' application in the Start menu
2. Click the plus at the bottom left

![Add button image](./addIcon.png)

3. Select the WiFi option and click `Create...`
4. Now select the `Wi-Fi` option in the top bar
5. In the `SSID` box, enter the name of your wifi to which you want to connect.
6. In the top bar, select ``Wi-Fi Security''
7. Choose what security your wifi uses (normally ``WPA/WPA2/WPA3 personal'')
8. Continue with the steps to set up security.
9. Click on `Save` at the bottom right
10. Now click on `Close` at the top left (if it doesn't work press the keyboard shortcut `Win + Shift + C`)

If you've done everything right, you'll be connected to WiFi in no time.

### Editing an existing connection

If you have already connected to WiFi once and now want to connect to another one, proceed according to the following steps:

1. Open the ``Network Manager'' application in the Start menu
2. Double-click on `Wi-Fi Connection...`
3. Then proceed with the configuration of the new connection in the same way as the connection creation from step 4
