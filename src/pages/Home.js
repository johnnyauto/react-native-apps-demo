
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import Loading from '../components/Loading';

export default class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      animating: true
    }
  }

    closeActivityIndicator(){
      setTimeout(() => {
        this.setState({animating: false});
      }, 3000);
    }

    componentDidMount(){
      this.closeActivityIndicator();
    }

    render() {
    return (
      <View style={styles.container}>
      <Loading animating={this.state.animating}/>
        <Text style={styles.welcome}>
            Home page!
          </Text>
          <Text style={styles.instructions}>
            This is  Homepage.
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