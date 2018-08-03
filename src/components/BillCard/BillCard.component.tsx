import React from 'react'
import { View, Text } from "react-native";
import { style } from "./style"

export interface BillCardProperties {
	/**
	 * Name of the Bill 
	 * 
	 */
	name: string;

	/**
	 * month of the Bill
	 */

	month: string;
  /**
	 * budget of the Bill
	 */
	budget: number;

	/**
	 * styles of the BillCard
	 */

	style?: object;
}

const BillCard = (props: BillCardProperties) => {

	const { name, month, budget } = props;

	return (
		<View style={style.container}>
			<View style={style.topView}>
				<Text style={style.consumedLabel}>
					Total Consumed
				</Text>
				<Text
					numberOfLines={1}
					style={style.budget}
				>
					{budget ? 'Rs.' : ''} {budget}
				</Text>
			</View>
			<View style={style.body}>
				<Text style={style.name}>
					{name}
				</Text>
				<Text numberOfLines={1} style={style.month}>
					{month}
				</Text>
			</View>
		</View>
	);
};

export default BillCard
