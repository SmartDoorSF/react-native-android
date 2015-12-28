package com.blemodule;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by ianzhang on 12/28/15.
 */
public class SampleModule extends ReactContextBaseJavaModule {
    public SampleModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void show(String message) {
        Toast.makeText(getReactApplicationContext(), message, 1000).show();
    }

    @Override
    public String getName() {
        return "CustomizedModule";
    }
}
