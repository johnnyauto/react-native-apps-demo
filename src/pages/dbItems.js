
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
const Realm = require('realm');


export default class DBItems extends Component{
  constructor(props){
    super(props);
    this.state = {
      animating: true
    }
  }
    componentDidMount(){
      // this.closeActivityIndicator();
    }

    render() {
    let realm = new Realm({
     schema: [{name: 'Dog', properties: {name: 'string'}}]
   });

   realm.write(() => {
     realm.create('Dog', {name: 'Rex'});
   });

    return (
     <View style={styles.container}>
       <Text style={styles.welcome}>
         Count of Dogs in Realm: {realm.objects('Dog').length}
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