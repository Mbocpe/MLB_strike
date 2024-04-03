import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Image, ImageBackground, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default Play = function() {
    const navi = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../photos/second/003_Cole-home-screen.png')} style={styles.homeImage}>
                <Text style={styles.demo}>Play Screen</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center'
    },
    homeImage: {
        width: '100%',
        height: '100%',
        flexDirection: 'row'
    },
    demo: {
        fontSize: 50,
        fontWeight: 'bold'
    }
})