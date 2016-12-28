
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';

export default class Home extends Component{
    constructor(props){
        super(props);
        // this.goToDetail = this.goToDetail.bind(this); // onPress automatically run ?
    }

    goToDetail(){
        // Actions.contactDetail(...this.props);
         Actions.contactDetail({
             firstName: this.props.firstName,
            lastName: this.props.lastName,
            jobTitle:this.props.jobTitle,
            avatar: this.props.avatar,
            description: this.props.description,
            jobType: this.props.jobType
         });
    }

    render() {
    return (
     <View style={{flex: 1}}>
        <View >
            <TouchableOpacity style={styles.container} onPress={() => this.goToDetail()} >
                <Image source={{uri: this.props.avatar}} style={{width: 35, height: 35, borderRadius: 20}}/>
                <Text style={{padding:5}}>{`${this.props.firstName} ${this.props.lastName}`}</Text>
            </TouchableOpacity>
        </View>
        <View>
            <Text style={{padding: 10}}>Job Title: {this.props.jobTitle}</Text>
        </View>
  </View>
          
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

