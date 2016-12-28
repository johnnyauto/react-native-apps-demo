
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';
import faker from 'faker'
import Row from '.././components/Row';

export default class Contact extends Component{

   constructor(props){
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    var rows = [];
    for(var i = 0; i < 20; i++){
      rows.push(
        {
          id: i,
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          jobTitle: faker.name.jobTitle(),
          avatar: faker.image.avatar(),
          description: faker.name.jobDescriptor(),
          jobType: faker.name.jobType()
        });
    }
    this.state = {
      dataSource: ds.cloneWithRows(rows)
    };
  }

  render() {
    return (
      <ListView style={{marginTop: 50}}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Row {...rowData}  />}
      />
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