import React, { Component } from 'react';
import {StyleSheet,Image,View,Text,ScrollView,Dimensions} from 'react-native';
import { Container } from 'native-base';
const { height } = Dimensions.get('window');
export default class ThumbnailExample extends Component {
    state = {
        screenHeight: height,
      };
      onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenHeight: contentHeight });
      };
    render() {
        const scrollEnabled = this.state.screenHeight > height;
        return (
            <ScrollView contentContainerStyle={styles.scrollview}
            scrollEnabled={scrollEnabled}
            onContentSizeChange={this.onContentSizeChange}>
            <Text style={styles.chanelname}>jhhdsahjadshjxczhjhkjashgdhjashgdhasgdhgsahgdashgfhasgfjhasgfjhasgjhasgfasgdhgashdgsagdjanskjAajJSKLJAALDXNAJSHDHYWEGDYGASBXJK\HXHASGDKJSBNXKJASHDKJBASJXCHJAS</Text>
            </ScrollView >
        );
    }
}const styles = StyleSheet.create({
    scrollview: {
        flexGrow: 1,
      },
    thumbimg:{
        width:'100%',
        marginTop:10,
        height:'29%'
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
        fontSize:99,
    },
    view:{
        marginTop: 9,
        marginLeft:9,
        marginRight:60,
        flexDirection:'row'
    }
});
