package com.rncodetest

import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.util.*

class ServiceCodeManager(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {

    override fun getName(): String {
        return "ServiceCodeManager";
    }

    @ReactMethod
    fun getService(callback: Callback) {
        callback.invoke(reactApplicationContext.getString(R.string.service_key));
    }
}