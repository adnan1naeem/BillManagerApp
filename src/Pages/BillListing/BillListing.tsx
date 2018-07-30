import React from 'react'
import View from "../../components/View/View.Component"
import ToolbarAndroid from "../../components/ToolBarAndroid/ToolbarAndroid.component"
import { ScrollView, Text, ActivityIndicator, StatusBar } from "react-native";
import BillCard from "../../components/BillCard/BillCard.Component"
import { styles } from "./style"
import { graphql } from 'react-apollo'
import { query } from "./query.graphql"
import { BillSubscription } from "./Subscriptionquery.graphql"
import  {client} from  "../../App"
export interface State {
  data?: any,
}

export interface Props {
  data?: any,
  loading?: any,
  error?: any,
  bills?: any,
  BillSubscription?: any
}

class BillListing extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state={
     data:[]
    }
  }



  componentDidMount() {
  
  const BillCards= client.subscribeToMore({
        document: BillSubscription,
        //  variables: { repoName: params.repoName },
        updateQuery: (prev: any, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;
          const newFeedItem = subscriptionData.data.Bill.node;
          return Object.assign({}, prev, {
            allBills:  [newFeedItem, ...prev.allBills]
          });
        }
      })
     return this.setState({data:BillCards})

    );
  }

  render() {
    if (!this.props.data.allBills && this.props.data.loading == true) {
      return (
        <View style={{ height: 200, display: 'flex', justifyContent: 'center' }}>
          <ActivityIndicator size={20} />
        </View>
      );
    }
    if (this.props.data && this.props.data.error) {
      return <Text>!!Error fetching data</Text>
    }

    if (this.props.data && this.props.data.allBills && this.props.data.loading == false) {
      return (
        <ScrollView>
          <StatusBar barStyle="dark-content" hidden={false} />

          <ToolbarAndroid
            title="BillListing"
            BackButton={true}
          />

          <View style={styles.container}>

            {this.props.data.allBills.map((Data: any, i: any) =>
              <BillCard
                key={i}
                name={Data.name}
                month={Data.month}
                budget={Data.budget}

              />)
            }
          </View>

        </ScrollView>

      );
    }


    return ("");

  }
}

//export default graphql(query, { name: 'BillSubscription' })(BillListing)

export default graphql(query)(BillListing)
