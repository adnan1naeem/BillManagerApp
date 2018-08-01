import React from 'react';
import { storiesOf } from '@storybook/react-native';
import FormInput from './FormInput.component';
import { withKnobs, text, } from '@storybook/addon-knobs/react';
import { View } from 'react-native';

import { Data } from "./MockData"
storiesOf('FormInput', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .addDecorator(withKnobs)

  .add('FormInput story', () => (
    <FormInput
      label={Data.label}
      onValueChange={Data.onValueChange}
      IconColor={Data.IconColor}
      IconSize={Data.IconSize}
      IconName={Data.IconName}
    />
  ))





