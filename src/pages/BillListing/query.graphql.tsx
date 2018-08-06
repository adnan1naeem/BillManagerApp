import gql from 'graphql-tag'

export const query = gql`
query bills{
  allBills{
  id
  name
  site
  month
  budget
  unitrate
  asset
  }
}
`