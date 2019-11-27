import React from 'react';
import { storiesOf } from '@storybook/react-native';
import BillListing from './BillListing';
import { withKnobs, text, } from '@storybook/addon-knobs/react';
import { View } from 'react-native';
import { Query } from "react-apollo";
import gql from 'graphql-tag'
import { query } from './query.graphql'
import apolloStorybookDecorator from "apollo-storybook-react"
import { Data } from "./MockData"
import { allBills } from '../../components/BillCard/MockData';


const loading = [{ data: { loading: true } }]
const erorr = [{ data: { error: true } }]

storiesOf('BillListing', module)
    .addDecorator(getStory => <View>{getStory()}</View>)
    .addDecorator(withKnobs)
    .add('BillListing Page story', () => (
        <BillListing error={false} />
    ))

    .add('BillListing Page  loading story', () => (
        <BillListing loading={true} />
    ))


    .add('BillListing Page  error story', () => (
        <BillListing error={true} />
    ))

    .add('BillListing Page  empty story', () => (
        <BillListing empty={true} />
    ))


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
