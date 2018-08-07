import React from 'react';
import { storiesOf } from '@storybook/react-native';
import BillListing from './BillListing';
import { withKnobs, text, } from '@storybook/addon-knobs/react';
import { View } from 'react-native';



storiesOf('BillListing', module)
    .addDecorator(getStory => <View>{getStory()}</View>)
    .addDecorator(withKnobs)
    // .add('BillListing Page story', () => (
    //     <BillListing data={[allBills:'']} Loading={true} subscribeToMore={(event) => event} error={false} />
    // ))

    // .add('BillListing Page  loading story', () => (
    //     <BillListing Loading={true} subscribeToMore={(event) => event} loading={true} />
    // ))


    // .add('BillListing Page  error story', () => (
    //     <BillListing Loading={true} subscribeToMore={(event) => event} error={true} />
    // ))

    // .add('BillListing Page  empty story', () => (
    //     <BillListing Loading={true} subscribeToMore={(event) => event} empty={true} />
    // ))


// export interface typedef {

//     allBills: [{ month: string, name: string, budget: number }],

// }

// const mocks = {

//     Query: Data
// }
// storiesOf('Apollo Client', module).addDecorator(
//     apolloStorybookDecorator({
//         typedef,
//         mocks,
//     })
// ).add('BillListing Page story', () => (
//     <BillListing />
// ))
