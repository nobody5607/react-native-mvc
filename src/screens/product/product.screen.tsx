import { ActivityIndicator, FlatList, Image, RefreshControl, SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import ProductController from '@controllers/product.controller';
import { Product } from '@models/product.model';
import colors from '@themes/colors';
import Header from '@components/layouts/Header';
import styles from './product.style';

const ProductScreen = () => {
    const { products, loading, error, refreshing, count, onRefresh, isCloseToBottom, loadMore, isDarkMode, backgroundStyle } = ProductController();
    const ProductItems = ({ product }: { product: Product; }) => (
        <View style={isDarkMode ? styles.productCartDark : styles.productCartLight}>
            <View style={styles.containerImage}>
                <Image style={styles.productImage} source={{ uri: product.image }} />
            </View>
            <Text style={isDarkMode ? styles.productNameTextDark : styles.productNameTextLight}>{product.product_name}</Text>
            <Text style={styles.productPrice}>฿{product.price}</Text>
        </View>
    );

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <Text>จำนวนสินค้าทั้งหมด {count} รายการ </Text>

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
                scrollEventThrottle={1500}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />}
            {error && <View><Text>{error}</Text></View>}
            {loading && <ActivityIndicator size="large" color={colors.warning} />}

        </SafeAreaView>
    );
};
export default ProductScreen;
