# Native Module

Platform API or target module doesn`t exist in  React Native yet

# Notes

Creating Android modules:

"Annotate the function that you want to make available to JavaScript with @ReactMethod."

```bash
// Available as NativeModule.MyCustomModule.processString
  @ReactNative
  public void processingString(String input, Callback callback) {
    callback.invoke(input.replace("Goodbye", "Hello"));
  }
```

```bash
ReactContextBaseJavaModule
```

ISSUE in Reference [2]

1. To use HashMap in Android Java

import java.util.HashMap;

2. createViewManager profile

createViewMangers(ReactApplicationContext reactContext)

## Declare BluetoothAdapter

The "Correct" way

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
  BluetoothAdapter btAdapter = BluetoothAdapter.getDefaultAdapter();
}

with btAdapter = BluetoothAdapter.getDefaultAdapter();
```

References:

1. [React Native native modules android](https://facebook.github.io/react-native/docs/native-modules-android.html#content)

2. [React Native Android Custom Module](https://medium.com/@awesomejerry/react-native-android-custom-module-819bd712bff5#.s6j98cnn6)

3. [React Native Module Sample](https://github.com/gs-akhan/react-native-modules)

4. [React Native Module Sample issue fix](https://github.com/facebook/react-native/issues/3075)
