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


  .add('Different IconSize  story', () => (
    <FormInput
      label={Data.label}
      onValueChange={Data.onValueChange}
      IconColor={Data.IconColor}
      IconSize={20}
      IconName={Data.IconName}
    />
  ))


  .add('Different IconColor  story', () => (
    <FormInput
      label={Data.label}
      onValueChange={Data.onValueChange}
      IconColor={"blue"}
      IconSize={Data.IconSize}
      IconName={Data.IconName}
    />
  ))


  .add('Different IconName story', () => (
    <FormInput
      label={Data.label}
      onValueChange={Data.onValueChange}
      IconColor={"blue"}
      IconSize={Data.IconSize}
      IconName={"arrow-left"}
    />
  ))




  .add('Different Label story', () => (
    <FormInput
      label={'Name'}
      onValueChange={Data.onValueChange}
      IconColor={"blue"}
      IconSize={Data.IconSize}
      IconName={"arrow-left"}
    />
  ))


  .add('No Label story', () => (
    <FormInput
      onValueChange={Data.onValueChange}
      IconColor={"blue"}
      IconSize={Data.IconSize}
      IconName={"arrow-left"}
    />
  ))





