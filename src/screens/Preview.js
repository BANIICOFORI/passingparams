import { useFonts } from 'expo-font';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { View, Text } from 'react-native';

const Preview = ({ route }) => {
    const { img, Heading, Owner, Time, User, mainText } = route.params
    const [fontsloaded] = useFonts({
        Poppins_Black: require("../fonts/poppins/Poppins-ExtraBold.ttf"),
        Poppins_Medium: require("../fonts/poppins/Poppins-Medium.ttf"),
    })

    if (!fontsloaded) {
        return null
    }

    return (
        <View style={styles.Maincontainer}>
            <View style={styles.imgBefore}></View>
            <Image source={img} style={styles.img} />
            <View>
                <Text style={styles.Heading}>{Heading}</Text>
                <View style={styles.UserContainer}>
                    <Image source={User} style={styles.profile} />
                    <Text style={styles.Owner}>{Owner}</Text>
                    <Text style={styles.Time}>{Time}</Text>
                </View>
                <Text style={styles.mainText}>{mainText}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Maincontainer: {
        marginHorizontal: 20
    },
    UserContainer: {
        flexDirection: "row",
        alignSelf: "flex-start",
        //alignContent:"center",
        alignItems: "center",
    },

    img: {
        width: 350,
        height: 280,
        alignSelf: 'center',
        marginTop: 20
    },

    nameAndMinutes: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    profile: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 3
    },

    Heading: {
        fontSize: 17,
        color: "#1e90ff",
        fontFamily: "Poppins_Black",
        alignSelf: "center"
    },

    Owner: {
        fontFamily: "Poppins_Medium",
        color: 'grey',
        fontSize: 14,
        marginRight: 0
    },

    Time: {
        fontSize: 12,
        marginLeft: 9
    },

    mainText: {
        fontFamily: "Poppins_Medium",
        color: '#353539'
    },
})

export default Preview;
