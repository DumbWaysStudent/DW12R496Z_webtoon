import React, { Component } from 'react';
import { StyleSheet,Alert } from 'react-native';
import { Container, Input, Button, Text, View,Item, Label, Icon } from 'native-base';

import AuthService from './../navigator/AuthService'
import axios from 'axios'
import env from './../../env'

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            icon: 'eye-off',
            type: true,
        };
    }    
    _fill(){
        this.setState(state=>({
            email:'admin@admin.com',
            password: 'admin',
        }))
    }
    _changeShowPassoword(){
        this.setState(prevState =>({
            icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
            type: !prevState.type
        }));
    }

    heandleRegister = async () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(!reg.test(this.state.email)){
            Alert.alert('Please enter a valid email!')
        }else{
            const auth = new (AuthService)
            const url = `${env.apiUrl}/register`
            await axios({
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                data: {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password                   
                },
                url,
            }).then(async result=>{
                await auth.save(result.data.data)
                this.props.navigation.navigate('ForYou')                  
            })
        }
    }
  render() {
    return (
      <Container>
        <View style={st.textInfo}>
            <View>
                <Text style={[st.header,st.center]}>SIGN UP</Text>
                <Text style={st.center}>Creater your Weebtoon Account</Text>
            </View>
            <Item floatingLabel style={st.mt}>
                <Label>Name</Label>
                <Input
                value={this.state.name}
                onChangeText={(name) => this.setState({ name })}
                />
            </Item>            
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
            onPress={()=>this.heandleRegister()}
            ><Text>Sign Up</Text></Button>
            <View>
                <Text style={[st.mt,st.center]}>
                    You have an account, login
                    <Text style={st.linkHere}
                        onPress={()=>this.props.navigation.navigate('Login')}
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
        marginTop:30,
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