import React from 'react';
import { storiesOf } from '@storybook/react-native';
import AppBar from './AppBar.component';
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from "react-native";
import { Data } from "./MockData"


storiesOf('Appbar ', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .addDecorator(withKnobs)




  .add(' back button Appbar story', () => (

    <ScrollView>
      <AppBar
        title={text('title', 'BillManager')}
        BackButton={boolean('backbutton', true)}
      />
    </ScrollView>
  ))


  .add('without  back button Appbar story', () => (

    <ScrollView>
      <AppBar
        title={text('title', 'BillManager')}
        BackButton={boolean('backbutton', false)}
        style={Data.style}
      />
    </ScrollView>
  ))




