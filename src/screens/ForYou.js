import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Header, Item, Input, Icon, Button,Body, List, Thumbnail, ListItem,Left,Right } from 'native-base';
import Slideshow from 'react-native-image-slider-show';

export default class ForYou extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          position: 1,
          interval: null,

          banners :[
            { id: 0,
                title: 'The Secret',
                url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                genre: 'romance',
                favorite: true,
            },{ id: 1,
                title: 'Pasutri Gaje',
                url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                genre:'comedy',
                favorite: false,
            },{ id: 2,
                title: 'Young Mom',
                url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                genre:'horror',
                favorite: false,
            }]          
        };

    }
     
    componentWillMount() {
        this.setState({
          interval: setInterval(() => {
            this.setState({
              position: this.state.position === this.state.banners.length ? 0 : this.state.position + 1
            });
          }, 5000)
        });
    }
     
    componentWillUnmount() {
        clearInterval(this.state.interval);
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
            <Slideshow
            dataSource={this.state.banners}
            position={this.state.position}
            onPositionChanged={position => this.setState({ position })} />
            <Text style={[st.title,st.mt]}>Favorite</Text>            
            <List dataArray={this.state.banners} horizontal={true} renderRow={(item)=>
                <ListItem thumbnail style={{marginTop: -20,}}>
                    <Body>
                        <Thumbnail source={{uri: item.url}} />
                        <Text>{item.title}</Text> 
                    </Body>               
                </ListItem>}>                
            </List>
            <Text style={[st.title,st.mt]}>All</Text>
            <List dataArray={this.state.banners} horizontal={false}
            renderRow={(item)=>
                <ListItem thumbnail onPress={()=>this.goToDetails()}>
                    <Left>
                        <Thumbnail square source={{uri: item.url}}/>
                    </Left>                  
                    <Body>
                        <Text>{item.title}</Text>
                        <Text style={st.genre}>{item.genre}</Text>
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
                </ListItem>}>                
            </List>
          
        </Container>            
      
        );
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