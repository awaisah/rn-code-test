import React from 'react';
import { View, Text, FlatList, StyleSheet } from "react-native"
import Product from '../Product';

const Category = ({category}) => {

    const renderItem = ({item}) => {
        return <Product product={item} />
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{category.title}</Text>
            <FlatList 
                horizontal
                data={category.products}
                renderItem={renderItem}
                keyExtractor={(item) => item.title}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    }
});

export default Category