import React from 'react'
import AppBar from "../../components/AppBar/AppBar.component"
import { ScrollView, StatusBar, ActivityIndicator } from "react-native";
import FormInput from "../../components/FormInput/FormInput.component"
import FormPicker from "../../components/FormPicker/FormPicker.component"
import InputLabel from "../../components/InputLabel/InputLabel.component"
import { graphql, Mutation } from "react-apollo";
import { Button } from "react-native"
import { Mutationquery } from "./query.graphql"
import { withRouter } from 'react-router-native';
import { query } from "../BillListing/query.graphql"
import { Formik } from 'formik';
import { View, Text } from 'react-native';
import { styles } from "./style"
import { AssetList, DateList, SiteList } from "./MockData";
import * as yup from 'yup'
export interface RouterProps {
	push: (route: string) => void
}


export interface Props {

  /**
	 *  history props for routing 
	 * 
	 */
	history: RouterProps,


  /**
	 *  loading props  check for data posting 
	 * 
	 */

	loading: boolean,

	/**
	 *  Name props  check for adding BillName
	 * 
	 */

	Name: string,



	/**
	 *  Name props  check for adding SiteName for Bill
	 * 
	 */

	Site: string,

	/**
	 *  Name props  check for adding AssetName for Bill
	 * 
	 */

	Asset: string,


	/**
	 *  Name props  check for adding AssetName for Bill
	 * 
	 */

	month: string,

	/**
	 *  budget props  check for adding budget for Bill
	 * 
	 */

	budget: string,
	/**
	 *  unitRate props  check for adding unitRate for Bill
	 * 
	 */


	unitRate: string

}
const CreateBill = (props: Props) => {


	const validationSchema = yup.object().shape({
		Name: yup.string()
			.matches(/^[A-Z]+$/i, "Invalid Name")
			.required('Name is required!'),
		Site: yup.string()
			.matches(/^[A-Z]+$/i, "Invalid Name")
			.required('Site Name is required!'),
		Asset: yup.string()
			.matches(/^[A-Z]+$/i, "Invalid Name")
			.required('Asset Name is required!'),
		month: yup.string()
			.matches(/^[A-Z]+$/i, "Invalid Name")
			.required('month  is required!'),
		budget: yup.number()
			.positive("Invalid Budget")
			.required('budget is required!'),
		unitRate: yup.number()
			.positive("Invalid Budget")
			.required('unitRate is required!')

	})
	return (
		<ScrollView>

			<StatusBar
				barStyle="dark-content"
				hidden={false}
			/>

			<AppBar
				title="Create"
				BackButton={true}
			/>
			<Mutation mutation={Mutationquery}>
				{(mutate) => (
					<Formik
						initialValues={{ Name: props.Name, Site: props.Site, Asset: props.Asset, month: props.month, budget: props.budget, unitRate: props.unitRate }}
						validationSchema={validationSchema}
						onSubmit={values =>

							mutate({
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

								if (props.loading == true) {
									<ActivityIndicator />
								}
								props.history.push('/listing');
							})

						}>

						{({ handleChange, handleSubmit, values, errors }) => (

							<View style={styles.Container}>
								<FormInput
									IconColor="green"
									IconSize={22}
									IconName="md-checkmark-circle"
									value={values.Name}
									label="BillName"
									onValueChange={handleChange('Name')}
								/>

								<Text style={styles.error}>{errors.Name}</Text>
								<FormPicker
									IconSize={22}
									IconName="md-checkmark-circle"
									IconColor="green"
									handleChange={handleChange('Site')}
									label="Select Site" Items={SiteList}
									value={values.Site}
								/>
								<Text style={styles.error}>{errors.Site}</Text>

								<FormPicker
									IconSize={22}
									IconName="md-checkmark-circle"
									IconColor="green"
									handleChange={handleChange('Asset')}
									label="Select Device"
									Items={AssetList}
									value={values.Asset}
								/>
								<Text style={styles.error}>{errors.Asset}</Text>

								<FormPicker
									IconSize={22}
									IconName="md-checkmark-circle"
									IconColor="green"
									value={values.month}
									label="Select Month"
									handleChange={handleChange('month')}
									Items={DateList}
								/>
								<Text style={styles.error}>{errors.month}</Text>

								<InputLabel
									keyboardType='numeric'
									value={values.unitRate}
									onChangeText={handleChange('unitRate')}
									label="Unit Rate"
								/>
								<Text style={styles.error}>{errors.unitRate}</Text>

								<InputLabel
									keyboardType='numeric'
									value={values.budget}
									onChangeText={handleChange('budget')}
									label="Budget"
								/>
								<Text style={styles.error}>{errors.budget}</Text>

								<Button
									onPress={handleSubmit}
									title="Save"
								/>
							</View>
						)}
					</Formik>
				)}
			</Mutation>

		</ScrollView>

	);
}

export default withRouter(CreateBill);