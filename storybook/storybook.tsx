import React, { Component } from 'react';
import { 	NativeRouter } from 'react-router-native';

import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

// import stories
configure(() => {
  require('../src/components/Button/Button.stories');
    require('../src/components/Text/Text.stories');
    require('../src/components/Image/index.stories');
    require('../src/components/TextInput/TextInput.stories');
    require('../src/components/ToolBarAndroid/index.stories');
    require('../src/components/BillCard/index.stories');
    require('../src/components/formInput/index.stories');
    require('../src/components/formPicker/index.stories');
    require('../src/components/InputLabel/index.stories');
    require('../src/components/Budget/index.stories');
    require('../src/Pages/Home/index.stories');
    require('../src/Pages/CreateBill/index.stories');
    require('../src/Pages/BillListing/index.stories');
  
  
}, module);


const GRAPHCMS_API = 'https://api-euwest.graphcms.com/v1/cjjtwi33j03e501ccj3uicdez/master'

const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache()
})


const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true });

class StorybookUIHMRRoot extends Component {
  render() {
    return <ApolloProvider client={client}><NativeRouter><StorybookUIRoot /></NativeRouter></ApolloProvider>;
  }
}
AppRegistry.registerComponent('BillManager', () => StorybookUIHMRRoot);
export default StorybookUIHMRRoot;
