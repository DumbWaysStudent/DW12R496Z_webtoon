import React, { Component } from 'react';
import { StyleSheet,Alert } from 'react-native';
import { Container, Input, Button, Text, View,Item, Label, Icon } from 'native-base';
import { StackActions, NavigationActions } from 'react-navigation'


export default class Home extends Component {
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
    heandleLogin(){
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(!reg.test(this.state.email)){
            Alert.alert('Please enter a valid email!')
        }else{
            if(this.state.email == 'admin@admin.com' && this.state.password == 'admin'){
                Alert.alert('Udah sukses!');
                this.props.navigation.navigate('ForYou')
            }else{
                Alert.alert('Username / Password salah!')
            }
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