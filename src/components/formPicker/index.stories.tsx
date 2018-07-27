import React from 'react';
import { storiesOf } from '@storybook/react-native';
import FormPicker from './formPicker.component';
import { withKnobs, text,} from '@storybook/addon-knobs/react';
import {View} from 'react-native';


storiesOf('FormPicker', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .addDecorator(withKnobs )

  .add('FormPicker story', () => (
  <FormPicker label="Budget" handleChange={(event:any)=>'string'}    Items={[{label:'AC',value:'AC'},{label:'Bulb',value:'Bulb'}] } />
  ))


 
  