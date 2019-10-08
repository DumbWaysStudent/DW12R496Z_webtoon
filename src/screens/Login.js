import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right,Input, Button, Icon, Title, Text, View,Item, Label } from 'native-base';
export default class Home extends Component {
  render() {
    return (
      <Container>
        <View style={st.textInfo}>
            <View>
                <Text style={[st.header,st.center]}>Log In</Text>
                <Text style={st.center}>Login with your Account Weebtoon</Text>
            </View>
            <Item floatingLabel style={st.mt}>
                <Label>Username</Label>
                <Input placeholder='Regular Textbox' />
            </Item>
            <Item floatingLabel style={st.mt}>
                <Label>Password</Label>
                <Input placeholder='Regular Textbox' />
            </Item>
            <Button rounded style={st.mt}><Text style={st.center}>Login</Text></Button>
        </View>                
      </Container>
    );
  }
}

const st = StyleSheet.create({
    textInfo:{
        margin: 25,
    },
    header:{
        marginTop:80,
        fontSize: 35,
    },
    center:{
        textAlign:'center',
    },
    mt:{
        marginTop: 20,
    }
})