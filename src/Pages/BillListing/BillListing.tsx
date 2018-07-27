import React from 'react'
import View from "../../components/View/View.Component"
import ToolbarAndroid from "../../components/ToolBarAndroid/ToolbarAndroid.component"
import { ScrollView, Text, ActivityIndicator } from "react-native";
import BillCard from "../../components/BillCard/BillCard.Component"
import { styles } from "./style"
import { graphql } from 'react-apollo'
import { query } from "./query.graphql"
import { BillSubscription } from "./Subscriptionquery.graphql"

export interface State {
  data?: any,
}

export interface Props {
  data?: any,
  loading?: any,
  error?: any,
  bills?: any,
  BillSubscription?:any
}

class BillListing extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
  }

 

  // componentDidMount() {
  //   this.props.BillSubscription.subscribeToMore({
  //     document: BillSubscription,
  //     variables: null,
  //     updateQuery: (previousState:any, {subscriptionData}) => {
  //       const newPost = subscriptionData.data.Bill.node
  //       return {
  //         allBills: [
  //           {
  //             ...newPost
  //           },
  //           ...previousState.allBills
  //         ]
  //       }
  //     },
  //     onError: (err:any) => console.error(err),
  //   })
  // }


  render() {
  if (!this.props.data.allBills && this.props.data.loading == true) {
      return (
        <View style={{ height:200,display:'flex',justifyContent:'center'}}>
        <ActivityIndicator  size={20}/>
        </View> 
    );
    }
    if (this.props.data && this.props.data.error) {
      return <Text>!!Error fetching data</Text>
    }

    if (this.props.data && this.props.data.allBills && this.props.data.loading == false) {
      return (
        <ScrollView>

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

//export default graphql(query,{name: 'BillSubscription'})(BillListing)

export default graphql(query)(BillListing)
