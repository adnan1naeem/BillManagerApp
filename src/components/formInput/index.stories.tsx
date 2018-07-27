import React from 'react';
import { storiesOf } from '@storybook/react-native';
import FormInput from './formInput.component';
import { withKnobs, text,} from '@storybook/addon-knobs/react';
import {View} from 'react-native';


storiesOf('FormInput', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .addDecorator(withKnobs )

  .add('FormInput story', () => (
  <FormInput  label="adnan"  onValueChange={()=>'string'}/>
  ))


 
  