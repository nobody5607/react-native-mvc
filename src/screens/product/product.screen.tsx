import { ActivityIndicator, FlatList, Image, RefreshControl, SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import ProductController from '@controllers/product.controller';
import { Product } from '@models/product.model';
import colors from '@themes/colors';
import fonts from '@themes/fonts';

const ProductScreen = () => {
    const isDarkMode = useColorScheme() === 'light';
    const { products, loading, error, refreshing, count, onRefresh, isCloseToBottom, loadMore } = ProductController();


    const ProductItems = ({ product }: { product: Product; }) => (
        <View style={styles.productItems}>
            <Image style={styles.tinyLogo} source={{ uri: product.image }} />
            <Text style={styles.productNameText}>{product.product_name}</Text>
            <Text style={styles.productPrice}>฿{product.price}</Text>
        </View>
    );

    return (
        <SafeAreaView>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <Text>จำนวนสินค้าทั้งหมด {count} รายการ</Text>

            {products && <FlatList
                onScroll={({ nativeEvent }) => {
                    if (isCloseToBottom(nativeEvent)) {
                        loadMore();
                    }
                }}
                data={products}
                numColumns={2}
                renderItem={({ item }) => <ProductItems product={item} />}
                keyExtractor={(item: Product) => item.product_id}
                scrollEventThrottle={1000}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />}
            {error && <View><Text>{error}</Text></View>}
            {loading && <ActivityIndicator size="large" color={colors.primary} />}
        </SafeAreaView>
    );
};
export default ProductScreen;
const styles = StyleSheet.create({
    productItems: {
        backgroundColor: colors.while,
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        flex: 1
    },
    tinyLogo: {
        width: '100%',
        height: 150,
    },
    productNameText: {
        fontSize: fonts.fontSize.font16,
        color: colors.black,
        padding: 10
    },
    productPrice: {
        color: colors.primary,
        fontSize: fonts.fontSize.font18,
        fontWeight: fonts.fontWeight.bold,

    }
});