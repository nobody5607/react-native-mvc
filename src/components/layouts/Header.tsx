import { Dimensions, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();
import fonts from '@themes/fonts';


var { width } = Dimensions.get('window');
export type Props = {
    navigation?: any;
};


const Header: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.headerMain}>
            <View style={styles.headerFlex}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <FontAwesome name="search" size={40} color="#333" />
                </TouchableOpacity>
                <TextInput
                    placeholder="ค้นหาสินค้า..."
                    placeholderTextColor="#333"
                    style={styles.searchBox}
                />
                <TouchableOpacity>
                    <FontAwesome name="search" size={30} color="#333" style={styles.searchIcon} />
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    headerMain: {
        width: width,
        height: width / 4 - 35,
        backgroundColor: '#fff',
        elevation: 8,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    headerFlex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchBox: {
        width: width - 80,
        height: width / 7 - 13,
        backgroundColor: "#e5e5e5",
        marginHorizontal: 10,
        borderRadius: 25,
        fontSize: fonts.fontSize.font14,
        color: "#333",
        paddingHorizontal: 10,
        position: "relative"
    },
    searchIcon: {
        position: "absolute",
        bottom: -15,
        right: 35,
    }
});