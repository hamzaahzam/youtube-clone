import React, { Component } from 'react';
import {TouchableOpacity, Image,StyleSheet} from 'react-native';
import { Container, Header, Tab, Tabs,  Text, View,TabHeading} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import YouLogo from '../assets/YouTubeLogo.png';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';
import Tab4 from './tabFour';
import Tab5 from './tabFive';
export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs style={styles.header}>
          <View style={{ flexDirection: 'row', marginRight: 10, marginTop: 15, }}>
            <Image
        source={YouLogo} 
        style={{ height: 22, width: 98, marginLeft: 20, }}/>
          <TouchableOpacity style={{ paddingHorizontal: 15, marginLeft: 90,}}>
            <Icon name='videocam' size={25}  />
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingHorizontal: 15 }}>
            <Icon name='search' size={25}  />
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingHorizontal: 15 }}>
            <Icon name='account-circle' size={25} />
          </TouchableOpacity>
          </View>
        </Header> 
        
        <Tabs tabBarPosition = { 'bottom' } 
        tabBarInactiveTextColor = { 'black' } 
        tabBarActiveTextColor = { 'red' }  
        tabBarUnderlineStyle = {{ backgroundColor: 'transparent' }} 
        locked>
          <Tab heading={<TabHeading style={styles.tabs}>
            <Icon name="home" style={styles.icon} size={20}/>
            <Text style={styles.text}>Home</Text></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab heading={<TabHeading style={styles.tabs}>
            <Icon name="whatshot" style={styles.icon} size={20} />
            <Text style={styles.text}>Explore</Text></TabHeading>}>
            <Tab2 />
          </Tab>
          <Tab heading={<TabHeading style={styles.tabs}>
            <Icon name="subscriptions" style={styles.icon} size={20}/>
            <Text style={styles.text}>Subscriptions</Text></TabHeading>}>
            <Tab3 />
          </Tab>
          <Tab heading={<TabHeading style={styles.tabs}>
            <Icon name="mail" style={styles.icon} size={20}/>
            <Text style={styles.text}>Mail</Text></TabHeading>}>
            <Tab4 />
          </Tab>
          <Tab heading={<TabHeading style={styles.tabs}>
            <Icon name="folder" style={styles.icon} size={20}/>
            <Text style={styles.text}>Library</Text></TabHeading>}>
            <Tab5 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  tabs:{
    flexDirection:'column',
    backgroundColor:'white',
    elevation:60,
    shadowColor:'red',
    shadowOpacity: 0.30,
    shadowOffset:{width :0,height:4}
    
  },
  header:{
    backgroundColor:'white',
    elevation:60,
  },
  text:{
  color:'black'
  }
});
