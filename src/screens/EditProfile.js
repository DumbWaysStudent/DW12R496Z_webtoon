import React, { Component } from 'react';
import { Share,Image,Dimensions,StyleSheet,FlatList } from 'react-native';
import { View, Text,Container, Header, Button,Left,Right,Icon, Title, Body,List,ListItem, Thumbnail, Content } from 'native-base';
import ImagePicker from 'react-native-image-picker';
import { Input } from 'react-native-elements';
import ProfileRoot from './ProfileRoot';

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

/**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info in the API Reference)
 */

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      avatarSource: 'https://media.comicbook.com/2019/07/my-hero-academia-150-152-image-pv-1178294.jpeg?auto=webp&width=696&height=395&crop=696:395,smart',
    };
  }
  openSelecetedFile(){
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // const source = { uri: response.uri };
    
        // You can also display the image using data:
        const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          avatarSource: source,
        });
      }
    });    

    // Launch Camera:
    ImagePicker.launchCamera(options, (response) => {
      // Same code as in above section!
    });

    // Open Image Library:
    ImagePicker.launchImageLibrary(options, (response) => {
      // Same code as in above section!
    });    
  }
  render() {
    return (
    <Content>
      <View style={[st.center,st.mt2]}>
        <Button transparent onPress={()=>this.openSelecetedFile()}>
          <Thumbnail 
            style={st.imgProfile} source={{uri:this.state.avatarSource}}/>
        </Button>
        
      </View>
      <View style={[st.center,st.mt]}>
        <Input
        value='Your Name'
        >
        </Input>
      </View>
    </Content>

    );
  }
}

const st = StyleSheet.create({
    title:{
        fontSize:25,
    },
    mt:{
        marginTop:80,
    },
    mt2:{
      marginTop:133,
    },    
    date:{
        fontStyle: 'italic',
        color:'blue',
    },
    center:{
      alignItems:'center',
    },
    imgProfile:{
      borderRadius:150/2,
      width:  150, 
      height: 150,
    },
    profileText:{
      fontSize: 26,
    }
})
