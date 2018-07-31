import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Home from './Home';
import { withKnobs, text,} from '@storybook/addon-knobs/react';
import {View} from 'react-native';


storiesOf('Home', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .addDecorator(withKnobs )
  .add('Home story', () => (
      <Home    />
  ))

 
  