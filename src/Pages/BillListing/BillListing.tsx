import React from 'react'
import ToolbarAndroid from "../../components/ToolBarAndroid/ToolbarAndroid.component"
import { ScrollView, Text, ActivityIndicator, StatusBar } from "react-native";
import BillCard from "../../components/BillCard/BillCard.Component"
import { styles } from "./style"
import { graphql } from 'react-apollo'
import { query } from "./query.graphql"
import { BillSubscription } from "./Subscriptionquery.graphql"
import { View } from 'react-native'

export interface State {
	data?: any,
}

export interface Props {
	data?: any,
	loading?: any,
	error?: any,
	bills?: any,
	BillSubscription?: any
}

class BillListing extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);

		this.state = {
			data: []
		}
	}

	componentDidMount() {

		this.props.data.subscribeToMore({
			document: BillSubscription,
			updateQuery: (prev: any, { subscriptionData }: any) => {
				console.log("prev", prev);
				console.log("subscription", subscriptionData);

				if (!subscriptionData.data) return prev;
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
		})
	}

	render() {
		if (!this.props.data.allBills && this.props.data.loading == true) {
			return (
				<View style={styles.IndicatorStyles}>
					<ActivityIndicator size={20} />
				</View>
			);
		}

		if (this.props.data && this.props.data.allBills && this.props.data.loading == false) {
			return (
				<ScrollView>
					<StatusBar barStyle="dark-content" hidden={false} />
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
		return <Text>!!Error fetching data</Text>
	}
}


export default graphql(query)(BillListing)
