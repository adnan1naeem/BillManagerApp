import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Text from './Text.Component';
import { withKnobs} from '@storybook/addon-knobs/react';
import {View,ToolbarAndroid,StyleSheet} from 'react-native';

storiesOf('Text', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .addDecorator(withKnobs )
  .add('Text story', () => (
      <Text    />
  ))


  