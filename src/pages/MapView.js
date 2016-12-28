
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  
} from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends Component{
    constructor(props){
      super(props);
      this.state = {
            region: {
          latitude: 10.782780,
          longitude: 106.671408,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        },
        markers: [
          {
            coordinate: {
              latitude: 10.782780, longitude: 106.671408
            }, 
            title: 'test 01',
            description: 'descript 01'
          },
          {
            coordinate: {
              latitude: 10.781900, longitude: 106.673964
            }, 
            title: 'test 02',
            description: 'descript 02'
          },
          {
            coordinate: {
              latitude: 10.784376, longitude: 106.670585
            }, 
            title: 'test 03',
            description: 'descript 03'
          }
        ],
        
      }
    }

 
    render() {
    return (
      <View style={styles.container02}>
              <MapView style={styles.map}
                  initialRegion={this.state.region}>
                  {this.state.markers.map( marker => (
                    <MapView.Marker
                      coordinate={marker.coordinate}
                      title={marker.title}
                      description={marker.description}
                      key={marker.coordinate.latitude}
                       />))
                    }
              </MapView>
        </View>   
    );
  }
}


const styles = StyleSheet.create({
  container02: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

})