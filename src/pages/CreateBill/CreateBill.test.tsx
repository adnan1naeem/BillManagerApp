import * as React from 'react'
import { shallow, configure } from 'enzyme';
import CreateBill from "./CreateBill";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { ApolloProvider } from 'react-apollo'
import { NativeRouter, BackButton, Route } from 'react-router-native';
import { client } from "../../ApolloConfigurations"
configure({ adapter: new Adapter() })



test('renders correctly', () => {
  shallow(<ApolloProvider client={client}><NativeRouter><CreateBill /></NativeRouter></ApolloProvider>);
});


test('renders correctly', () => {
  const tree = renderer.create(
    <ApolloProvider client={client}><NativeRouter><CreateBill /></NativeRouter></ApolloProvider>).toJSON();
  expect(tree).toMatchSnapshot();
});



