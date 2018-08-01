import { Text, Picker, View } from "react-native"
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { styles } from "./style"
export interface Pickerprops {

  /**
	 * props for adding PickerItems in Picker
	 * 
	 */
  Items: any[],


  /**
	 * Handler props for selecting values in Picker
	 * 
	 */
  handleChange: (event: any) => void


  /**
	 * value props for adding selected values in Picker
	 * 
	 */
  value?: string,


  /**
	 * label props for adding label for Picker
	 * 
	 */
  label: string,

  /**
	 * IconSize props for adding Icon Size 
	 * 
	 */
  IconSize: number,


  /**
	 * IconColor props for adding Icon Color 
	 * 
	 */
  IconColor: string


  /**
	 * IconName props for adding IconName 
	 * 
	 */
  IconName: string
}


const FormPicker = (props: Pickerprops) => {


  return (
    <View style={styles.container}>
      <Text style={styles.Name}>{props.label}</Text>
      <View style={styles.IconContainer}>
        <Ionicons style={styles.Icon} name={props.IconName} size={props.IconSize} color={props.IconColor} />

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



