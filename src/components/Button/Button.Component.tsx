import { Button } from 'react-native';
import  {View} from  "react-native"
import React from 'react';
import  {style} from "./style"

const ButtonComponent = (props:any) => {
  return (
  <View style={style.Button}>
  <Button   title={props.title}  {...props} />
  </View>
);
}

export default ButtonComponent;



