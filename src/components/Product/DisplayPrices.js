import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'
import { getDisplayPrice } from '../../library/ProductsHelper';

const DisplayPrices = ({product, theme="light"}) => {
    const {price, discountedPrice} = getDisplayPrice(product)

    return discountedPrice ? 
        <View style={{flexDirection: 'row'}}>
            <Text style={[
                styles.boldLabel,
                theme === "light" ? styles.whiteText : styles.blackText
            ]}>{discountedPrice}</Text>
            <Text style={[
                styles.oldPriceLabel,
                theme === "light" ? styles.lightgrayText : styles.darkgrayText
            ]}>{price}</Text>
        </View> :
        <Text style={[
            styles.boldLabel,
            theme === "light" ? styles.whiteText : styles.blackText
        ]}>{price}</Text>
}

const styles = StyleSheet.create({
    boldLabel: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 16
    },
    blackText: {
        color: 'black'
    }, 
    whiteText: {
        color: 'white'
    },
    lightgrayText: {
        color: 'lightgray'
    },
    darkgrayText: {
        color: 'darkgray'
    },
    oldPriceLabel: {
        fontSize: 14,
        marginTop: 6,
        marginLeft: 5,
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid'
    }
});

export default DisplayPrices