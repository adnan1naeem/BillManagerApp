import { Text, Picker, View } from "react-native"
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { styles } from "./style"
export interface Pickerprops {

  Items: any[],
  handleChange?: (event: any) => void
  value?: string,
  label: string,
  IconSize?: number,
  IconColor?: string
  IconName?: string
}


const FormPicker = (props: Pickerprops) => {

  const name = props.IconName ? props.IconName : 'filing';
  const size = props.IconSize ? props.IconSize : 20;
  const color = props.IconColor ? props.IconColor : 'black';

  return (
    <View style={styles.container}>
      <Text style={styles.Name}>{props.label}</Text>
      <View style={styles.IconContainer}>
        <Ionicons style={styles.Iconstyles} name={name} size={size} color={color} />

        <Picker
          selectedValue={props.value}
          style={styles.Picker}
          onValueChange={props.handleChange}
        >
          {props.Items.map((Data: any, i: any) =>

            <Picker.Item key={i} label={Data.label} value={Data.value} />
          )}
        </Picker>
      </View>
    </View>
  );
}
export default FormPicker;



