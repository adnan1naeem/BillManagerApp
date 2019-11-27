import React from 'react'
import AppBar from "../../components/AppBar/AppBar.component"
import { styles } from "./style"
import { Button, Image, View, ScrollView, StatusBar } from "react-native"
import { withRouter } from 'react-router-native';

export interface RouterProps {
  push: (route: string) => void
}
export interface Props {
  history: RouterProps
}

const Home = (props: Props) => {

  return (
    <ScrollView>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
      />
      <AppBar
        title="BillManager"
        BackButton={false}
        style={styles.Toolbar}
      />
      <View style={styles.ImageStyles}>
        <Image
          source={require("./images/bill.png")}
        />
        <View style={styles.buttonStyles}>
          <Button
            onPress={() => props.history.push('/create')}
            color="blue"
            title="create"
          />
          <Button
            onPress={() => props.history.push('/listing')}
            color="blue"
            title="lisiting"
          />
        </View>
      </View>
    </ScrollView>
  );
}


export default withRouter(Home);


