import { ToolbarAndroid, View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Link } from 'react-router-native'
import { styles } from "./style"

export interface Props {
  /**
	 * title of the AppBar 
	 * 
	 */

  title: string,

  /**
	 * BackButton hide and show prop
	 * 
	 */
  BackButton?: boolean,

  /**
	 * Adding styles in the AppBar
	 * 
	 */
  style?: object,
}

const AppBar = (props: Props) => {
  if (props.BackButton == false) {
    return (
      <View style={styles.backButton}>
        <Text numberOfLines={1} style={[styles.buttonColor, props.style]}>{props.title}</Text>
      </View>
    );
  }
  return (
    <View style={styles.Icons}>
      <Link to="/"><MaterialCommunityIcons name="arrow-left" size={25} color="white" /></Link><Text style={styles.titlecolor}>{props.title}</Text>
    </View>
  );
}

export default AppBar;


