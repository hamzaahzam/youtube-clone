import React, { Component } from 'react';
import {StyleSheet,Image,View,Text,ScrollView,} from 'react-native';
import {Card,CardItem,Body} from 'native-base';
export default class ThumbnailExample extends Component {
    render() {
        return (
            <ScrollView>
            <Card transparent>
            <CardItem>
              <Body>
              <Image  source={require('../assets/thumbnail1.png')} style={styles.thumbimg}/>
            <View style={styles.view}>
                <Image source={require('../assets/Hamza.png')} style={styles.chanelimg}/>
                <Text style={styles.description}>Unboxing Most Expensive Limited Edition Monopoly Game on Amazon</Text>
            </View>
            <Text style={styles.chanelname}>Hamza Ahzam 100k views 2 years ago</Text>
              </Body>
            </CardItem>
          </Card>
          <Card transparent>
            <CardItem>
              <Body>
              <Image  source={require('../assets/thumbnail1.png')} style={styles.thumbimg}/>
            <View style={styles.view}>
                <Image source={require('../assets/Hamza.png')} style={styles.chanelimg}/>
                <Text style={styles.description}>Unboxing Most Expensive Limited Edition Monopoly Game on Amazon</Text>
            </View>
            <Text style={styles.chanelname}>Hamza Ahzam 100k views 2 years ago</Text>
              </Body>
            </CardItem>
          </Card>
          <Card transparent>
            <CardItem>
              <Body>
              <Image  source={require('../assets/thumbnail1.png')} style={styles.thumbimg}/>
            <View style={styles.view}>
                <Image source={require('../assets/Hamza.png')} style={styles.chanelimg}/>
                <Text style={styles.description}>Unboxing Most Expensive Limited Edition Monopoly Game on Amazon</Text>
            </View>
            <Text style={styles.chanelname}>Hamza Ahzam 100k views 2 years ago</Text>
              </Body>
            </CardItem>
          </Card>
          <Card transparent>
            <CardItem>
              <Body>
              <Image  source={require('../assets/thumbnail1.png')} style={styles.thumbimg}/>
            <View style={styles.view}>
                <Image source={require('../assets/Hamza.png')} style={styles.chanelimg}/>
                <Text style={styles.description}>Unboxing Most Expensive Limited Edition Monopoly Game on Amazon</Text>
            </View>
            <Text style={styles.chanelname}>Hamza Ahzam 100k views 2 years ago</Text>
              </Body>
            </CardItem>
          </Card>
          <Card transparent>
            <CardItem>
              <Body>
              <Image  source={require('../assets/thumbnail1.png')} style={styles.thumbimg}/>
            <View style={styles.view}>
                <Image source={require('../assets/Hamza.png')} style={styles.chanelimg}/>
                <Text style={styles.description}>Unboxing Most Expensive Limited Edition Monopoly Game on Amazon</Text>
            </View>
            <Text style={styles.chanelname}>Hamza Ahzam 100k views 2 years ago</Text>
              </Body>
            </CardItem>
          </Card>
          <Card transparent>
            <CardItem>
              <Body>
              <Image  source={require('../assets/thumbnail1.png')} style={styles.thumbimg}/>
            <View style={styles.view}>
                <Image source={require('../assets/Hamza.png')} style={styles.chanelimg}/>
                <Text style={styles.description}>Unboxing Most Expensive Limited Edition Monopoly Game on Amazon</Text>
            </View>
            <Text style={styles.chanelname}>Hamza Ahzam 100k views 2 years ago</Text>
              </Body>
            </CardItem>
          </Card>
            </ScrollView >
        );
    }
}const styles = StyleSheet.create({
    thumbimg:{
        width:'100%',
        marginTop:10,
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
        marginLeft:55,
        fontSize:12,
    },
    view:{
        marginTop: 9,
        marginLeft:9,
        marginRight:60,
        flexDirection:'row'
    }
});
