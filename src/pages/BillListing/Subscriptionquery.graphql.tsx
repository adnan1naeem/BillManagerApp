import gql from 'graphql-tag'


// subscription {
//   Location(filter: {
//     OR: [{
//       mutation_in: [CREATED]
//     }, {
//       AND: [{
//         mutation_in: [UPDATED]
//       }, {
//         updatedFields_contains_some: ["latitude", "longitude"]
//       }]
//     }]
//   }) {
//     mutation
//     node {
//       id
//       latitude
//       longitude
//       traveller {
//         id
//         name
//       }
//     }
//   }
// }



export const BillSubscription = gql`
subscription billSubscription {
  Bill(filter:{mutation_in: [CREATED, UPDATED, DELETED]}) {
    mutation
     node {
       id
       budget
       month
       name
       unitrate
       asset
       site
      }
      updatedFields
      previousValues {
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