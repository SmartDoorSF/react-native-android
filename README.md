# react-native-android

## Setup

For Mac users,

### Install the Android SDK

```bash
brew install android-sdk
```

### Define the ANDROID\_HOME env var

Add below line to your ~/.zshrc or ~/.bashrc

```bash
# If you installed the SDK via Homebrew, otherwise ~/Library/Android/sdk
export ANDROID_HOME=/usr/local/opt/android-sdk
```

Then

```bash
source ~/.zshrc
```

### Install Gradle

```bash
brew install gradle
```

#### Enable Gradle

```bash
touch ~/.gradle/gradle.properties && echo "org.gradle.daemon=true" >> ~/.gradle/gradle.properties
```

### Configure your SDK

open Android SDK Manager on Mac

```bash
android
```

SDK NDK path setup

Point Gradle to Android SDK: 

Either have ```$ANDROID_SDK``` and ```$ANDROID_NDK``` defined, or create a ```local.properties``` file in the root of your ```react-native``` checkout with the following contents:
```bash
sdk.dir=absolute_path_to_android_sdk
ndk.dir=absolute_path_to_android_ndk
```

Ex. AwesomeProject

#### Quick Start

```
$ npm install -g react-native-cli
$ react-native init AwesomeProject
```

ISSUE:
```bash
> failed to find Build Tools revision 23.0.1
```

Solution:
Install SDK build tools version 23.0.1 (in Android Manager)

### React Native NPM module installation
Under AwesomeProject/node_modules/react-native

```bash
npm instal
```

## Building project

Make sure there is one and only one device/emulator connected (online)

Physical device:

USB-debugging

Connect your (Android) device then allow USB-debugging

```bash
adb devices
```

Build and run
```bash
react-native run-android
```

ISSUE:

On device 
```bash
ReferenceError: Can't find variable:
__fbBatchedBridge (line 1 in the generated bundle)
```

Solution:
Start dev server

Using adb reverse

```bash
adb reverse tcp:8081 tcp:8081
```
## Welcome to React Native

<img src="https://github.com/SmartDoorSF/react-native-android/blob/master/TemplateProject/welcome.jpg" width="186">

## TODO:
Learn how to use Android Emulator

Style guide

Interactive with Native API

## ISSUES

Watcher took too long to load

Installing watchman on OSX

```bash
$ brew update
$ brew install watchman
```

```bash
watchman shutdown-server
brew update
brew reinstall watchman
```

## Developer tooling 

React Developer tools

### Live code reloading

```bash 
react-native run-android
```
will start the Node server which enable live code reloading

References: 

1. [React Native Android Setup](http://facebook.github.io/react-native/docs/android-setup.html)

2. [React Native on Android failed to find build tools](http://stackoverflow.com/questions/33155087/react-native-on-android-failed-to-find-build-tools)

3. [React Native Android running on a device](http://facebook.github.io/react-native/docs/running-on-device-android.html#content)

4. [React Native android build failed](http://stackoverflow.com/questions/32634352/react-native-android-build-failed)

5. [React Native reference error can't find variable require line 1 in the generated bundle
](http://stackoverflow.com/questions/33911453/react-native-referenceerror-cant-find-variable-require-line-1-in-the-genera)

6. [Building React Native for Android](https://github.com/facebook/react-native/blob/master/ReactAndroid/README.md)

7. [Facebook watchman troubleshootingc](https://facebook.github.io/watchman/docs/troubleshooting.html)
