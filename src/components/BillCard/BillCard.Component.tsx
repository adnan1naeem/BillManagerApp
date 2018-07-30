import React from 'react'
import View from "../View/View.Component";
import Text from "../Text/Text.Component";
import { style } from "./style"

export interface BillCardProperties {
	name: string,
	month: string,
	budget: number,
	Style?: any,
}

const BillCard =(props: BillCardProperties) => {

	const { name, month, budget } = props;

	return (
		<View style={style.container}>
			<View style={style.topView}>
				<View style={style.descriptionView}>
					<Text style={style.consumedLabel}>
						Total Consumed
					</Text>
					<View style={style.budgetContanier}>
						<Text style={style.budget}>
							Rs. {budget}
						</Text>
					</View>
				</View>
			</View>
			<View style={style.body}>
				<View style={style.lowerView}>
					<Text style={style.name}>
						{name}
					</Text>
					<View style={style.monthContainer}>
						<Text style={style.month}>
							{month}
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default BillCard;