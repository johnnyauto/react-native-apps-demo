
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Picker, 
  AsyncStorage
} from 'react-native';

const COLORS = ['red', 'orange', 'yellow', 'green', 'blue'];
const STORAGE_KEY = '@AsyncStorageExample:key';

export default class About extends Component{

  constructor(props){
    super(props);
    this.state={
     selectedValue: COLORS[0],
     messages: []
    }
  }

  componentDidMount(){
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem(STORAGE_KEY);
    try {
      if(value != null){
        this.setState({selectedValue: value});
        this._appendMessage('-This recovered from disk ' + selectedValue);
      }else{
        this._appendMessage('-Initialize with no selection on disk');
      }
    } catch (error) {
        this._appendMessage('-AsyncStorage error:' + error.message)
    }
  }

  _appendMessage = (message) => {
    this.setState({messages: this.state.messages.concat(message)});
  }

  _onValueChange = async (selectedValue) => {
    this.setState({selectedValue: selectedValue});
    try {
      await AsyncStorage.setItem(STORAGE_KEY, selectedValue);
      this._appendMessage('-Saved selection to disk ' + selectedValue);
    } catch (error) {
      this._appendMessage('-AsyncStorage Error: ' +error.message);
    }
  };

  _removeStorage = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
       this._appendMessage('Selection removed from disk.');
    } catch (error) {
      this._appendMessage('-AsyncStorage error: ' + error.message);
    }
  }

    render() {
      var color = this.state.selectedValue;
    return (
      <View style={styles.container}>
            <Picker
              selectedValue={color}
              onValueChange={this._onValueChange}>
              {COLORS.map((value) => (
                <Picker.Item 
                label={value} 
                value={value} 
                key={value}/>
              ))
              }
        </Picker>
        <Text>
          {'Selected: '}
          <Text style={{color}}>{this.state.color}</Text>
        </Text>
        <View>
          <Text style={{color:'red', marginTop: 10}} onPress={this._removeStorage}>Press here to remove storage</Text>
         </View>
         <View>
            <Text style={{marginTop: 10}}>Message: {this.state.messages.map((item)=> (
              <Text key={item}>{item}</Text>
            ))} </Text>
          </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    marginTop: 80
  },
  button:{
    position: 'absolute',
    top: 10,
    padding: 10,
  }
})