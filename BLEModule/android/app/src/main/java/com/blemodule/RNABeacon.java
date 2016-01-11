package com.blemodule;

//import org.altbeacon.beacon.Beacon;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import org.altbeacon.beacon.Beacon;
/**
 * Created by ianzhang on 1/10/16.
 */
public class RNABeacon extends ReactContextBaseJavaModule {
    @Override
    public String getName() {
        return "RNABeacon";
    }

    public RNABeacon(ReactApplicationContext reactContext) {
        super(reactContext);
    }
}
