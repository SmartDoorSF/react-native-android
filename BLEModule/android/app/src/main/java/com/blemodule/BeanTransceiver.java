package com.blemodule;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.ArrayList;
import java.util.List;

import com.punchthrough.bean.sdk.Bean;
import com.punchthrough.bean.sdk.BeanManager;
import com.punchthrough.bean.sdk.BeanDiscoveryListener;
//import com.punchthrough.bean.sdk;
/**
 * Created by ianzhang on 1/18/16.
 */
public class BeanTransceiver extends ReactContextBaseJavaModule {
    @Override
    public String getName() {
        return "BeanTransceiver";
    }

    public BeanTransceiver(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    final List<Bean> beans = new ArrayList<>();

    BeanDiscoveryListener listener = new BeanDiscoveryListener() {
        @Override
        public void onBeanDiscovered(Bean bean, int rssi) {
            beans.add(bean);
        }

        @Override
        public void onDiscoveryComplete() {
//            for (Bean bean: beans) {
//                // callback printout
//            }
        }
    };

    BeanManager beanManager;
    @ReactMethod
    public void startDiscovery() {
        beanManager.startDiscovery(listener);
    }
}