import React from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    Dimensions, 
    ImageBackground, 
    Image 
} from "react-native";
import {getDisplayPrice} from "../../library/ProductsHelper"

const width = Dimensions.get('window').width * 0.8;

const Product = ({product}) => {

    const DisplayPrices = () => {
        const {price, discountedPrice} = getDisplayPrice(product)

        return discountedPrice ? 
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.boldLabel}>{discountedPrice}</Text>
                <Text style={styles.oldPriceLabel}>{price}</Text>
            </View> :
            <Text style={styles.boldLabel}>{price}</Text>
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.backgroundImage}
                source={{
                    uri: product.image
                }}
                resizeMode='cover'
            >
                <View style={styles.detailsView}>
                    <View 
                        style={{flex: 1}}
                    >
                        <Text 
                            style={styles.boldLabel} 
                            numberOfLines={1} 
                            ellipsizeMode='tail'
                        >
                                {product.name}
                        </Text>
                        <DisplayPrices />
                        <Text 
                            style={styles.productDescriptionLabel} 
                            numberOfLines={2} 
                            ellipsizeMode='tail'
                        >
                            {product.short_description}
                        </Text>
                    </View>
                    <View 
                        style={styles.profileView}
                    >
                        <Image 
                            style={styles.profileImage} 
                            source={require("../../assets/images/profile.jpg")} 
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: width, 
        aspectRatio: 4/3,
        marginHorizontal: 10
    },
    backgroundImage: {
        flex: 1,
        borderRadius: 15,
        overflow: "hidden",
    },
    detailsView: {
        width: "100%",
        flexDirection: "row",
        backgroundColor: '#000000CC',
        padding: 10,
        position: 'absolute',
        bottom: 0,
    },
    profileView: { 
        marginRight: 5,
        marginTop: 5
    },
    profileImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        overflow: "hidden"
    },
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
    },
    productDescriptionLabel: {
        marginTop: 5,
        fontWeight: 'normal',
        color: 'lightgray',
        fontSize: 16
    }
});

export default Product;
