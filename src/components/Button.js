import React, { Component } from 'react'
import { Button as CustomButton, Text } from 'native-base'

export default class Button extends Component {

  handleButton(){
    this.props.onHandleButton()
  }

  render() {
    return (
      <CustomButton block rounded onPress={() => this.handleButton()}>
        <Text> {this.props.title} </Text>
      </CustomButton>
    )
  }
}