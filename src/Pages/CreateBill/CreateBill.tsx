import React from 'react'
import View from "../../components/View/View.Component"
import ToolbarAndroid from "../../components/ToolBarAndroid/ToolbarAndroid.component"
import { StyleSheet, ScrollView } from "react-native";
import FormInput from "../../components/formInput/formInput.component"
import FormPicker from "../../components/formPicker/formPicker.component"
import Budget from "../../components/Budget/index.component"

import { Button } from "react-native"
var styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: '#4883da'
  },
});


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
  BudgetList: any

}

class CreatBill extends React.Component<{}, State> {


  constructor(props: any) {

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
    this.HandleNameChange = this.HandleNameChange.bind(this);
    this.HandleSiteChange = this.HandleSiteChange.bind(this);
    this.HandleAssetChange = this.HandleAssetChange.bind(this);
    this.HandleBudgetChange = this.HandleBudgetChange.bind(this);
    this.HandleDateChange = this.HandleDateChange.bind(this);
    this.HandleUnitRate = this.HandleUnitRate.bind(this);
   // this.handleAddBudget = this.handleAddBudget.bind(this);
   // this.handleRemoveBudget = this.handleRemoveBudget.bind(this);
  //  this.handleBudgetNameChange = this.handleBudgetNameChange.bind(this);



  }

  HandleBudgetChange(event: any) {
    this.setState({ Budget: event.target.value })
  }


  HandleUnitRate(event: any) {
    this.setState({ UnitRate: event.target.value })
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
          <Budget handleAddBudget={this.handleAddBudget} UnitRate={this.state.UnitRate} month={this.state.month} Budget={this.state.Budget} handleUnitRate={this.HandleUnitRate} HandleBudgetChange={this.HandleBudgetChange} handleChange={this.HandleDateChange} />        
          {/* {this.state.BudgetList.map((BudgetList: any, idx: any) => <Budget handleAddBudget={this.handleAddBudget()} UnitRate={this.state.UnitRate} month={this.state.month} Budget={this.state.Budget} handleUnitRate={this.HandleUnitRate} HandleBudgetChange={this.HandleBudgetChange} handleChange={this.HandleDateChange} />)} */}
          <FormPicker   value={props.month} label="Select Month" handleChange={props.handleChange} Items={Items}  />
         <InputLabel    keyboardType='numeric'   value={props.UnitRate}  onChange={props.HandleUnitRate}label="Unit Rate"    />
        <InputLabel     keyboardType='numeric'  value={props.Budget} onChange={props.HandleBudgetChange} label="Budget" />


          <Button onPress={this.handleAddBudget} title="Save" />

        </View>
      </ScrollView>

    );
  }
}

export default CreatBill;


