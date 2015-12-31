package com.blemodule;

import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by ianzhang on 12/31/15.
 * BLE pair implementation
 * TODO: Read React Method Doc
 */
public class DevicePairModule extends ReactContextBaseJavaModule {
    private static BluetoothAdapter BTAdapter;

    // Setup Broadcast mode
    private final BroadcastReceiver bReceiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            String action = intent.getAction();
            if (BluetoothDevice.ACTION_FOUND.equals(action)) {
                Log.d("DEVICELIST", "Bluetooth device found\n");
                BluetoothDevice device = intent.getParcelableExtra(BluetoothDevice.EXTRA_DEVICE);
                // Create a new device item
                DeviceItem newDevice = new DeviceItem(device.getName(), device.getAddress(), "false");
            }
        }
    };

    public DevicePairModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void listDevice(String message) {
//        Toast.makeText(getReactApplicationContext(), message, 1000).show();

    }

    @Override
    public String getName() {
        return "bluetoothModule";
    }
}
