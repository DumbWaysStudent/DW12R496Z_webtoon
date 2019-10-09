import React, { Component } from 'react';
import { StyleSheet, Text,FlatList } from 'react-native';
import { Container,View, Header, Item, Input, Icon, Button,Body, List, Thumbnail, ListItem,Left,Right } from 'native-base';

export default class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banners :[
        { id: 0,
            title: 'The Secret an angel',
            url: 'https://i0.wp.com/lh3.googleusercontent.com/-YrXGZd4j6yw/XIsj8mRX0rI/AAAAAAAADn4/kekBD-rEJjUSw8LqOH9ABuUotV2KSlLHgCLcBGAs/s600/DI.8Cqh2ZDv.jpg?resize=390,205',
            genre: 'romance',
            favCount: 51,
            favorite: true,
        },{ id: 1,
            title: 'Fish Salty: self',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVFt3Re51kFqpCHmB7NcnrMsPsOJKsfGvh_LJ4D3Dk-qOnPw4O',
            genre:'comedy',
            favCount: 85,
            favorite: true,
        },{ id: 2,
            title: 'Manga Akashic',
            url: 'https://kyouid-storage.sgp1.digitaloceanspaces.com/items/28777-manga-akashic-records-of-bastard-magic-instructor-vol-4.jpg',
            genre:'horror',
            favCount: 94,
            favorite: true,
        }]        
    };
  }
  changeCheckBox(xId){
    let index = this.state.banners.findIndex((x) => x.id == xId)
    this.setState((state)=>{
        if(state.banners[index].favorite != true){
            return state.banners[index].favorite = true
        }else{
            return state.banners[index].favorite = false
        } 
    })        
  }
  favoriteShow(xId){
    let index = this.state.banners.findIndex((x) => x.id == xId)
    let icon = this.state.banners[index].favorite ? 'star' : 'star-outline'

    return icon
  }
  goToDetails(){
    this.props.navigation.navigate('Details')
  }    
  render() {
    return (
      <Container>
      <Header searchBar rounded>
          <Item>
              <Input placeholder="Search" />
              <Icon name="ios-search" />
          </Item>
          <Button transparent>
              <Text>Search</Text>
          </Button>
      </Header>
      <FlatList
            data={this.state.banners}
            renderItem={({item})=>
                <View>
                    <ListItem thumbnail onPress={()=>this.goToDetails()}>
                        <Left>
                            <Thumbnail square source={{uri: item.url}}/>
                        </Left>
                        <Body>
                            <Text>{item.title}</Text>
                            <Text style={st.date}>{item.favCount} Favorite</Text>
                        </Body>
                        <Right>
                        <Button 
                        transparent>
                            <Icon          
                            onPress={() => this.changeCheckBox(item.id)}           
                            name={this.favoriteShow(item.id)}
                            />
                        </Button>
                    </Right>                        
                    </ListItem>
                </View>
            }
            keyExtractor={(item,index)=>index.toString()}
        />      
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