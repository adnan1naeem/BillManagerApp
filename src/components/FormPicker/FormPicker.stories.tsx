import React from 'react';
import { storiesOf } from '@storybook/react-native';
import FormPicker from './FormPicker.component';
import { withKnobs, text, } from '@storybook/addon-knobs/react';
import { View } from 'react-native';
import { Data } from "./MockData"

storiesOf('FormPicker', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .addDecorator(withKnobs)

  .add('FormPicker story', () => (
    <FormPicker
      IconSize={Data.IconSize}
      IconName={Data.IconName}
      IconColor={Data.IconColor}
      label={Data.label}
      handleChange={Data.onValueChange}
      Items={Data.Items}
    />
  ))



