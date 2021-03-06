
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';


export default class Button extends Component{
  handlePress(e){
    if(this.props.onPress){
      this.props.onPress(e);
    }
  }

  render(){
    return(
      <TouchableOpacity
      onPress={this.handlePress.bind(this)}
        style={this.props.style}
        >
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}
