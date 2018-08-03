import React, { Component } from 'react';
import { NativeRouter } from 'react-router-native';
import { client } from ".././src/ApolloConfigurations"
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
// import stories
configure(() => {
  require('../src/components/AppBar/AppBar.stories');
  require('../src/components/BillCard/BillCard.stories');
  require('../src/components/FormInput/FormInput.stories');
  require('../src/components/FormPicker/FormPicker.stories');
  require('../src/components/InputLabel/InputLabel.stories');
  require('../src/pages/Home/Home.stories');
  require('../src/pages/CreateBill/CreateBill.stories');
  require('../src/pages/BillListing/BillListing.stories');


}, module);



const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true });

class StorybookUIHMRRoot extends Component {
  render() {
    return <ApolloProvider client={client}><NativeRouter><StorybookUIRoot /></NativeRouter></ApolloProvider>;
  }
}
AppRegistry.registerComponent('BillManager', () => StorybookUIHMRRoot);
export default StorybookUIHMRRoot;
