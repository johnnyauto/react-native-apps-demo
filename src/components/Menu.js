import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

const uri = 'https://pickaface.net/gallery/avatar/48611139_161206_1430_quxoo90.png';

export default class Menu extends Component{
    render(){
        return(
            <ScrollView scrollsToTop={false} style={styles.menu}>
                <View style={styles.avatarContainer}>
                <Image style={styles.avatar} source={{uri,}}/>
                <Text style={styles.name}>Welcome Hoang!</Text>
                </View>
                <TouchableOpacity  underlayColor = "red" onPress={() => this.props.onItemSelected('Home')}>
                    <Text style={styles.item}>Home</Text>
                </TouchableOpacity> 
                 <TouchableOpacity  onPress={() => this.props.onItemSelected('Contact')}>
                    <Text style={styles.item}>Contact</Text>
                </TouchableOpacity> 
                 <TouchableOpacity  onPress={() => this.props.onItemSelected('Customer')}>
                    <Text style={styles.item}>Customer</Text>
                </TouchableOpacity> 
                 <TouchableOpacity  onPress={() => this.props.onItemSelected('Schedule')}>
                    <Text style={styles.item}>Schedule</Text>
                </TouchableOpacity> 
                 <TouchableOpacity  onPress={() => this.props.onItemSelected('About')}>
                    <Text style={styles.item}>Async Storage</Text>
                </TouchableOpacity> 
                 <TouchableOpacity  onPress={() => this.props.onItemSelected('Map')}>
                    <Text style={styles.item}>Map View</Text>
                </TouchableOpacity> 
            </ScrollView>
        );
    }
}


const window = Dimensions.get('window');
const styles =StyleSheet.create({
    item: {
        fontSize: 14,
        fontWeight: '500',
        paddingTop: 5,
    }, 
    menu:{
        flex: 1,
        width: window.width,
        height: window.height,
        backgroundColor: 'white',
        padding: 20,
    },
    avatarContainer:{
        marginTop:20,
        marginBottom: 20
    },
    avatar:{
        width: 48,
        height: 48,
        borderRadius: 24,
        flex: 1
    },
    name: {
       position: 'absolute',
       left: 70,
       top: 20     
    }
})