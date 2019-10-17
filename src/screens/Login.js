import React, { Component } from 'react';
import { StyleSheet,Alert } from 'react-native';
import { Container, Input, Button, Text, View,Item, Label, Icon } from 'native-base';

import AuthService from './../navigator/AuthService'
import axios from 'axios'
import env from './../../env'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            icon: 'eye-off',
            type: true,
        };
    }    
    _fill(){
        this.setState(state=>({
            email:'admin@gmail.com',
            password: '123',
        }))
    }
    _changeShowPassoword(){
        this.setState(prevState =>({
            icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
            type: !prevState.type
        }));
    }
    heandleLogin = async() => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(!reg.test(this.state.email)){
            Alert.alert('Please enter a valid email!')
        }else{
            const auth = new (AuthService)
            const url = `${env.apiUrl}/login`            
                await axios({
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    data: {
                        email: this.state.email,
                        password: this.state.password                   
                    },
                    url,
                }).then(async result=>{
                    if (result.data.error) {
                        alert('username / password salah!')
                    }else{
                        await auth.save(result.data.data)
                        this.props.navigation.navigate('ForYou')                      
                    }
                }).catch(error=>{
                    if(typeof error.response.data.msg !== "undefined"){
                        alert(error.response.data.msg);
                    }
                });

        }
    }
  render() {
    return (
      <Container>
        <View style={st.textInfo}>
            <View>
                <Text style={[st.header,st.center]}>LOG IN</Text>
                <Text style={st.center}>Login with your Account Weebtoon</Text>
            </View>
            <Item floatingLabel style={st.mt}>
                <Label>Email</Label>
                <Input
                value={this.state.email}
                autoCapitalize='none'
                keyboardType='email-address'
                onChangeText={(text) => this.setState({ email: text })}
                />
            </Item>
            <Item floatingLabel style={st.mt}>
                <Label>Password</Label>
                <Icon 
                name={this.state.icon}
                onPress={()=> this._changeShowPassoword()}
                />
                <Input
                value={this.state.password}
                onChangeText={(text) => this.setState({ password: text })}
                secureTextEntry={this.state.type}
                />
            </Item>
            <Button block rounded style={st.mt}
            onPress={()=>this.heandleLogin()}
            ><Text>Login</Text></Button>
            <View>
                <Text style={[st.mt,st.center]}>
                    Fill the email and password 
                    <Text style={st.linkHere}
                        onPress={()=>this._fill()}
                    > here!
                    </Text>
                </Text>
                <Text style={[st.mt,st.center]}>
                    Don't have an account, register
                    <Text style={st.linkHere}
                        onPress={()=>this.props.navigation.navigate('Register')}
                    > here!
                    </Text>
                    
                </Text>                
            </View>            
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
    },
    linkHere:{
        color:'blue',
    }
})