import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Image, ImageBackground, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default Home = function() {
    const navi = useNavigation();
    const navPlay = () => navi.navigate('Play');
    const navMyTeam = () => navi.navigate('My Team');
    const navSettings = () => navi.navigate('Settings')

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../photos/second/003_Cole-home-screen.png')} style={styles.homeImage}>
                <View style={styles.homeLeft}></View>
                <View style={styles.menuItems}>
                    <Pressable style={({pressed}) => (pressed ? {opacity: 0.7} : {})} onPress={navPlay}>
                        <View style={styles.item}>
                            <Ionicons name="baseball" size={25} color={'white'}></Ionicons>
                            <Text style={styles.menuText}>PLAY</Text>
                        </View>
                    </Pressable>
                    <Pressable style={({pressed}) => (pressed ? {opacity: 0.7} : {})} onPress={navMyTeam}>
                        <View style={styles.item}>
                            <Ionicons name="people-circle" size={25} color={'white'}></Ionicons>
                            <Text style={styles.menuText}>MY TEAM</Text>
                        </View>
                    </Pressable>
                    <Pressable style={({pressed}) => (pressed ? {opacity: 0.7} : {})} onPress={navSettings}>
                        <View style={styles.item}>
                            <Ionicons name="settings-sharp" size={25} color={'white'}></Ionicons>
                            <Text style={styles.menuText}>SETTINGS</Text>
                        </View>
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
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    homeImage: {
        width: '100%',
        height: '100%',
        flexDirection: 'row'
    },

    homeLeft: {
        flex: 1,
    },
    menuItems: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        width: 220,
        height: 70,
        backgroundColor: 'rgba(12, 35, 64, 0.7)',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,

        paddingLeft: 20,
        flexDirection: 'row'
    },
    menuText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 12,
        color: 'white',
        fontStyle: 'italic'
    }
})