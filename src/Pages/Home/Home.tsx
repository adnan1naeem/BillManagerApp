import React from 'react'
import ToolbarAndroid from "../../components/AppBar/AppBar.component"
import { styles } from "./style"
import { Link, router, Redirect } from 'react-router-native';
import { Button,Image,View,ScrollView, StatusBar } from "react-native"
import { create } from 'domain';
import { withRouter } from 'react-router-native';

export interface RouterProps{
	push:(route:string)=>void
}
export interface Props {
  history: RouterProps
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
          style={styles.Toolbar}
        />
        <View style={styles.ImageStyles}>
          <Image source={require("./images/bill.png")} />
          <View style={styles.buttonStyles}>
            <Button onPress={() => this.props.history.push('/create')} color="blue" title="create" />
            <Button onPress={() => this.props.history.push('/listing')} color="blue" title="lisiting" />
          </View>
        </View>
      </ScrollView>

    );
  }
}

export default withRouter(Home);


