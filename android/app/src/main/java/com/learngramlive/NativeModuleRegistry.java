/*
    This file is used to register various android native modules used by our app in react-native
    Refer: https://reactnative.dev/docs/native-modules-android
*/

package com.learngramlive;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.learngramlive.net.NAT64AddrInfoModule;
import com.learngramlive.AudioModeModule;

public class NativeModuleRegistry implements ReactPackage {

   @Override
   public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
       return Collections.emptyList();
   }

   @Override
   public List<NativeModule> createNativeModules(
           ReactApplicationContext reactContext) {
       List<NativeModule> modules = new ArrayList<>();
       //We import the module file here
       modules.add(new NAT64AddrInfoModule(reactContext));
       modules.add(new AudioModeModule(reactContext));

       return modules;
   }

   // Backward compatibility
   public List<Class<? extends JavaScriptModule>> createJSModules() {
       return new ArrayList<>();
   }
}
