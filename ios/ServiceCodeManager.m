//
//  NativeModuleManager.m
//  RNCodeTest
//
//  Created by Awais Hussain on 20/12/2021.
//  Copyright © 2021 Facebook. All rights reserved.
//

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(ServiceCodeManager, NSObject)

RCT_EXTERN_METHOD(getService: (RCTResponseSenderBlock)callback)

@end

