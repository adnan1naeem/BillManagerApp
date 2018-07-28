import { View, Button } from "react-native"
import React from 'react';
import { styles } from "./style";
import InputLabel from "../InputLabel/index.component";
import FormPicker from "../formPicker/formPicker.component";

const BudgetComponent = (props: any) => {


  return (
    <View style={styles.Container}>
      <FormPicker   value={props.month} label="Select Month" handleChange={props.handleChange} Items={Items}  />
      <InputLabel    keyboardType='numeric'   value={props.UnitRate}  onChange={props.HandleUnitRate}label="Unit Rate"    />
      <InputLabel     keyboardType='numeric'  value={props.Budget} onChange={props.HandleBudgetChange} label="Budget" />
      {/* <Button  title="delete"	style={{ minWidth:0,padding:0, backgroundColor: 'transparent', boxShadow: 'none', border: 0, color: 'black' }}   /> */}

    </View>
  );
}

export default BudgetComponent;



