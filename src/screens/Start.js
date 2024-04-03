import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, ImageBackground, Image, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default Start = function() {
    const navi = useNavigation();
    const navHome = () => navi.navigate('Home');

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../photos/second/001_Judge-start-screen.png')} style={styles.startImage}>
                <View style={styles.startTop}></View>
                <View style={styles.startBottom}>
                    <Image source={require('../../photos/second/002_MLB-logo.png')} style={styles.mlb}></Image>
                    <Text style={styles.welcome}>WELCOME</Text>
                    <Text style={styles.welcomeDesc}>This is MLB Strike! Dive into the world of MLB collecting your favorite players, building your dream team, and compete against other baseball fans around the world.</Text>

                    <Pressable style={({pressed}) => (pressed ? {opacity: 0.7} : {})} onPress={navHome}>
                        <Ionicons name="arrow-forward-circle-sharp" size={55} color={'white'}></Ionicons>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    startImage: {
        width: '100%',
        height: '100%',
    },
    startTop: {
        width: '100%',
        height: '60%'
    },
    startBottom: {
        width: '100%',
        height: '40%',
        backgroundColor: 'rgba(4, 30, 66, 0.3)',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: 'center'
    },
    mlb: {
        width: 55,
        height: 30,
        marginTop: 20
    },
    welcome: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 5,
        marginBottom: 10
    },
    welcomeDesc: {
        paddingLeft: 50,
        paddingRight: 50,
        textAlign: 'center',
        fontSize: 15,
        color: 'white',
        marginBottom: 10
    }
})