

import gql from 'graphql-tag'

export const Mutationquery = gql`

mutation($name:String!,$budget:String!,$unitrate:String!,$site:String!,$asset:String!,$month:String!){
  createBill(
    name:$name,
    asset:$asset,
    site:$site,
    month:$month,
    unitrate:$unitrate
    budget:$budget
  )
  {
    id
    asset
    budget
  }
}
`


