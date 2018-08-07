import React from 'react';
import { storiesOf } from '@storybook/react-native';
import FormPicker from './FormPicker.component';
import { withKnobs, text, } from '@storybook/addon-knobs/react';
import { View, Text, Button } from 'react-native';
import { Link } from 'react-router-native';
import { Data } from "./MockData";
import { linkTo } from '@storybook/addon-links';

const Component = (props: any) => {
  return <View><Link to={props.to}><Text>Not Found</Text></Link></View>
}

storiesOf('FormPicker', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .addDecorator(withKnobs)

  .add('FormPicker', () => (
    <FormPicker
      IconSize={Data.IconSize}
      IconName={Data.IconName}
      IconColor={Data.IconColor}
      label={Data.label}
      handleChange={Data.onValueChange}
      Items={Data.Items}
    />
  ))



  .add('FormPicker differentIcon Size story', () => (
    <FormPicker
      IconSize={20}
      IconName={Data.IconName}
      IconColor={Data.IconColor}
      label={Data.label}
      handleChange={Data.onValueChange}
      Items={Data.Items}
    />
  ))




  .add('FormPicker differentIcon Name story', () => (
    <FormPicker
      IconSize={20}
      IconName={Data.IconName}
      IconColor={Data.IconColor}
      label={Data.label}
      handleChange={Data.onValueChange}
      Items={Data.Items}
    />
  ))




  .add('FormPicker different Icon Color story', () => (
    <FormPicker
      IconSize={20}
      IconName={Data.IconName}
      IconColor={"brown"}
      label={Data.label}
      handleChange={Data.onValueChange}
      Items={Data.Items}
    />
  ))

  // .add('FormPicker without label', () => (
  //   <FormPicker
  //     IconSize={20}
  //     IconName={Data.IconName}
  //     IconColor={"brown"}
  //     handleChange={Data.onValueChange}
  //     Items={Data.Items}
  //   />
  // ))


  // .add('FormPicker differentIcon without IconName prop', () => (
  //   <FormPicker
  //     IconSize={20}
  //     IconColor={Data.IconColor}
  //     label={Data.label}
  //     handleChange={Data.onValueChange}
  //     Items={Data.Items}
  //   />
  // ))
