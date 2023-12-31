import React from 'react'
import {TextInput ,ImageBackground, StyleSheet, Text, View,TouchableOpacity,Image,} from 'react-native'


export function Home(){
    return(
      <View style={{ flex: 1, backgroundColor:'#FFFF'}}>

          <ImageBackground source={require ('./img/ChampRb.png')} resizeMode="contain" style={styles.ChampRbp}></ImageBackground>
       
          <ImageBackground source={require ('./img/ChampRb2.png')} resizeMode="contain" style={styles.ChampFr}></ImageBackground>
   
          <Text style={styles.BemVindo}>Bem Vindo!</Text>

          <TextInput style={styles.seunome} placeholder=' Qual Seu Nome ? '/>

          <Text style={styles.AtvSom}>Ative / Desative o som </Text>

         <TouchableOpacity ><Image style={styles.icone} source={require('./img/icone2.png')} /></TouchableOpacity>

      </View>
   )
 }

const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#fffff"

        },

        ChampRbp: {
            marginLeft: -22,
            width: 250,
            height: 200,
            resizeMode:"contain",
            top: 190,
          },

        ChampFr: { 
           width: 300,
           height: 300,
           bottom: 25,
           resizeMode: 'contain',
           marginLeft: 70,
        },

        BemVindo: {
            bottom: 30,
            fontSize: 30,
            color: '#5271FF',
            textAlign: 'center',
            flex: 1,
            
    
        },

        icone: {

          bottom: 25,
          width: 60,
          height:60,
          resizeMode:"contain",
          marginLeft: 20,
      
        },

        AtvSom: {
        top: 80,   
        fontSize: 20,
        color: '#5271FF',
        textAlign: 'center',
        flex: 1,
        marginLeft: 15,    
    },

    seunome: {
        borderWidth: 2,
        padding: 9,
        width: 250,
        borderRadius: 10,
        justifyContent: 'center',
        textAlign: 'center',
        marginLeft: 75,
        borderColor: '#5271ff',
        color: 'blue',
        bottom: 20,


    },
});  
 