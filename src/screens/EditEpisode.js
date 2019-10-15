//This is an example code for React Native Floating Action Button//
import React, { Component } from 'react';
//import react in our code.
 
import { StyleSheet, View, Image, TouchableOpacity, Alert, Text } from 'react-native';
import { Container, Icon, Button,Body, List, Thumbnail, ListItem,Left,Right,Item,Input } from 'native-base';

//import all the components we are going to use.
 
export default class EditEpisode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banners :[
        { id: 0,
            title: '1.cover.png',
            url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
            genre: 'romance',
            favorite: true,
        },{ id: 1,
            title: '2. intro.png',
            url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
            genre:'comedy',
            favorite: false,
        },{ id: 2,
            title: '3. komik.png',
            url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
            genre:'horror',
            favorite: false,
        }] 
    };
  }  
  clickHandler = () => {
    //function to handle click on floating Action Button
    Alert.alert('Floating Button Clicked');
  };
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
      <View style={st.mg}>
        <Item regular>
            <Input placeholder="Type Name here...." />
        </Item>
      </View>
      <View>
        <List dataArray={this.state.banners} horizontal={false}
        renderRow={(item)=>
            <ListItem thumbnail onPress={()=>this.goToDetails()}>
                <Left>
                    <Thumbnail square source={{uri: item.url}}/>
                </Left>                  
                <Body>
                    <Text style={{fontSize:20}}>{item.title}</Text>
                    <View style={{width:100}}>
                        <Button block danger>
                            <Text>Delete</Text>
                        </Button>             
                    </View>
                </Body>
            </ListItem>}>                
        </List>   
      </View>
      <View style={st.mg}>
         <Button block success>
            <Text>+ Image</Text>
          </Button>             
          <Button block danger>
            <Text>Delete Episode</Text>
          </Button>              
      </View>

    </Container>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
 
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
 
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
});

const st = StyleSheet.create({
  title:{
      fontSize:18,
  },
  mt:{
      marginLeft:10,
  },
  genre:{
      fontStyle: 'italic',
      color:'blue',
  },
  mg:{
      margin: 20,
  }
})