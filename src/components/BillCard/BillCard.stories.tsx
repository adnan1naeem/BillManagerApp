import React from 'react';
import { storiesOf } from '@storybook/react-native';
import BillCard from './BillCard.component';
import { withKnobs } from '@storybook/addon-knobs/react';
import { View } from 'react-native';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';


const stories = storiesOf('Card', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <View style={{ backgroundColor: 'grey' }}>{getStory()}</View>)
  .add('Card Story', () => (
    <BillCard
      name={text('name', 'ADNAN')}
      month={text('month', 'June')}
      budget={text('budget', 2222)}
    />
  ))

  .add('Card Story  budget missing prop', () => (
    <BillCard
      name={text('name', 'ADNAN')}
      month={text('month', 'June')}
    />
  ))

  .add('Card Story name prop is missing', () => (
    <BillCard
      month={text('month', 'June')}
      budget={text('month', 22222)}
    />
  ))


  .add('Card Story month prop is missing', () => (
    <BillCard
      name={text('name', 'ADNAN')}
      budget={text('month', 22222)}
    />
  ))


  .add('Card Story with no prop', () => (
    <BillCard

    />
  ))




