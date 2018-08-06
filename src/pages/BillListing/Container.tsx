import React from 'react'
import { ScrollView, Text, ActivityIndicator, StatusBar } from "react-native";
import { Query } from 'react-apollo'
import { query } from "./query.graphql"
import BillListing from "./BillListing"

const Container = () => {

  return (
    <ScrollView>
      <Query query={query}>
        {({ data, loading, subscribeToMore }: any) => {
          return (<BillListing Loading={loading} data={loading === false ? data : {}} subscribeToMore={subscribeToMore} />);
        }}
      </Query>
    </ScrollView>
  );
}

export default Container;
