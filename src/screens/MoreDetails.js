import React, { Component } from 'react';
import { Share,Image,Dimensions,StyleSheet,FlatList } from 'react-native';
import { View, Text,Container, Header, Button,Left,Right,Icon, Title, Body } from 'native-base';

export default class MoreDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        banners :[
            { id: 0,
                title: 'The Secret',
                uri: 'https://img.jakpost.net/c/2017/10/01/2017_10_01_33386_1506850714._large.jpg',
                date: '20 Januari 2018',
                favorite: true,
            },{ id: 1,
                title: 'Pasutri Gaje',
                uri: 'https://i.pinimg.com/originals/eb/2b/df/eb2bdf23b1ba0faccb3c74e3a62b080a.jpg',
                date:'25 Januari 2018',
                favorite: false,
            },{ id: 2,
                title: 'Young Mom',
                uri: 'https://i.pinimg.com/originals/b1/d9/36/b1d936715617b0405f065c6eb90ba872.jpg',
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
        this.props.navigation.navigate('Details')
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
                  <Title>Eps 1</Title>
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
        
        <FlatList
       
       data={ this.state.banners }
    

       renderItem={({item}) => 
       
           <View style={{flex:1, flexDirection: 'row'}}>
   
             <Image source = {{ uri: item.uri }} style={st.img} />
           
           </View>
       
         }

       keyExtractor={(item, index) => index.toString()}
       
       />

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
    },img: {

        width: '100%',
        height: Dimensions.get('window').height,
     
    },    
})