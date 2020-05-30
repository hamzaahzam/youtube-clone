import React, { Component } from 'react';
import {StyleSheet,Image,View,Text,ScrollView,Dimensions} from 'react-native';
import { Container } from 'native-base';
export default class ThumbnailExample extends Component {
    render() {
        return (
            <ScrollView>
            <Image  source={require('../assets/thumbnail1.png')} style={styles.thumbimg}/>
            <View style={styles.view}>
                <View><Image source={require('../assets/Hamza.png')} style={styles.chanelimg}/></View>
                <View><Text style={styles.description}>Unboxing Most Expensive Limited Edition Monopoly Game on Amazon</Text>
                <Text style={styles.chanelname}>Hamza Ahzam 100k views 2 years ago</Text></View>
            </View>
            <Image  source={require('../assets/thumbnail2.png')} style={styles.thumbimg}/>
            <View style={styles.view}>
                <View><Image source={require('../assets/Hamza.png')} style={styles.chanelimg}/></View>
                <View><Text style={styles.description}>Unboxing Most Expensive Limited Edition Monopoly Game on Amazon</Text>
                <Text style={styles.chanelname}>Hamza Ahzam 100k views 2 years ago</Text></View>
            </View>
            <Image  source={require('../assets/thumbnail3.jpg')} style={styles.thumbimg}/>
            <View style={styles.view}>
                <View><Image source={require('../assets/Hamza.png')} style={styles.chanelimg}/></View>
                <View><Text style={styles.description}>Unboxing Most Expensive Limited Edition Monopoly Game on Amazon</Text>
                <Text style={styles.chanelname}>Hamza Ahzam 100k views 2 years ago</Text></View>
            </View>
            <Image  source={require('../assets/thumbnail2.png')} style={styles.thumbimg}/>
            <View style={styles.view}>
                <View><Image source={require('../assets/Hamza.png')} style={styles.chanelimg}/></View>
                <View><Text style={styles.description}>Unboxing Most Expensive Limited Edition Monopoly Game on Amazon</Text>
                <Text style={styles.chanelname}>Hamza Ahzam 100k views 2 years ago</Text></View>
            </View>
            <Image  source={require('../assets/thumbnail3.jpg')} style={styles.thumbimg}/>
            <View style={styles.view}>
                <View><Image source={require('../assets/Hamza.png')} style={styles.chanelimg}/></View>
                <View><Text style={styles.description}>Unboxing Most Expensive Limited Edition Monopoly Game on Amazon</Text>
                <Text style={styles.chanelname}>Hamza Ahzam 100k views 2 years ago</Text></View>
            </View>

            </ScrollView >
        );
    }
}const styles = StyleSheet.create({
    thumbimg:{
        width:'100%',
        marginTop:10,
        height: 170  
    },
    chanelimg:{
        width:40,
        height:40,
        borderRadius: 40/2
    },
    description:{
        marginLeft:6,
        fontWeight:'bold'
    },
    chanelname:{
        marginLeft:6,
        fontSize:12,
    },
    view:{
        marginTop: 9,
        marginLeft:9,
        marginRight:60,
        flexDirection:'row'
    }
});
