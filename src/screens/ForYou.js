import React, { Component } from 'react'
import { StyleSheet, Text,TouchableOpacity } from 'react-native'
import { Container, Header, Item, Input, Icon, Button,Body, List, Thumbnail, ListItem,Left,Right, View } from 'native-base'
import Slideshow from 'react-native-image-slider-show'

import axios from 'axios'
import env from './../../env'

export default class ForYou extends Component {

    constructor(props) {
        super(props)
     
        this.state = {
          position: 0,
          interval: null,
          datasBanners:[],
       
        }

    }

    componentWillMount() {
        this.getDatas()
        this.setState({
          interval: setInterval(() => {
            this.setState({
              position: this.state.position === this.state.datasBanners.length ? 0 : this.state.position + 1
            })
          }, 3000)
        })
        
    }

    componentWillUnmount() {
        clearInterval(this.state.interval)
    }

    getDatas = async () => {
        await axios({
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
            url: `${env.apiUrl}/webtoons`
        }).then(res=>{
            const datasBanners = res.data
            this.setState({datasBanners})
        });       
    }    
     

    goToDetails(){
        this.getDatas()   
        // this.props.navigation.navigate('Details')
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
            <Slideshow
            dataSource={this.state.datasBanners}
            position={this.state.position}
            onPositionChanged={position => this.setState({ position })} />
            <View>
                <Text style={[st.title,st.mt]}>Favorite</Text>            
                <List dataArray={this.state.datasBanners} horizontal={true} renderRow={(item)=>
                    <ListItem thumbnail style={{marginTop: -20,}}>
                        <Body>
                            <Thumbnail source={{uri: item.img_banner}} />
                            <Text>{item.title}</Text> 
                        </Body>
                    </ListItem>}>  
                </List>                
            </View>
            <Text style={[st.title,st.mt]}>All</Text>
            <List dataArray={this.state.datasBanners} horizontal={false}
            renderRow={(item)=>
                <ListItem thumbnail onPress={()=>this.goToDetails()}>
                    <Left>
                        <Thumbnail square source={{uri: item.img_banner}}/>
                    </Left>                  
                    <Body>
                        <Text>{item.title}</Text>
                    </Body>
                    <Right>
                        <Button 
                        transparent>
                            <Icon/>
                        </Button>
                    </Right>
                </ListItem>}> 
            </List>
        </Container>            
      
        )
      }

}

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
    }
})