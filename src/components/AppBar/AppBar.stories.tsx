import React from 'react';
import { storiesOf } from '@storybook/react-native';
import AppBar from './AppBar.component';
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';
import { View, StyleSheet } from 'react-native';
import { ScrollView, Button } from "react-native";
import { Data } from "./MockData"
import { withInfo } from '@storybook/addon-info';
import { LinkTo, linkTo } from '@storybook/addon-links';




storiesOf('Appbar', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .addDecorator(withKnobs)

  .add(' back button Appbar story without knobs simple', () => (

    <ScrollView>
      <AppBar
        title="BillManager"
        BackButton={boolean('backbutton', Data.backbuttonTrue)}
        to={'/'}
      />
    </ScrollView>
  ))

  .add('back button Appbar story without knobs simple', () => (

    <ScrollView>
      <AppBar
        title="BillManager"
        BackButton={boolean('backbutton', Data.backbuttonTrue)}
      />
    </ScrollView>
  ))

  .add(' back button Appbar story with knobs', () => (

    <ScrollView>
      <AppBar
        title={text('title', 'BillManager')}
        BackButton={boolean('backbutton', Data.backbuttonTrue)}
      />
    </ScrollView>
  ))

  .add('without  back button Appbar story', () => (

    <ScrollView>
      <AppBar
        title={text('title', 'BillManager')}
        BackButton={boolean('backbutton', Data.backbuttonfalse)}
        style={Data.style}
      />
    </ScrollView>
  ))

  .add('AppBar title knob story', () => (

    <ScrollView>
      <AppBar
        title={text('title', 'BillManager')}
        BackButton={boolean('backbutton', Data.backbuttonfalse)}
        style={Data.style}
      />
    </ScrollView>
  ))






