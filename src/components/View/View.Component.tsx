import { View } from 'react-native'
import React from 'react'
//import { AppLoading, /* Asset, Font, */ Constants } from 'expo'
// import Icon from 'react-native-vector-icons/MaterialIcons'
//import { MaterialIcons } from '@expo/vector-icons'
//import { version as reactNativeVersion } from './../node_modules/react-native/package.json'

export interface props {
  style?:object
}

const ViewComponent = (props:any) => {

  return <View  {...props} />;
}

export default ViewComponent;



