import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'
import { getDisplayPrice } from '../../library/ProductsHelper';

const DisplayPrices = ({product}) => {
    const {price, discountedPrice} = getDisplayPrice(product)

    return discountedPrice ? 
        <View style={{flexDirection: 'row'}}>
            <Text style={styles.boldLabel}>{discountedPrice}</Text>
            <Text style={styles.oldPriceLabel}>{price}</Text>
        </View> :
        <Text style={styles.boldLabel}>{price}</Text>
}

const styles = StyleSheet.create({
    boldLabel: {
        marginTop: 5,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    },
    oldPriceLabel: {
        fontSize: 14,
        marginTop: 6,
        marginLeft: 5,
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid',
        color: 'lightgray',
    }
});

export default DisplayPrices