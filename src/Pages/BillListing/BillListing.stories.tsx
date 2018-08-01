import React from 'react';
import { storiesOf } from '@storybook/react-native';
import BillListing from './BillListing';
import { withKnobs, text, } from '@storybook/addon-knobs/react';
import { View } from 'react-native';


storiesOf('BillListing', module)
    .addDecorator(getStory => <View>{getStory()}</View>)
    .addDecorator(withKnobs)
    .add('BillListing Page story', () => (
        <BillListing />
    ))


