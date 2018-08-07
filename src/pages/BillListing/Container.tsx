import React from 'react'
import { ScrollView } from "react-native";
import { Query } from 'react-apollo'
import { query } from "./query.graphql"
import BillListing from "./BillListing"
import AppBar from "../../components/AppBar/AppBar.component"

const Container = () => {

  return (
    <ScrollView>
      <AppBar
        title="BillListing"
        BackButton={true}
      />
      <Query query={query}>
        {({ data, loading, subscribeToMore }: any) => {
          return (<BillListing Loading={loading} data={loading === false ? data : {}} subscribeToMore={subscribeToMore} />);
        }}
      </Query>

    </ScrollView>
  );
}

export default Container;
