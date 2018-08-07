import { Text, View, TextInput } from "react-native"
import styles from "./style"
import React from 'react'
import { Ionicons } from 'expo__vector-icons'

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

	IconSize: number,

  /**
	 * props for  Icon color
	 * 
	 */

	IconColor: string

  /**
	 * props for  IconName
	 * 
	 */

	IconName: string

}

const FormInput = (props: formInputProps) => {
	const { IconName, label, IconSize, IconColor, onValueChange, value } = props;
	return (
		<View style={styles.container}>
			<Text style={styles.label} >
				{label}
			</Text>
			<View style={styles.containers} >
				<View>
					<Ionicons
						name={IconName}
						size={IconSize}
						color={IconColor}
					/>
				</View>
				<TextInput
					value={value}
					style={styles.Input}
					onChangeText={onValueChange}
					{...props}
				/>
			</View>
		</View>
	);
}
export default FormInput;



