import React, { Component } from 'react';
import { Share,Image,Dimensions,StyleSheet,FlatList } from 'react-native';
import { View, Text,Container, Header, Button,Left,Right,Icon, Title, Body } from 'native-base';

import axios from 'axios'
import env from './../../env'

export default class MoreDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        datasBanners:[],    
    };
  }
    componentDidMount() {
      this.getDatas()
    }

    getDatas = async () => {
      const url = `${env.apiUrl}/image/${this.props.navigation.getParam("id")}`
      await axios({
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
        url,
        }).then(res=>{
        const datasBanners = res.data
        this.setState({datasBanners,webtoonData:datasBanners[0].webtoonData})
      }); 
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
                  <Title>{this.props.navigation.getParam("title")}</Title>
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
       data={ this.state.datasBanners }
       renderItem={({item}) => 
           <View style={{flex:1, flexDirection: 'row'}}>
             <Image source = {{ uri: item.images }} style={st.img} />
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