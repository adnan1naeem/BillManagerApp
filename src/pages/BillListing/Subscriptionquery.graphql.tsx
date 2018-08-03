import gql from 'graphql-tag'

export const BillSubscription = gql`
subscription billSubscription {
  Bill(filter: {
    mutation_in: [CREATED]
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