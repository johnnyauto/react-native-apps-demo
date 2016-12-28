
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import {Scene, Router, Actions} from 'react-native-router-flux';

import Menu from './components/Menu';
import Button from './components/Button';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Schedule from './pages/Schedule';
import ContactDetail from './pages/ContactDetail';
import Customer from './pages/Customer';
import Map from './pages/MapView';


export default class DemoApp extends Component {
  constructor(){
    super();
    this.state ={
      isOpen: false
    };
  }

  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onMenuItemSelected = (item) => {
    console.log(item);
    switch(item){
      case 'Home':
        Actions.home();
        break;
      case 'Contact':
        Actions.contact();
        break;
      case 'Customer':
        Actions.customer();
        break;
      case 'About':
        Actions.about();
        break;
      case 'Schedule':
        Actions.schedule();
        break;
      case 'Map':
        Actions.map();
        break;
      default:
        Actions.home();
        break;
    }
    this.setState({
      isOpen: false
    });
  }

  updateMenuState(isOpen){
    this.setState({isOpen, });
  }

  render(){
    const menu = <Menu  onItemSelected={this.onMenuItemSelected} />;
    return (
      <SideMenu menu={menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenuState(isOpen)}
      >
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home" hideBackImage={true} />
          <Scene key="about" component={About} title="About" hideBackImage={true} />
          <Scene key="schedule" component={Schedule} title="Schedule" hideBackImage={true}/>
          <Scene key="contact" component={Contact} title="Contact" hideBackImage={true}/>
          <Scene key="customer" component={Customer} title="Customer" hideBackImage={true} />
          <Scene key="contactDetail" component={ContactDetail} title="Contact Detail" hideBackImage={true}/>
          <Scene key="map" component={Map} title="Map View" hideBackImage={true} initial={true}/>
        </Scene>
      </Router>
     
         <Button style={styles.button} onPress={() => this.toggle()}>
          <Image
            source={require('.././assets/menu.png')} style={{width: 32, height: 32}} />
        </Button>
      </SideMenu>
    );
  }

  // static propTypes = {
  //   onItemSelected: PropTypes.func.isRequired,
  // }
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

