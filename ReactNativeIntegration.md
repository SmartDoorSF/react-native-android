# Integrating with Existing Apps

## Requirements

An existing, gradle-based Android app

Node.js

## Prepare your app
In the app`s 
```
build gradle
```
file add the React Native dependency

```bash
compile 'com.facebook.react:react-native:0.13.0'
```
Find latest react-native library on [Maven Central](http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22com.facebook.react%22%20AND%20a%3A%22react-native%22)

In
```
AndroidManifest.xml
```

Add internet permission
```
<uses-permission android:name="android.permission.INTERNET" />
```

## Add JS to your app

```bash
$ curl -o .flowconfig https://raw.githubusercontent.com/facebook/react-native/master/.flowconfig
```

# Question
How JavaScript to control app behavior when user interact with hardware back button?

References:

1. [Bean Android SDK](https://github.com/PunchThrough/Bean-Android-SDK)

2. [React Native Alt Beacon](https://github.com/octavioturra/react-native-alt-beacon)

3. [Android Beacon Library](https://github.com/AltBeacon/android-beacon-library)

4. [Android SD](https://github.com/Estimote/Android-SDK)

# Sample RN Android applications

[Event Based Multi-threaded android bean app](https://github.com/pbauermeister/android-bean-stuff)
