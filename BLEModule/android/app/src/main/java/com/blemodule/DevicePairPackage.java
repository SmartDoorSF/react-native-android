package com.blemodule;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by ianzhang on 12/31/15.
 */
public class DevicePairPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();

        // Register the module
        modules.add(new DevicePairModule(reactContext));

        return modules;
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
//        return Collections.emptyList();
        return new ArrayList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
//        return Arrays.asList();
        return new ArrayList();
    }
}
