
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import faker from 'faker'
// import Row from '.././components/Row';

export default class Customer extends Component{

   constructor(props){
    super(props);
    this.state={
      filter: '',
      dataSource:  ds.cloneWithRows([''])
    };

   this.rows = [];
    for(var i = 0; i < 1000; i++){
      this.rows.push(
        {
          id: i,
          firstName: faker.company.companyName(),
        });
    }
  }

  componentDidMount(){
     
  }

  render() {
    var filterText = this.state.filter;
    var filterRegex = new RegExp(String(filterText), 'i');
    var isFilterRow = function(row){
      return filterRegex.test(row.firstName);
    } 

    var dataSource = ds.cloneWithRows(this.rows.filter(isFilterRow));
    return (
        <View>
             {this._renderSearchBar()}
            <ListView
            dataSource={dataSource}
            renderRow={(rowData) => <Row {...rowData}  />}
              />
        </View>
    );
  }

  _renderSearchBar(){
      return (
          <View style={styles.searchRow}>
            <TextInput style={styles.searchTextInput}
                placeholder="Seacrh..."
                onChangeText={(text) => this.setState({
                  filter: text
                })}
            />
          </View>
      );
  }


}

 const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    

const Row = (props) => (
     <View style={{flex: 1}}>
        <View >
            <Text style={{padding:5}}>{`${props.firstName}`}</Text>
        </View>
  </View>
  );
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10
  },
  searchRow:{
      marginTop: 50,
      padding: 10,
      backgroundColor: '#eeeeee',
  },
  searchTextInput:{
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 3,
    paddingLeft: 10,
    paddingVertical: 0,
    height: 35
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