import React, { Component } from 'react';
import { Share,Image,Dimensions,StyleSheet,FlatList } from 'react-native';
import { View, Text,Container, Header, Button,Left,Right,Icon, Title, Body,List,ListItem, Thumbnail } from 'native-base';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
        banners :[
            { id: 3,
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTef8NZWFEFxBJJ611aEfkSCGVh5_P-K8PXvfBfmY1VyFlgsaDD',
                date: '20 Januari 2018',
            },{ id: 2,
                url: 'https://images.everyeye.it/img-notizie/one-piece-nell-ultima-intervista-oda-ammette-risvolti-imprevisti-v3-379791.jpg',
                date:'10 Januari 2018',
            },{ id: 1,
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgOoBY96QpFDXqBdwGnlgR8UCsvaa1Ijv4KUG4rS12DPanSz3_',
                date:'1 Januari 2018',
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
                  <Title>One Piece</Title>
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
          source={{uri:'https://media.comicbook.com/2019/07/my-hero-academia-150-152-image-pv-1178294.jpeg?auto=webp&width=696&height=395&crop=696:395,smart'}}/>
                
        <FlatList
            data={this.state.banners}
            renderItem={({item})=>
                <View>
                    <ListItem thumbnail onPress={()=>this.goToDetails()}>
                        <Left>
                            <Thumbnail square source={{uri: item.url}}/>
                        </Left>
                        <Body>
                            <Text>Esp. {item.id}</Text>
                            <Text style={st.date}>{item.date}</Text>
                        </Body>
                    </ListItem>
                </View>
            }
            keyExtractor={(item,index)=>index.toString()}
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
    }
})