import { Text, View, TextInput } from "react-native"
import styles from "./style"
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export interface formInputProps {

  /**
	 * Adding label for the component
	 * 
	 */
  label: string,

  /**
	 * Handler for changing Inputvalues
	 * 
	 */
  onValueChange: (value: any) => void


  /**
	 * props for  input values
	 * 
	 */
  value?: string,

  /**
	 * props for  Icon Size
	 * 
	 */

  IconSize?: number,

  /**
	 * props for  Icon color
	 * 
	 */

  IconColor?: string

  /**
	 * props for  IconName
	 * 
	 */

  IconName?: string

}

const FormInput = (props: formInputProps) => {

  const name = props.IconName ? props.IconName : 'md-checkmark-circle';
  const size = props.IconSize ? props.IconSize : 20;
  const color = props.IconColor ? props.IconColor : 'black';

  return (
    <View styles={styles.container}>
      <Text style={styles.label} >{props.label}</Text>
      <View style={styles.containers} >
        <Ionicons style={styles.Icon} name="md-checkmark-circle" size={22} color="green" />
        <TextInput value={props.value} style={styles.Input} onChangeText={props.onValueChange} {...props} />
      </View>
    </View>

  );
}
export default FormInput as React.ComponentType<any>;



