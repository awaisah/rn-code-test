import React from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    Dimensions, 
    ImageBackground, 
    Image,
    Animated,
    TouchableWithoutFeedback,
    Easing
} from "react-native";
import DisplayPrices from "../../components/Product/DisplayPrices"
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('window').width * 0.8;

const Product = ({product}) => {
    const navigation = useNavigation();

    const animatedValue = new Animated.Value(0)

    const onHold = () => {
        Animated.timing(animatedValue, {
            toValue: 0.005,
            duration: 100,
            easing: Easing.ease
        }).start()
    }

    const onRelease = () => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 100,
            easing: Easing.ease
        }).start()
    }

    const navigateToDetails = () => {
        navigation.navigate("Details", {
            product
        })
    }

    

    const transform = {transform: [
        {
            scaleX: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 15]
            })
        },
        {
            scaleY: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 12.5]
            })
        }
    ]}

    return (
        <TouchableWithoutFeedback 
            onPressIn={onHold} 
            onPressOut={onRelease}
            onPress={navigateToDetails}
        >
            <Animated.View style={[styles.container, transform]}>
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
                            <DisplayPrices product={product} />
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
            </Animated.View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    container: {
        width: width, 
        aspectRatio: 4/3,
        paddingHorizontal: 15,
        marginVertical: 10
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
    productDescriptionLabel: {
        marginTop: 5,
        fontWeight: 'normal',
        color: 'lightgray',
        fontSize: 16
    }
});

export default Product;
