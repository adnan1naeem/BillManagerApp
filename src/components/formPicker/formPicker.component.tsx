import View from "../View/View.Component"
import { Text, Picker } from "react-native"
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import {styles} from  "./style"
export interface  Pickerprops{

Items:any[],
handleChange?: (event:any)=>void
value?:string,
label:string
}


const FormPicker = (props: Pickerprops) => {

  return (
    <View style={styles.container}>
      <Text style={styles.Name}>{props.label}</Text>
      <View style={styles.IconContainer}>
        <Ionicons style={styles.Iconstyles} name="md-checkmark-circle" size={20} color="black" />

        <Picker
          selectedValue={props.value}
          style={styles.Picker}
          onValueChange={props.handleChange}
        >
          {props.Items.map((Data: any, i: any) =>

            <Picker.Item  key={i} label={Data.label} value={Data.value} />
          )}
        </Picker>
      </View>
    </View>
  );
}
export default FormPicker;



