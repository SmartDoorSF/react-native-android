package com.blemodule;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

/**
 * Created by ianzhang on 1/25/16.
 */
public class NativeBLE extends ReactContextBaseJavaModule {
    public NativeBLE(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "Native BLE";
    }
}