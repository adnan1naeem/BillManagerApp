import React from 'react'
import ToolbarAndroid from "../../components/AppBar/AppBar.component"
import { ScrollView, StatusBar, ActivityIndicator } from "react-native";
import FormInput from "../../components/FormInput/FormInput.component"
import FormPicker from "../../components/FormPicker/FormPicker.component"
//import Budget from "../../components/Budget/index.component"
import InputLabel from "../../components/InputLabel/InputLabel.component"
import { Mutation, graphql } from "react-apollo";
import { Button } from "react-native"
import { Mutationquery } from "./query.graphql"
import { withRouter } from 'react-router-native';
import { query } from "../BillListing/query.graphql"
import { Formik } from 'formik';
import { View } from 'react-native';
import  {styles} from  "./style"
import  {AssetList,DateList,SiteList} from "./MockData";
export interface RouterProps{
	push:(route:string)=>void
}


export interface MutationProps{
	variables:any,
}
export interface Props {
	mutate:any,
	history: RouterProps,
	loading:boolean,
	Name: string,
	Site: string,
	Asset: string,
	month: string,
	budget: string,
	unitRate: string

}
const CreatBill =(props:Props) =>  {

	return (
			<ScrollView>

				<StatusBar barStyle="dark-content" hidden={false} />

				<ToolbarAndroid
					title="Create"
					BackButton={true}
				/>

				<Formik
					initialValues={{ Name: props.Name, Site: props.Site, Asset: props.Asset, month: props.month, budget: props.budget, unitRate: props.unitRate }}
					onSubmit={values =>

						props.mutate({
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

					{({ handleChange, handleSubmit, values }) => (

						<View style={styles.Container}>
							<FormInput value={values.Name} label="BillName" onValueChange={handleChange('Name')} />
							<FormPicker handleChange={handleChange('Site')} label="Select Site" Items={SiteList} value={values.Site} />
							<FormPicker handleChange={handleChange('Asset')} label="Select Device" Items={AssetList} value={values.Asset} />
							<FormPicker value={values.month} label="Select Month" handleChange={handleChange('month')} Items={DateList} />
							<InputLabel keyboardType='numeric' value={values.unitRate} onChangeText={handleChange('unitRate')} label="Unit Rate" />
							<InputLabel keyboardType='numeric' value={values.budget} onChangeText={handleChange('budget')} label="Budget" />
							<Button onPress={handleSubmit} title="Save" />
						</View>
					)}
				</Formik>

			</ScrollView>

		);
	}

export default graphql(Mutationquery)(withRouter(CreatBill));
