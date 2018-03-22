/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid
} from 'react-native';
import Camera from 'react-native-camera';


type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
   super(props);
    this.state = {
        barcode: ''
        }
  }

 onBarCodeRead = (e) => this.setState({barcode: e.data},  () => checkBarCode(e.data)); 
 

 render () {
 return (
        <View style={styles.container}>
          <Camera
             style={styles.preview}
             onBarCodeRead={this.onBarCodeRead}
             ref={cam => this.camera = cam}
             aspect={Camera.constants.Aspect.fill}
             >
             <Text 
             style={{
               backgroundColor: 'white'
               }}>{this.state.barcode}
               </Text>
          </Camera>
          </View>
          )
 }
}

function checkBarCode(barcode) {
    
    var allupc = getBarcode();
    console.log(typeof allupc);
    console.log(typeof barcode);
    
    if (allupc.includes(barcode)) {
      console.log("Found");
    } 
    
    else {
      console.log("Not found");
    }   
}


async function getBarcode() {
  
  try {   
    var allupc = ["9780199861224"];
    return allupc;    
  } 
  catch (error) {
    console.error(error);
  }
}
/*
    let response = await fetch(
      'https://facebook.github.io/react-native/upc.json' //to add git link
    );
    let responseJson = await response.json();
    return responseJson.upc ;
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});