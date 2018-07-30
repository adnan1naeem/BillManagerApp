import { ToolbarAndroid } from 'react-native'
import React from 'react'
import View from "../View/View.Component";
import Text from "../Text/Text.Component";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Link } from 'react-router-native'
import  {styles} from  "./style"

export interface Props {
  title: string,
  BackButton?: boolean,
  style?:object
}

const ToolbarAndroidComponent = (props: Props) => {


  if (props.BackButton == false) {
    return (
      <View style={styles.backButton}>
       <Text style={[styles.buttonColor,props.style]}>{props.title}</Text>
      </View>
    );
  }
  return (
    <View style={styles.Icons}>
      <Link to="/"><MaterialCommunityIcons name="arrow-left" size={25} color="white" /></Link><Text style={{ color: 'white' }}>{props.title}</Text>
    </View>
  );
}

export default ToolbarAndroidComponent;


