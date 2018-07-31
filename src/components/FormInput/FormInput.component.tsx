import { Text, View, TextInput } from "react-native"
import  styles  from "./style"
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export interface formInputProps {
  label: string,
  onValueChange: (value: any) => void
  value?: string,
  IconSize?: number,
  IconColor?: string
  IconName?: string
}

const FormInput = (props: formInputProps) => {

  const name = props.IconName ? props.IconName : 'filing';
  const size = props.IconSize ? props.IconSize : 20;
  const color = props.IconColor ? props.IconColor : 'black';

  return (
    <View style={styles.container}>
      <Text style={styles.Name}>{props.label}</Text>
      <View style={styles.Icon}>
        <Ionicons name={name} size={size} color={color} />
        <TextInput value={props.value} style={styles.Input} onChangeText={props.onValueChange} {...props} />
      </View>
    </View>

  );
}
export default FormInput;



