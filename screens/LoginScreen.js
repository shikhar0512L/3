import React from 'react';
import { View, Text, Platform, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, Presseable, Alert } from 'react-native';
import LoginForm from "../components/LoginForm";

const INSTA_LOGO = 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png';



const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.LogoContainer}>
            <Image source={{uri: INSTA_LOGO,width:100,height:100}} />
        </View>
        <LoginForm
        navigation={navigation}
        />
    </View>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:50,
        marginHorizontal:12,
        height:"100%",
    },
    LogoContainer:{
        alignItems:"center",
        marginTop:60
    }

})