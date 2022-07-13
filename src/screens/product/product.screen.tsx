import { ActivityIndicator, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import ProductController from '@controllers/product.controller';
import { Product, ProductResult } from '@models/product.model';
import colors from '@themes/colors';
import { fontSize } from "@themes/fonts";

const ProductScreen = () => {
    const isDarkMode = useColorScheme() === 'light';
    const { data, loading, error } = ProductController();

    const Item = ({ data }: { data: Product; }) => (
        <View
            style={styles.productItems}>
            <Text style={styles.productNameText}>{data.product_name}</Text>
        </View>
    );

    return (
        <SafeAreaView>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <Text>product.screen</Text>

            {data && <FlatList
                data={data}
                renderItem={({ item }) => <Item data={item} />}
                keyExtractor={(item: Product) => item.product_id}
            />}
            {error && <View><Text>{error}</Text></View>}
            {loading && <ActivityIndicator />}
        </SafeAreaView>
    );
};
export default ProductScreen;
const styles = StyleSheet.create({
    productItems: {
        backgroundColor: '#eeeeee',
        borderRadius: 10,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    productNameText: {
        fontSize: fontSize.font16,
        color: colors.black
    }
});