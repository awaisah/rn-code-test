import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import Category from "../../components/Category";
import {getCategories} from '../../library/ProductsHelper';

const Market = () => {
    const [categories, setCategories] = useState(getCategories())

    useEffect(() => {
        // _categories.getAllProducts()
        // console.log(categories)
    }, [categories])

    const renderItem = ({item}) => {
        return <Category category={item} />
    }

    return (
        <SafeAreaView>
            <FlatList 
                data={categories}
                renderItem={renderItem}
                keyExtractor={(item) => item.title}
            />
            
        </SafeAreaView>
    )
};

export default Market;
