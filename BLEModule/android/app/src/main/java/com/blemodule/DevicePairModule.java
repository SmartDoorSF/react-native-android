package com.blemodule;

import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.bluetooth.le.BluetoothLeAdvertiser;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import java.util.List;
import java.util.Set;

/**
 * Created by ianzhang on 12/31/15.
 * BLE pair implementation
 * TODO: Read React Method Doc
 *       Return variable or pass values back through callback or Promise?
 *       What are valid datatypes?
 */
public class DevicePairModule extends ReactContextBaseJavaModule {
//    private static BluetoothAdapter BTAdapter;
    private static BluetoothAdapter BTAdapter = BluetoothAdapter.getDefaultAdapter();
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
    public void connect() {
        // TODO Scan for devices and add them to the list
        Set<BluetoothDevice> pairedDevices;

        pairedDevices = BTAdapter.getBondedDevices();
        if (pairedDevices.size() > 0) for (BluetoothDevice device : pairedDevices) {
            DeviceItem newDevice = new DeviceItem(device.getName(), device.getAddress(), "false");
//            deviceItemList.add(newDevice);
            Log.d("Paired Device: ", device.getName());
            Toast.makeText(getReactApplicationContext(), device.getName(), 500).show();
        }

        Log.d("DEVICELIST", "DevisceList Action!\n");

//        Set<BluetoothAdapter> socketDevices;
    }

    @ReactMethod
    public void show(String message) {
        Toast.makeText(getReactApplicationContext(), message, 1000).show();
    }

    @ReactMethod
    // Use Callback
    public void listDeviceCB(Callback errorCallback, Callback successCallback) {
        try {
            Set<BluetoothDevice> pairedDevices;

            pairedDevices = BTAdapter.getBondedDevices();
            if (pairedDevices.size() > 0) for (BluetoothDevice device : pairedDevices) {
                successCallback.invoke(device.getName());
            }
        } catch (IllegalArgumentException e) {
            errorCallback.invoke(e.getMessage());
        }
    }

    @Override
    public String getName() {
        return "BluetoothModule";
    }
}
