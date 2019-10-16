import React, { Component } from 'react';
import { Share,Image,Dimensions,StyleSheet,FlatList } from 'react-native';
import { View, Text,Container, Header, Button,Left,Right,Icon, Title, Body,List,ListItem, Thumbnail } from 'native-base';

import axios from 'axios'
import env from './../../env'

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datasBanners:[],
            webtoonData:"",
        };
    }
    componentDidMount() {
        this.getDatas()
        
    }

    getDatas = async () => {
        const url = `${env.apiUrl}/episode/${this.props.navigation.getParam("id")}`
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
        // this.props.navigation.goBack()
    }  
    goToDetails(id,title){
        // this.props.navigation.navigate('ForYou')
        this.props.navigation.navigate('MoreDetails',{id,title})
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
          <Image
          style={{width: Dimensions.get('window').width, height:(Dimensions.get('window').height*(30/100))}}
          source={{uri:this.state.webtoonData.img_banner}}/>
        </View>     
        <FlatList
            data={this.state.datasBanners}
            renderItem={({item})=>
            
                    <ListItem thumbnail onPress={()=>this.goToDetails(item.id,item.title)}>
                        <Left>
                            <Thumbnail square source={{uri: 'https://media.comicbook.com/2019/07/my-hero-academia-150-152-image-pv-1178294.jpeg?auto=webp&width=696&height=395&crop=696:395,smart'}}/>
                        </Left>
                        <Body>
                            <Text>{item.title}</Text>
                            <Text style={st.date}>{item.createdAt}</Text>
                        </Body>
                    </ListItem>
      
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