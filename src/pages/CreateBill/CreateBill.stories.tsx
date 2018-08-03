import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CreateBill from './CreateBill';
import { withKnobs, text, } from '@storybook/addon-knobs/react';
import { View } from 'react-native';


storiesOf('CreateBill', module)
    .addDecorator(getStory => <View>{getStory()}</View>)
    .addDecorator(withKnobs)
    .add('Page', () => (
        <CreateBill />
    ))


