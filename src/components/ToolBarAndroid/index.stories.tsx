import React from 'react';
import { storiesOf } from '@storybook/react-native';
import ToolbarAndroid from './ToolbarAndroid.component';
import { withKnobs, text} from '@storybook/addon-knobs/react';
import {View,StyleSheet} from 'react-native';
import { ScrollView } from "react-native";

var styles = StyleSheet.create({
	toolbar: {
		height: 56,
    backgroundColor: '#4883da',
    color:'white'
  },
});

storiesOf('Appbar ', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .addDecorator(withKnobs )
  
.add('withour back button Appbar story', () => (
 
 <ScrollView>
  <ToolbarAndroid
  title="BillManager"
  BackButton={false}
  />
  </ScrollView>
))


.add('Backbutton story', () => (
 
  <ScrollView>
   <ToolbarAndroid
   title="BillManager"
   />
   </ScrollView>
 ))
  