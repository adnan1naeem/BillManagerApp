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
	const { IconName, label, IconSize, IconColor, handleChange, Items, value } = props;

	return (
		<View style={styles.container}>
			<Text style={styles.Name}>
				{label}
			</Text>
			<View style={styles.IconContainer}>
				<View>

					<Ionicons
						style={styles.Icon}
						name={IconName}
						size={IconSize}
						color={IconColor}
					/>
				</View>

				<Picker
					selectedValue={value}
					style={styles.Picker}
					onValueChange={handleChange}
				>
					{Items.map((Data: any, i: any) =>
						<Picker.Item
							key={i}
							label={Data.label}
							value={Data.value}
						/>
					)}
				</Picker>
			</View>
		</View>
	);
}
export default FormPicker;



