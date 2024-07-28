# Připojení k internetu

Návod pro jednoduché připojení k internetu.

## Přes kabel (Ethernet)

Stačí připojit Ethernet kabel do počítače. NetworkManager automaticky získá IP adresu.

## WiFi

### Kontrola WiFi Controlleru (volitelné)

Ujistěte se že Váš počítač podporuje WiFi a KLIND OS našel správný ovladač.

Spusťte následující příkaz v terminálu:

```javascript
parent.LowLevelApi.child_process.execSync("lspci -k | grep Network").toString()
```

Pokud uvidíte nějaký výstup jako např. toto:

```
9:00. Network Controller: Realtek Semiconductor Co., Ltd. RTL8723BE PCIe Wireless Network Adapter
```

tak máte úspěšně nalezený ovladač.

### Vytvoření připojení na WiFi

1. Otevřte aplikaci `Správce sítě` ve Start menu
2. Klikněte plus vlevo dole

![Add button image](./addIcon.png)

3. Vyberte možnost WiFi a klikněte na `Vytvořit...`
4. Nyní v horní liště vyberte možnost `Wi-Fi`
5. V boxu `SSID` vložte název Vaší wifi na kterou se chcete připojit.
6. V horní liště vyberte možnost `Zabezpečení Wi-Fi`
7. Vyberte jaké zabezpečení používá Vaše wifi (běžně to je `WPA/WPA2/WPA3 osobní`)
8. Pokračujte podle kroků při nastavování zabezpečení.
9. Klikněte vpravo dole na `Uložit`
10. Nyní vlevo nahoře klikněte na `Zavřít` (pokud nebude fungovat stiskněte kláv. zkratku `Win + Shift + C`)

Pokud jste udělali vše správně, za chvíli budete připojenina WiFi.

### Uprava již existujícího připojení

Pokud už jste se jednou připojili na WiFi a nyní chcete se připojit na jinou pokračujte podle následujících kroků:

1. Otevřte aplikaci `Správce sítě` ve Start menu
2. Dvoj-klikněte na `Připojení Wi-Fi...`
3. Následně pokračujte s konfigurací nového přípojení stejně jako ve vytvoření připojení od kroku 4
