App build gradle file in 

projectName/android/app/build.gradle

dependencies:

Add:
  compile 'com.facebook.react:react-native:0.17+'


#ISSUES

unauthorized device

1. Check if authorized
```bash
adb devices
```

```bash
..... unauthorized
```

2. Revoke USB debugging on phone

3. Restart ADB Server

adb kill-server
adb start-server

4. Reconnect the device

5. Now Check the device

References:

1. [adb android device unauthorized](http://stackoverflow.com/questions/23081263/adb-android-device-unauthorized)
