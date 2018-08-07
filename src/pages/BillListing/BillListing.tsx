import React from 'react'
import { Text, ActivityIndicator } from "react-native";
import BillCard from "../../components/BillCard/Index"
import { styles } from "./style"
import { BillSubscription } from "./Subscriptionquery.graphql"
import { View } from 'react-native'


export interface Props {
	subscribeToMore: (event: any) => void,
	data: { allBills: any[] },
	loading?: boolean,
	empty?: boolean,
	Loading: boolean,
	error?: boolean
}

class BillListing extends React.PureComponent<Props, {}> {

	constructor(props: Props) {
		super(props);

	}

	componentDidMount() {
		this.props.subscribeToMore({
			document: BillSubscription,
			updateQuery: (prev: any, { subscriptionData }: any) => {

				if (!subscriptionData.data) return prev;

				if (subscriptionData.data && subscriptionData.data.Bill && subscriptionData.data.Bill.mutation === 'CREATED') {
					const newFeedItem = subscriptionData.data.Bill.node;

					const edge = {
						node: newFeedItem,
						_typename: 'Bill'
					}
					return Object.assign({}, prev, {
						allBills: [...prev.allBills, edge.node],
						_typename: 'Bill'
					});
				}

				if (subscriptionData.data && subscriptionData.data.Bill && subscriptionData.data.Bill.mutation === 'DELETED') {
					const newFeedItem = subscriptionData.data.Bill.previousValues;

					const FilteredList = prev.allBills.filter((data: { id: string }) => {
						return data.id != newFeedItem.id;
					});

					return Object.assign({}, prev, {
						allBills: FilteredList,
						_typename: 'Bill'
					});
				}

				if (subscriptionData.data && subscriptionData.data.Bill && subscriptionData.data.Bill.mutation === 'UPDATED') {

					const updatedBills = subscriptionData.data.Bill.node
					const bills = prev.allBills;

					const oldBillsIndex = bills.findIndex((bill: { id: string }) => {
						return updatedBills.id === bill.id
					})

					bills[oldBillsIndex] = updatedBills


					return {
						allBills: bills,
					}

				}
			}
		})

	}

	render() {
		if (!this.props.data.allBills && this.props.Loading == true || this.props.loading === true) {
			return (
				<View style={styles.IndicatorStyles}>
					<ActivityIndicator size={20} />
				</View>
			);
		}

		if (this.props.data && this.props.data.allBills && this.props.data.allBills.length < 0 && this.props.Loading === false || this.props.empty === true) {
			return <Text>No Data found</Text>
		}

		if (this.props.data && this.props.data.allBills && this.props.Loading == false && this.props.error != true) {
			return (

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
			);
		}
		else {
			return <Text>Error fetching data</Text>;
		}
	}
}
export default BillListing;
