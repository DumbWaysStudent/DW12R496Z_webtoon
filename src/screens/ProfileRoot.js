import React, { Component } from 'react';
import { Share,Image,Dimensions,StyleSheet,FlatList } from 'react-native';
import { View, Text,Container, Header, Button,Left,Right,Icon, Title, Body,List,ListItem, Thumbnail } from 'native-base';


import Profile from './Profile';
import EditProfile from './EditProfile';

export default class ProfileRoot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: 'create',
      title: 'Profile',
      profileName: 'Bambang',
      isEdit: false
    };
  }
  mode(){
    this.setState((pref)=>({
      icon: pref.icon === 'create' ? 'checkmark' : 'create',
      title: pref.title === 'Profile' ? 'Edit Profile' : 'Profile',
      isEdit: !pref.isEdit
    }))
  }


  render() {
    let mode;
    if(this.state.isEdit){
      mode = <EditProfile/>
    }else{
      mode = <Profile/>
    }
    return (
    <Container>  
      <Header>
          <Left>
            <Title>{this.state.title}</Title>
          </Left>
          <Right>
            <Button transparent>
                <Icon 
                onPress={()=> this.mode()}
                name={this.state.icon}></Icon>
            </Button>
          </Right>
      </Header>
     
        {mode}
      </Container>
      
    );
  }
}
