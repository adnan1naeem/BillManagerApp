import React from 'react';
import { storiesOf } from '@storybook/react-native';
import InputLabel from './InputLabel.component';
import { withKnobs, text,} from '@storybook/addon-knobs/react';
import {View} from 'react-native';


storiesOf('InputLabel', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .addDecorator(withKnobs )
  .add('InputLabel story', () => (
      <InputLabel  label="Name"  onChange={()=>'string'}   />
  ))

 
  