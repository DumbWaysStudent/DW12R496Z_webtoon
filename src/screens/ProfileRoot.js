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

  toCreation(){
    this.props.navigation.navigate('Creation')
  }

  toLogout(){
    this.props.navigation.navigate('Login')
  }  
  
  render() {
    let mode;
    if(this.state.isEdit){
      mode = <EditProfile/>
    }else{
      mode =       
    <Container>
      <View style={[st.center,st.mt]}>
        <Thumbnail style={st.imgProfile} source={{uri:'https://media.comicbook.com/2019/07/my-hero-academia-150-152-image-pv-1178294.jpeg?auto=webp&width=696&height=395&crop=696:395,smart'}}/>
        <Text style={st.profileText}>Your Name</Text>              
      </View>
      <View>
        <List>
            <ListItem>
                <Left>
                  <Text onPress={()=> this.toCreation()}>My WebToon Creation</Text>
                </Left>
                <Right>
                  <Icon name='arrow-forward'/>
                </Right>
            </ListItem>
            <ListItem>
                <Left>
                  <Text onPress={()=> this.toLogout()}>Log out</Text>
                </Left>
            </ListItem>
        </List>      
      </View>          
    </Container>

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

const st = StyleSheet.create({
  title:{
      fontSize:25,
  },
  mt:{
      marginTop:80,
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
