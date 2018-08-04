import gql from 'graphql-tag'

export const BillSubscription = gql`
subscription billSubscription {
  Bill(filter: {
  }) {
    node {
      id
      budget
      month
      name
      unitrate
      asset
      site
    
    }
  }
}
`