package com.rncodetest

import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager
import java.util.*

class ServiceCodeManagerPackage : ReactPackage {
    override fun createViewManagers(p0: ReactApplicationContext): MutableList<ViewManager<View, ReactShadowNode<*>>> {
        return Collections.emptyList()
    }

    override fun createNativeModules(reactContext: ReactApplicationContext): MutableList<NativeModule> {
        val modules: MutableList<NativeModule> = ArrayList()
        modules.add(ServiceCodeManager(reactContext))
        return modules
    }
}