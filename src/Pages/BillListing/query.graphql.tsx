import gql from 'graphql-tag'

export const query = gql`
query bills{
  allBills{
     name
  site
  month
  budget
  unitrate
  asset
  }
}
`