//
//  RCTServiceCode.swift
//  RNCodeTest
//
//  Created by Awais Hussain on 20/12/2021.
//  Copyright © 2021 Facebook. All rights reserved.
//

import Foundation

@objc (ServiceCodeManager)
class ServiceCodeManager : NSObject {
  
  @objc
  func getService(_ callback: RCTResponseSenderBlock) {
    let serviceCode: String = Bundle.main.object(forInfoDictionaryKey: "SERVICE_KEY") as! String
    callback([serviceCode])
  }

}

