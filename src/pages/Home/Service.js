import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    NativeModules
} from 'react-native'

const Service = () => {
    const [serviceCode, setServiceCode] = useState("")

    useEffect(() => {
        if (__DEV__) {
            NativeModules.ServiceCodeManager.getService(serviceCode => {
                setServiceCode(serviceCode)
            })
        } else {
            setServiceCode("le475jUm1D")
        }
        
    }, [])
    
    return (
        <View>
            <Text>Service Key: {serviceCode}</Text>
        </View>
    )
}

export default Service