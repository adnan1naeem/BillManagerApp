import React from 'react'
import View from "../../components/View/View.Component"
import ToolbarAndroid from "../../components/ToolBarAndroid/ToolbarAndroid.component"
import { ScrollView, ActivityIndicator } from "react-native";
import FormInput from "../../components/formInput/formInput.component"
import FormPicker from "../../components/formPicker/formPicker.component"
//import Budget from "../../components/Budget/index.component"
import InputLabel from "../../components/InputLabel/index.component"
import { Mutation, graphql } from "react-apollo";
import { Button } from "react-native"
import { Mutationquery } from "./query.graphql"
import { withRouter } from 'react-router-native';
import { query } from "../BillListing/query.graphql"
export interface State {

  BillName: string,
  AssetItems: any[],
  SiteName: string,
  AssetName: string,
  SiteItems: any[],
  month: string,
  UnitRate: number,
  Budget: number,
  BudgetListCounter: number,
  BudgetList: any,
  loader: boolean

}
export interface Props {
  mutate: any,
  history: any,
  loading: any
}
class CreatBill extends React.Component<Props, State> {


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
      loading: false,

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
    this.HandleNameChange = this.HandleNameChange.bind(this);
    this.HandleSiteChange = this.HandleSiteChange.bind(this);
    this.HandleAssetChange = this.HandleAssetChange.bind(this);
    this.HandleBudgetChange = this.HandleBudgetChange.bind(this);
    this.HandleDateChange = this.HandleDateChange.bind(this);
    this.HandleUnitRate = this.HandleUnitRate.bind(this);
    this.handleSaveBill = this.handleSaveBill.bind(this);

    // this.handleAddBudget = this.handleAddBudget.bind(this);
    // this.handleRemoveBudget = this.handleRemoveBudget.bind(this);
    //  this.handleBudgetNameChange = this.handleBudgetNameChange.bind(this);
  }

  HandleBudgetChange(value: any) {
    this.setState({ Budget: value })
  }


  HandleUnitRate(value: any) {
    this.setState({ UnitRate: value })
  }
  HandleNameChange(value: any) {
    this.setState({ BillName: value })
  }

  HandleSiteChange(value: any) {
    this.setState({ SiteName: value })
  }
  HandleAssetChange(value: any) {
    this.setState({ AssetName: value })
  }

  HandleDateChange(value: any) {
    this.setState({ month: value })
  }


  handleSaveBill() {

    this.props.mutate({
      variables: {
        name: this.state.BillName,
        budget: this.state.Budget,
        site: this.state.SiteName,
        asset: this.state.AssetName,
        unitrate: this.state.UnitRate,
        month: this.state.month
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

  }


  // handleBudgetNameChange = (idx: any) => (evt: any) => {
  //   const newShareholders = this.state.BudgetList.map((shareholder: any, sidx: any) => {
  //     if (idx !== sidx) return shareholder;
  //     return { ...shareholder, name: evt.target.value };
  //   });

  //   this.setState({ BudgetList: newShareholders });
  // }

  // handleAddBudget  () {


  //   this.setState({
  //     BudgetListCounter: this.state.BudgetListCounter + 1
  //   }, () => {
  //     this.setState({ BudgetList: this.state.BudgetList.concat([{ id: this.state.BudgetListCounter }]) });
  //   });


  // }

  // handleRemoveBudget = (idx: any) => () => {

  //   var filteredItems = this.state.BudgetList.filter(function (item: any, i: any) {
  //     return (item.id !== idx);
  //   });

  //   this.setState({
  //     BudgetList: filteredItems
  //   });
  // }

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
    ]
    const { mutate } = this.props
    return (
      <ScrollView>
        <ToolbarAndroid
          title="Create"
          BackButton={true}
        />


        <View style={{ display: 'flex', flexDirection: 'column', padding: 5 }}>
          <FormInput value={this.state.BillName} label="BillName" onValueChange={this.HandleNameChange} />
          <FormPicker handleChange={this.HandleSiteChange} label="Select Site" Items={this.state.SiteItems} value={this.state.SiteName} />
          <FormPicker handleChange={this.HandleAssetChange} label="Select Device" Items={this.state.AssetItems} value={this.state.AssetName} />
          {/* {this.state.BudgetList.map((BudgetList: any, idx: any) => <Budget handleAddBudget={this.handleAddBudget()} UnitRate={this.state.UnitRate} month={this.state.month} Budget={this.state.Budget} handleUnitRate={this.HandleUnitRate} HandleBudgetChange={this.HandleBudgetChange} handleChange={this.HandleDateChange} />)} */}


          <FormPicker value={this.state.month} label="Select Month" handleChange={this.HandleDateChange} Items={Items} />
          <InputLabel keyboardType='numeric' value={this.state.UnitRate} onChangeText={this.HandleUnitRate} label="Unit Rate" />
          <InputLabel keyboardType='numeric' value={this.state.Budget} onChangeText={this.HandleBudgetChange} label="Budget" />
          {this.state.loader == true ? <ActivityIndicator /> : <Button onPress={this.handleSaveBill} title="Save" />}
        </View>
      </ScrollView>

    );
  }
}
export default graphql(Mutationquery)(withRouter(CreatBill))


