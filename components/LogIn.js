import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  Floatinglabel,
} from 'react-native';
import bgimg from '../assets/Blur.jpg';
import logo from '../assets/Logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Text} from 'native-base';
const LogIn = ({navigation}) => {
  return (
    <ImageBackground source={bgimg} style={styles.bgimg}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logoimg} />
      </View>
      <View style={styles.viewuser}>
        <TextInput
          style={styles.username}
          placeholder={'Username'}
          placeholderTextColor={'white'}
        />
        <Icon name={'home'} size={22} color={'black'} style={styles.usericon} />
      </View>
      <View style={styles.viewpass}>
        <Icon name={'home'} size={22} color={'black'} style={styles.usericon} />
        <TextInput
          style={styles.username}
          placeholder={'Password'}
          secureTextEntry={true}
          placeholderTextColor={'white'}
        />
      </View>
      <View style={styles.viewSignUp}>
        <Text style={styles.NewAcc1}>Dont Have an Account?</Text>
        <Text
          onPress={() => navigation.navigate('SignUp')}
          style={styles.NewAcc2}>
          Create Now!
        </Text>
      </View>
      <Button rounded warning 
      style={styles.loginbtn}
      onPress={() => navigation.navigate('YouHome')}
      >
        <Text> Log In! </Text>
      </Button>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  bgimg: {
    width: '100 %',
    height: '100 %',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
  },
  logoimg: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
  },
  viewuser: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  viewpass: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  username: {
    width: 300,
    height: 45,
    borderRadius: 9,
    fontSize: 15,
    paddingLeft: 45,
    backgroundColor: '#rgba(0,0,0,0.29)',
    color: 'rgba(225,225,225,0.7)',
  },
  usericon: {
    marginTop: 10,
    position: 'absolute',
    left: 40,
  },
  loginbtn: {
    width: 200,
    marginTop: 22,
    height: 45,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    left: 80,
  },
  viewSignUp: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  NewAcc1: {
    color: 'white',
  },
  NewAcc2: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
export default LogIn;
