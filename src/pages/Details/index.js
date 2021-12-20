import React from 'react';
import {
    Text,
    ScrollView,
    StyleSheet,
    Image,
    View,
    SafeAreaView
} from 'react-native'
import DisplayPrices from '../../components/Product/DisplayPrices';

const DetailsScreen = ({route}) => {
    const {product} = route.params

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image 
                    source={{
                        uri: product.image
                    }}
                    style={styles.imageView}
                />
                <View style={styles.innerContainer}>
                    <Text style={styles.nameLabel}>{product.name}</Text>
                    <DisplayPrices product={product} />
                    <Text style={styles.descriptionTitle}>Description:</Text>
                    <Text style={styles.descriptionLabel}>{product.description}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#666'
    },
    innerContainer: {
        padding: 10,
    },
    nameLabel: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5,
    },
    descriptionTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15
    },
    descriptionLabel: {
        color: 'white',
        fontSize: 14
    },
    imageView: {
        width: '100%',
        aspectRatio: 4/3,
    }
})

export default DetailsScreen