import View from "../View/View.Component"
import TextInput from "../TextInput/TextInput.component"
import {Text} from "react-native"
import  {styles} from"./style"
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export interface formInputProps{

  label:string,
  onValueChange:(value:any)=>void
value?:any
}

const FormInput = (props: formInputProps) => {

  return (
    <View  style={styles.container}>
      <Text style={styles.Name}>{props.label}</Text>
      <View style={styles.Icon}>
        <Ionicons name="md-checkmark-circle" size={20} color="black" />
        <TextInput value={props.value} style={styles.Input}  onChangeText={props.onValueChange} {...props} />
      </View>
    </View>

  );
}
export default FormInput;



