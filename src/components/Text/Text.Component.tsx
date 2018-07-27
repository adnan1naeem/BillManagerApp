import { Text } from 'react-native'
import React from 'react'

const TextComponent = (props:any) => {

  return <Text style={props.style}  {...props} ></Text>;
}

export default TextComponent;



