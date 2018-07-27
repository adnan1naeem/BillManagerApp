import { TextInput,StyleSheet } from 'react-native'
import React from 'react'


const TextInputComponent = (props:any) => {

  return <TextInput   style={props.style}  {...props} />;
}

export default TextInputComponent;



