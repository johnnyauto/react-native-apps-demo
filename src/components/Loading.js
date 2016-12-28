
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

export default class Loading extends Component{

    render() {
    return (  
      <View style={styles.container}>
        <ActivityIndicator animating={this.props.animating}
        style={styles.activityIndicator} size="large" />
     </View>
    );
  }
}


const styles = StyleSheet.create({
 activityIndicator: {
    //  flex: 1,
     justifyContent:'center',
     alignItems: 'center',
     height: 80
 },
 container: {
     marginTop: 100
 }
});