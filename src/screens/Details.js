import React, { Component } from 'react';
import { Share,Image,Dimensions,StyleSheet } from 'react-native';
import { View, Text,Container, Header, Button,Left,Right,Icon, Title, Body,List,ListItem, Thumbnail } from 'native-base';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
        banners :[
            { id: 0,
                title: 'The Secret',
                url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                date: '20 Januari 2018',
                favorite: true,
            },{ id: 1,
                title: 'Pasutri Gaje',
                url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                date:'25 Januari 2018',
                favorite: false,
            },{ id: 2,
                title: 'Young Mom',
                url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                date:'30 Januari 2018',
                favorite: false,
            }]    
    };
  }
    onClick() {
        Share.share({
        message: 'Share from cloneWebToon',
        })  
    }
    back(){
        this.props.navigation.navigate('ForYou')
    }  
    goToDetails(){
        // this.props.navigation.navigate('ForYou')
        this.props.navigation.navigate('MoreDetails')
    }  
  render() {
    return (
      <Container>
          <Header>
              <Left>
                  <Button transparent>
                      <Icon 
                      onPress={()=>this.back()}
                      name="arrow-back">
                      </Icon>
                  </Button>
              </Left>
              <Body>
                  <Title>Details Komik</Title>
              </Body>
              <Right>
                <Button transparent>
                    <Icon 
                    onPress={()=> this.onClick()}
                    name="share-alt"></Icon>
                </Button>
              </Right>
          </Header>
        <View>
          <Image
          style={{width: Dimensions.get('window').width, height:(Dimensions.get('window').height*(35/100))}}
          source={{uri:'https://images.unsplash.com/photo-1568383694497-a06983132aa9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=800'}}/>
            <List dataArray={this.state.banners} horizontal={false}
            renderRow={(item)=>
                <ListItem thumbnail onPress={()=>this.goToDetails()}>
                    <Left>
                        <Thumbnail square source={{uri: item.url}}/>
                    </Left>                  
                    <Body>
                        <Text>Eps. {item.id+1}</Text>
                        <Text style={st.date}>{item.date}</Text>
                    </Body>
                </ListItem>}>                
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
        marginLeft:10,
    },
    date:{
        fontStyle: 'italic',
        color:'blue',
    }
})