import React from 'react';
import { storiesOf } from '@storybook/react-native';
import BillCard from './BillCard.component';
import { withKnobs } from '@storybook/addon-knobs/react';
import { View } from 'react-native';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { Data } from "./MockData"

const stories = storiesOf('Card', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <View style={{ backgroundColor: 'grey' }}>{getStory()}</View>)
  .add('Card  knob Story', () => (
    <BillCard
      name={text('name', Data.name)}
      month={text('month', Data.month)}
      budget={text('budget', Data.budget)}
    />
  ))

  .add('Card Story without knob', () => (
    <BillCard
      name={"ADNAN "}
      month={"Jan"}
      budget={2000}
    />
  ))

  .add('Card Story  budget  missing prop knob story', () => (
    <BillCard
      name={text('name', Data.name)}
      month={text('month', Data.month)}
    />
  ))



  .add('Card Story  budget  missing prop without knob story', () => (
    <BillCard
      name={Data.name}
      month={Data.month}
    />
  ))

  .add('Card Story name prop is missing', () => (
    <BillCard
      month={text('month', Data.month)}
      budget={text('budget', Data.budget)}
    />
  ))


  .add('Card Story month prop is missing', () => (
    <BillCard
      name={text('name', Data.name)}
      budget={text('budget', Data.budget)}
    />
  ))


  .add('Card Story with no prop', () => (
    <BillCard />
  ))




