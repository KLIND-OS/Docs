# Instalace KLIND OS

## Instalace na virtual box (doporučujeme)

Virtual Box je program který Vám umožní nainstalovat KLIND OS na Váš stávající počítač na kterém máte již Windows nebo Linux. Nepříjdete tak o svoje data.

### Stažení instalačního souboru

Jako první si musíte stáhnout instalační ISO soubor. Soubor si můžete stáhnout [zde](https://klindos.jzitnik.dev/download).

### Stažení Virtual Boxu

Nyní si musíte stáhnout Virtual Box. Ten si můžete stáhnout [zde](https://www.virtualbox.org/wiki/Downloads). Potom spusťte instalační soubor a nainstualujte jako jakýkoli jiný program.

### Vytvoření virtuální mašiny

Nyní si vytvoříme virtuální mašinu ve Virtual Boxu.

1. Klikněte na `New`
2. Nastavte si jméno a v kolonce `ISO Image` vyberte ten ISO soubor který jste si stáhli v prvním kroku
3. V kolonce `Type` vyberte `Linux` a v kolonce `Version` vyberte `Arch Linux (64-bit)`
4. Stiskněte `Next`
5. Zde si vyberte vaší velikost RAM a počet jáder procesoru.
6. Pokud chcete používat UEFI můžete zde zapnout `Enable EFI`. Osobně to ale ve Virtual Boxu nedoporučuju.
7. Stiskněte `Next`
8. Zde si nastavte velikost disku. Doporučuji minimálně 16 GB.
9. Stiskněte `Next` a poté `Finish`

### Začátek instalace

Vyberte právě vytvořenou virtuální mašinu a stiskněte `Start`

Poté se vám zobrazí obrazovka s nápisem KLIND OS a modro-černým pozadím. Stiskněte Enter na klávesnici.

Po chvíli se Vám zobrazí obrazovka s modrým pozadím a šedým oknem.

Zde se pohybujete pomocí šipek na klávesnici.

1. Vyberte si disk a poté stiskněte enter
   (to bude ten disk který jste si vytvořili při vytváření virtuální mašiny)
2. Vyberte si region a město
3. Vyberte si název počítače nebo-li hostname

Nyní se vám začne KLIND OS instalovat

### Restart do KLIND OS

Poté co máte nainstalovaný KLIND OS vám to napíše následující zprávu: `KLIND OS byl nainstalován! Napište 'reboot' pro restart`

My ale nechceme restartovat ale vypnou. Takže napište `poweroff`. To vypne počítač.

Poté co jste vypnuli počítač, zajděte zpět do VirtualBox okna a klikněte na `Settings`

Poté klikněte na `Storage`

Poté klikněte pravým tlačítkem na `KLINDOS.iso` a klikněte na `Remove Attachment`

Nyní stiskněte `OK` a spusťte virtuální mašinu pomocí tlačítka `Start`

### První spuštení KLIND OS

Nyní by se vám měl spustit KLIND OS Instalace. Zde si nastavíte uživatelské jméno a heslo pro vašeho uživatele.

### Hotovo

Nyní máte stažený KLIND OS.

## Instalace na počítač

Instalace na počítač je dost riziková. Ujistěte se že na počítači nemáte nic důležitého o co by jste nechtěli přijít. KLIND OS Vám naformátuje disk na který chcete nainstalovat KLIND OS a tak smaže všechna vaše stávající data.

### Stažení instalačního souboru

Jako první si musíte stáhnout instalační ISO soubor. Soubor si můžete stáhnout [zde](https://klindos.jzitnik.dev/download).

### Stažení programu Rufus / Balena etcher

Nyní si musíte stáhnout Rufus. Pokud používáte Linux nebo Mac OS, stáhněte si jiný program jako např, balena etcher.

Nyní si musíte vzít prázdný Flash Disk který použijeme jako instalační disk pro KLIND OS.

V kolonce `Devices` si vyberte Fash DIsk na který chcete instalovat KLIND OS Instalaci.

A v kolonce `Boot selection` klikněte na `Select` a vyberte ISO soubor který jste si stáhli.

**POZOR! Všechna vaše data na Flash Disku budou smazána!**

Nyní můźete kliknout `Start`

### Nabootování flash disku

Nyní připojte flash disk na zařízení na které chcete nainstalovat KLIND OS.

Poté spusťte počítač a dostejte se do `Boot selection`

Pro každý počítač je to jiné. Většinou musíte při startu klikat `F12` nebo `F7` ale záleží na zařízení.

### Začátek instalace

Poté chvíli se vám zobrazí obrazovka s nápisem KLIND OS a modro-černým pozadím. Stiskněte Enter na klávesnici.

Po chvíli se Vám zobrazí obrazovka s modrým pozadím a šedým oknem.

Zde se pohybujete pomocí šipek na klávesnici.

1. Vyberte si disk a poté stiskněte enter (to není flash disk ale disk který je do pc zabudovaný)
   **POZOR! Všechna vaše data co máte na počítači budou smazána!**
2. Vyberte si region a město
3. Vyberte si název počítače nebo-li hostname

Nyní se vám začne KLIND OS instalovat

### Restart do KLIND OS

Poté co máte nainstalovaný KLIND OS vám to napíše následující zprávu: `KLIND OS byl nainstalován! Napište 'reboot' pro restart`

My ale nechceme restartovat ale vypnou. Takže napište `poweroff`. To vypne počítač.

Poté co se počítač vypne, odpojte flash disk, a spusťte počítač.

### První spuštení KLIND OS

Nyní by se vám měl spustit KLIND OS Instalace. Zde si nastavíte uživatelské jméno a heslo pro vašeho uživatele.

### Hotovo

Nyní máte stažený KLIND OS.
