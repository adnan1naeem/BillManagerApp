import { View, Text } from 'react-native'
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
  const { title } = props;
  return (
    <View style={styles.View}>
      {
        props.BackButton ?
          <Link to={'/'}>
            <MaterialCommunityIcons name="arrow-left" size={25} color="white" />
          </Link>
          : null
      }
      <Text style={styles.titlecolor}>{title}</Text>
    </View>
  );
}
export default AppBar;


