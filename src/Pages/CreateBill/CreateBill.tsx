import React from 'react'
import View from "../../components/View/View.Component"
import ToolbarAndroid from "../../components/ToolBarAndroid/ToolbarAndroid.component"
import { ScrollView, StatusBar, ActivityIndicator } from "react-native";
import FormInput from "../../components/formInput/formInput.component"
import FormPicker from "../../components/formPicker/formPicker.component"
//import Budget from "../../components/Budget/index.component"
import InputLabel from "../../components/InputLabel/index.component"
import { Mutation, graphql } from "react-apollo";
import { Button } from "react-native"
import { Mutationquery } from "./query.graphql"
import { withRouter } from 'react-router-native';
import { query } from "../BillListing/query.graphql"
import { Formik } from 'formik';


export interface Props {
	mutate: any,
	history: any,
	loading: any,
	Name: string,
	Site: string,
	Asset: string,
	month: string,
	budget: string,
	unitRate: string

}
class CreatBill extends React.Component<Props, {}> {


	constructor(props: Props) {

		super(props);
		this.state = {
			BillName: '',
			SiteName: '',
			month: '',
			UnitRate: 0,
			Budget: 0,
			BudgetListCounter: 0,
			BudgetList: [],
			AssetName: '',

			AssetItems: [
				{ label: 'AC', value: 'AC' },
				{ label: 'BULB', value: 'BULB' },
				{ label: 'FAN', value: 'FAN' },
			],
			SiteItems: [
				{ label: 'Home', value: 'Home' },
				{ label: 'factory', value: 'factory' },
				{ label: 'shop', value: 'shop' },
			],

		}
	}


	render() {
		const Items = [
			{ value: 'January', label: 'January' },
			{ value: 'February', label: 'February' },
			{ value: 'March', label: 'March' },
			{ value: 'April', label: 'April' },
			{ value: 'May', label: 'May' },
			{ value: 'June', label: 'June' },
			{ value: 'July', label: 'July' },
			{ value: 'August', label: 'August' },
			{ value: 'September', label: 'September' },
			{ value: 'October', label: 'October' },
			{ value: 'November', label: 'November' },
			{ value: 'December', label: 'December' }
		];

		const AssetItems = [
			{ label: 'AC', value: 'AC' },
			{ label: 'BULB', value: 'BULB' },
			{ label: 'FAN', value: 'FAN' },
		];
		const SiteItems = [
			{ label: 'Home', value: 'Home' },
			{ label: 'factory', value: 'factory' },
			{ label: 'shop', value: 'shop' }
		];
		return (
			<ScrollView>

				<StatusBar barStyle="dark-content" hidden={false} />

				<ToolbarAndroid
					title="Create"
					BackButton={true}
				/>

				<Formik
					initialValues={{ Name: this.props.Name, Site: this.props.Site, Asset: this.props.Asset, month: this.props.month, budget: this.props.budget, unitRate: this.props.unitRate }}
					onSubmit={values =>

						this.props.mutate({
							variables: {
								name: values.Name,
								budget: values.budget,
								site: values.Site,
								asset: values.Asset,
								unitrate: values.unitRate,
								month: values.month
							},
							refetchQueries: [
								{ query: query }
							]

						}).then(() => {

							if (this.props.loading == true) {
								<ActivityIndicator />
							}
							this.props.history.push('/listing');
						})

					}>

					{({ handleChange, handleSubmit, values }) => (

						<View style={{ display: 'flex', flexDirection: 'column', padding: 5 }}>
							<FormInput value={values.Name} label="BillName" onValueChange={handleChange('Name')} />
							<FormPicker handleChange={handleChange('Site')} label="Select Site" Items={SiteItems} value={values.Site} />
							<FormPicker handleChange={handleChange('Asset')} label="Select Device" Items={AssetItems} value={values.Asset} />
							<FormPicker value={values.month} label="Select Month" handleChange={handleChange('month')} Items={Items} />
							<InputLabel keyboardType='numeric' value={values.unitRate} onChangeText={handleChange('unitRate')} label="Unit Rate" />
							<InputLabel keyboardType='numeric' value={values.budget} onChangeText={handleChange('budget')} label="Budget" />
							<Button onPress={handleSubmit} title="Save" />
						</View>
					)}
				</Formik>

			</ScrollView>

		);
	}
}
export default graphql(Mutationquery)(withRouter(CreatBill))


