import React from 'react';
import { storiesOf } from '@storybook/react-native';
import BudgetRow from './index.component';
import { withKnobs, text,} from '@storybook/addon-knobs/react';
import {View} from 'react-native';


storiesOf('Budget', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .addDecorator(withKnobs )

  .add('Budget', () => (
    <BudgetRow  color="#00ccff"  title={text('title','Sumit')}/>
    ))
 
  