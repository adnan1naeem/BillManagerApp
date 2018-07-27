import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Button from './Button.Component';
import { withKnobs, text,} from '@storybook/addon-knobs/react';
import {View} from 'react-native';


storiesOf('Button', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .addDecorator(withKnobs )

  .add('Button story', () => (
  <Button  color="green"  title={text('title','Sumit')}/>
  ))


  .add('Latest Button', () => (
    <Button  color="#00ccff"  title={text('title','Sumit')}/>
    ))
 
  