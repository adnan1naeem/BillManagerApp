
import { Text, View, TextInput } from "react-native"
import styles from "./style"
import React from 'react'

export interface formInputProps {


  /**
	 * label props for adding label in component 
	 * 
	 */
  label: string,


  /**
	 * value props for adding value of input 
	 * 
	 */
  value?: any,


  /**
	 * handler  props for adding values in Input 
	 * 
	 */
  onChangeText: (value: any) => void

}

const InputLabelComponent = (props: formInputProps) => {

  return (
    <View style={styles.container}>
      <Text style={styles.Name}>{props.label}</Text>
      <TextInput style={styles.Input} onChangeText={props.onChangeText} value={props.value}  {...props} />
    </View>

  );
}
export default InputLabelComponent;



