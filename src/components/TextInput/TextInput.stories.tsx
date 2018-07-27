import React from 'react';
import { storiesOf } from '@storybook/react-native';
import TextInput from './TextInput.component';
import { withKnobs, text,} from '@storybook/addon-knobs/react';
import {View} from 'react-native';


storiesOf('TextInput', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .addDecorator(withKnobs )
  .add('TextInput story', () => (
      <TextInput    />
  ))

 
  