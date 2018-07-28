import View from "../View/View.Component"
import TextInput from "../TextInput/TextInput.component"
import { Text } from "react-native"
import { styles } from "./style"
import React from 'react'

export interface formInputProps {

  label: string,
  value?:any,
  onChangeText:(value:any)=>void

}

const InputLabelComponent = (props: formInputProps) => {

  return (
    <View style={styles.container}>
      <Text style={styles.Name}>{props.label}</Text>
      <TextInput style={styles.Input}  onChangeText={props.onChangeText}   value={props.value}  {...props} />
    </View>

  );
}
export default InputLabelComponent;



