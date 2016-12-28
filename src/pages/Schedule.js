
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Tabs from 'react-native-tabs';

export default class Schedule extends Component{

  constructor(props){
    super(props);
    this.state={page: 'second'};
  }
    render() {
    return (
      <View style={styles.container}>
         <Tabs
          selectedStyle={{color:'red'}} onSelect={(el) => this.setState({page: el.props.name})}>
          <Text name="first">First</Text>
          <Text name="second">Second</Text>
          <Text name="third">Third</Text>
        </Tabs>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          Selected page: {this.state.page}
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  button:{
    position: 'absolute',
    top: 10,
    padding: 10,
  }
})