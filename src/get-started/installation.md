# Install KLIND OS

## Installation on a virtual box (recommended)

Virtual Box is a program that allows you to install KLIND OS on your existing computer on which you already have Windows or Linux. That way you won't lose your data.

### Downloading the installation file

First you need to download the installation ISO file. You can download the file [here](https://klindos.jzitnik.dev/download).

### Virtual Box Download

Now you need to download Virtual Box. You can download it [here](https://www.virtualbox.org/wiki/Downloads). Then run the setup file and install like any other program.

### Creating a virtual machine

Now we will create a virtual machine in Virtual Box.

1. Click on `New`
2. Set a name and in the `ISO Image` field select the ISO file you downloaded in the first step
3. In the `Type` field, select `Linux` and in the `Version` field, select `Arch Linux (64-bit)`
4. Press `Next`
5. Choose your RAM size and number of processor cores here.
6. If you want to use UEFI, you can turn on `Enable EFI` here. But I personally don't recommend it in Virtual Box.
7. Press `Next`
8. Set the disk size here. I recommend at least 16 GB.
9. Press `Next` and then `Finish`

### Start of installation

Select the virtual machine just created and press `Start`

It then continues following the on-screen instructions.

### Restart to KLIND OS

After installation, select the option to turn off the computer.

After you have shut down your computer, go back to the VirtualBox window and click on `Settings`

Then click on `Storage`

Then right click on `KLINDOS.iso` and click on `Remove Attachment`

Now press `OK` and start the virtual machine using the `Start` button

### First run of KLIND OS

You should now be running the KLIND OS Installer. Here you set the username and password for your user.

### Done

You have now downloaded KLIND OS.

## Installation on PC

Installing on a computer is quite risky. Make sure you don't have anything important on your computer that you don't want to lose. KLIND OS will format the disk on which you want to install KLIND OS and thus delete all your existing data.

### Downloading the installation file

First you need to download the installation ISO file. You can download the file [here](https://klindos.jzitnik.dev/download).

### Download Rufus / Balena etcher

Now you need to download Rufus. If you are using Linux or Mac OS, download another program such as balena etcher.

Now you need to take an empty Flash Disk that we will use as an installation disk for KLIND OS.

In the `Devices` column, select the Flash Disk on which you want to install KLIND OS Installation.

And in the ``Boot selection'' box, click ``Select'' and choose the ISO file you downloaded.

**ATTENTION! All your data on the Flash Drive will be deleted!**

Now you can click `Start`

### Booting the flash drive

Now connect the flash drive to the device on which you want to install KLIND OS.

Then start the computer and get to `Boot selection`

It's different for every computer. You usually have to click ``F12`' or ``F7`' at startup, but it depends on the device.

### Start of installation

After launch, you will be presented with an installation screen. Here you move using the arrow keys on the keyboard.

1. Select a disk and then press enter (this is not a flash disk, but a disk that is built into the PC)
 **ATTENTION! All your data on your computer will be deleted!**
2. Choose your region and city
3. Choose a computer name or hostname

Now KLIND OS will start to install

### Restart to KLIND OS

After installation, select the option to turn off the computer.

After the computer shuts down, remove the flash drive and start the computer.

### First run of KLIND OS

You should now be running the KLIND OS Installer. Here you set the username and password for your user.

### Done

You have now downloaded KLIND OS.
