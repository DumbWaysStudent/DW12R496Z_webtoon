import React, { Component } from 'react';
import { Share,Image,Dimensions,StyleSheet,FlatList } from 'react-native';
import { View, Text,Container, Header, Button,Left,Right,Icon, Title, Body,List,ListItem, Thumbnail } from 'native-base';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
          <Header>
              <Left>
                <Title>One Piece</Title>
              </Left>
              <Right>
                <Button transparent>
                    <Icon 
                    onPress={()=> this.onClick()}
                    name="create"></Icon>
                </Button>
              </Right>
          </Header>
        <View style={[st.center,st.mt]}>
          
          <Thumbnail style={st.imgProfile} source={{uri:'https://media.comicbook.com/2019/07/my-hero-academia-150-152-image-pv-1178294.jpeg?auto=webp&width=696&height=395&crop=696:395,smart'}}/>
          <Text style={st.profileText}>Your Name</Text>
                            
        </View>
        <View>
        <List>
                        <ListItem>
                            <Left>
                              <Text>My WebToon Creation</Text>
                            </Left>
                            <Right>
                              <Icon name='arrow-forward'/>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                              <Text>Log out</Text>
                            </Left>
                        </ListItem>
                    </List>      
        </View>          
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
