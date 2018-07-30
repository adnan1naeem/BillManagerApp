import React from 'react'
import Image from "../../components/Image/Image.component"
import Button from "../../components/Button/Button.Component"
import View from "../../components/View/View.Component"
import ToolbarAndroid from "../../components/ToolBarAndroid/ToolbarAndroid.component"
import { styles } from "./style"
import Text from "../../components/Text/Text.Component"
import { Link, router, Redirect } from 'react-router-native';
import { ScrollView, StatusBar } from "react-native"
import { create } from 'domain';
import { withRouter } from 'react-router-native';


export interface Props {
  history?: any
}

export interface States {
  create: boolean,
  listing: boolean
}
class Home extends React.Component<Props, States> {

  constructor(props: any) {
    super(props);
    this.state = {
      create: false,
      listing: false

    }

  }

  render() {

    return (
      <ScrollView>

        <StatusBar barStyle="dark-content" hidden={false} />

        <ToolbarAndroid
          title="BillManager"
          BackButton={false}
          style={{ marginLeft: 20 }}
        />

        <View style={{ alignItems: 'center', justifyContent: 'center', height: 600, display: 'flex', flexDirection: 'column' }}>
          <Image source={require("../images/bill.png")} />
          <View style={{ width: 300, display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <Button onPress={() => this.props.history.push('/create')} color="blue" title="create" />
            <Button onPress={() => this.props.history.push('/listing')} color="blue" title="lisiting" />
          </View>
        </View>
      </ScrollView>

    );
  }
}

export default withRouter(Home);


