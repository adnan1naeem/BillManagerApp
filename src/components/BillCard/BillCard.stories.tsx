import React from 'react';
import { storiesOf } from '@storybook/react-native';
import BillCard from './BillCard.component';
import { withKnobs} from '@storybook/addon-knobs/react';
import {View} from 'react-native';


storiesOf('Card', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .addDecorator(withKnobs )
  .add('Card Story', () => (
  <BillCard  
  name="ADNAN"
	month="June"
	budget={22222}
  />
  ))

  