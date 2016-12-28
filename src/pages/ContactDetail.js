
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';
import faker from 'faker'
import Row from '.././components/Row';
import {Actions} from 'react-native-router-flux';

export default class ContactDetail extends Component{

   constructor(props){
    super(props);
  }

  render() {
    return (
    <View style={styles.container}>
        <View>
            <Image source={{uri: this.props.avatar}} style={{width: 35, height: 35, borderRadius: 20}}/>
            <Text style={{padding:5}}>{`${this.props.firstName} ${this.props.lastName}`}</Text>
        </View>
        <View style={styles.instructions}>
            <Text>Job Title: {this.props.jobTitle}</Text>
            <Text>Description : {this.props.description}</Text>
            <Text>jobType: {this.props.jobType}</Text>
            <Button title="Back" onPress={() => Actions.pop()}/>
        </View>
  </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    flexDirection: 'row',
    // backgroundColor: '#F5FCFF',
    padding: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    marginBottom: 5,
    padding: 10,
  },
});
