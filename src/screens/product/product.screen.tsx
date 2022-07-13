import { ActivityIndicator, Dimensions, FlatList, Image, RefreshControl, SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import ProductController from '@controllers/product.controller';
import { Product } from '@models/product.model';
import colors from '@themes/colors';
import fonts from '@themes/fonts';
import { scale } from 'react-native-size-matters';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ProductScreen = () => {
    const isDarkMode = useColorScheme() === 'dark'; //'light','dark'

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const { products, loading, error, refreshing, count, onRefresh, isCloseToBottom, loadMore } = ProductController();


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
    productCartLight: {
        backgroundColor: Colors.lighter,
        borderRadius: 10,
        marginVertical: 15,
        marginHorizontal: 15,
        flex: 1,
        borderWidth: 1,
        borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    productCartDark: {
        backgroundColor: Colors.darker,
        borderRadius: 10,
        marginVertical: 15,
        marginHorizontal: 15,
        flex: 1,
        borderWidth: 1,
        borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    containerImage: {
        width: scale(150),
        height: scale(140),
    },
    productImage: {
        width: '100%',
        height: '100%',
        resizeMode: "cover",
        flex: 1,

    },
    productNameTextDark: {
        fontSize: fonts.fontSize.font16,
        color: Colors.lighter,
        padding: 10
    },
    productNameTextLight: {
        fontSize: fonts.fontSize.font16,
        color: Colors.darker,
        padding: 10
    },
    productPrice: {
        color: colors.primary,
        fontSize: fonts.fontSize.font18,
        fontWeight: fonts.fontWeight.bold,
        marginBottom: 10,
        marginTop: 10,
    }
});