import { Text,View,TextInput } from "react-native"
import { styles } from "./style"
import React from 'react'

export interface formInputProps {

  label: string,
  value:string,
  onChangeText:(value:string)=>void,
}

const InputLabelComponent = (props: formInputProps) => {

  return (
    <View style={styles.container}>
      <Text style={styles.Name}>{props.label}</Text>
      <TextInput style={styles.Input} onChangeText={props.onChangeText}   value={props.value}  {...props} />
    </View>

  );
}
export default InputLabelComponent;



