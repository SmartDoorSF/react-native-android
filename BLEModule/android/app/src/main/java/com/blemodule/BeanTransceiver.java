package com.blemodule;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.ArrayList;
import java.util.List;
import java.util.Collection;

import com.punchthrough.bean.sdk.Bean;
import com.punchthrough.bean.sdk.BeanManager;
import com.punchthrough.bean.sdk.BeanDiscoveryListener;

import android.util.Log;
import android.widget.Toast;
import android.content.Context;

import android.bluetooth.BluetoothAdapter;

/**
 * Created by ianzhang on 1/18/16.
 */
public class BeanTransceiver extends ReactContextBaseJavaModule {

    private static final String TAG = "BeanTransceiverHandler";
    private boolean scanning;
    private boolean resetting;
    private BluetoothAdapter bluetoothAdapter;

    private boolean btOn;

    public void init(Context context) {
        Log.d(TAG, "*** BeanTransceiver Initialized!");

        // init BT
        if (bluetoothAdapter == null) {
            bluetoothAdapter = null;
        }
    }

    public void uninit() {
        Log.d(TAG, "*** BeanTransceiver uninit is invoked!");
    }
    public boolean isScanning() {
        return scanning;
    }

    public boolean isResetting() {
        return resetting;
    }

    @ReactMethod
    public boolean hasBLE() {
        return bluetoothAdapter != null;
    }

    @Override
    public String getName() {
        return "BeanTransceiver";
    }

    public BeanTransceiver(ReactApplicationContext reactContext) {
        super(reactContext);
    }

//    final List<Bean> beans = new ArrayList<>();

    BeanDiscoveryListener listener = new BeanDiscoveryListener() {
        @Override
        public void onBeanDiscovered(Bean bean, int rssi) {
            int nb = BeanManager.getInstance().getBeans().size();
            Log.i(TAG, "Scanning... (" + nb + ") Discovered \"" + bean.getDevice().getName() + ".\"");
            Log.d(TAG, "- rssi:   " + rssi);
            Log.d(TAG, "- device: " + bean.getDevice());
//            beans.add(bean);
        }

        @Override
        public void onDiscoveryComplete() {
            scanning = false;

            int nb = BeanManager.getInstance().getBeans().size();
            Log.i(TAG, "Scan done. Found " + nb + ".");

            List<Bean> beans = new ArrayList<>();
            Collection<Bean> allSeen = BeanManager.getInstance().getBeans();

            for (Bean bean: beans) {
                Log.d(TAG, bean.getDevice().getName());              // "Bean"
                Toast.makeText(getReactApplicationContext(), "CONNECTED TO BEAN", Toast.LENGTH_LONG).show();
                Log.d(TAG, bean.getDevice().getAddress());           // "B4:99:4C:1E:BC:75" (example)
            }
        }
    };

    @ReactMethod
    public void startDiscovery() {
        BeanManager.getInstance().startDiscovery(listener);
    }

    @ReactMethod
    public void cancelDiscovery() {
        BeanManager.getInstance().cancelDiscovery();
    }

    @ReactMethod
    public boolean isBLEenabled() {
        return bluetoothAdapter.isEnabled();
    }

    @ReactMethod
    public void enableBLE() {
        if (!btOn) {
            Log.d(TAG, "BLE is enabled!");
            bluetoothAdapter.enable();
            btOn = true;
        } else {
            Log.d(TAG, "BEL is already enabled!");
        }
    }

    @ReactMethod
    public void disableBLE() {
        if (btOn) {
            bluetoothAdapter.disable();
            btOn = false;
        }
    }
}