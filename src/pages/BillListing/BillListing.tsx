import React from 'react'
import ToolbarAndroid from "../../components/AppBar/AppBar.component"
import { ScrollView, Text, ActivityIndicator, StatusBar } from "react-native";
import BillCard from "../../components/BillCard/BillCard.component"
import { styles } from "./style"
import { graphql } from 'react-apollo'
import { query } from "./query.graphql"
import { BillSubscription } from "./Subscriptionquery.graphql"
import { View } from 'react-native'

export interface dataProps {
	loading: boolean,
	allBills: any[],
	subscribeToMore: (event: any) => void
}
export interface Props {

	data: dataProps,
	loading: boolean,
	empty: true,
	error: true
}

class BillListing extends React.Component<Props, {}> {

	constructor(props: Props) {
		super(props);

	}
	componentDidMount() {

		this.props.data.subscribeToMore({
			document: BillSubscription,
			updateQuery: (prev: any, { subscriptionData }: any) => {

				if (!subscriptionData.data) return prev;
				if (subscriptionData.data && subscriptionData.data.Bill) {
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
			}
		})
	}

	render() {
		if (!this.props.data.allBills && this.props.data.loading == true || this.props.loading === true) {
			return (
				<View style={styles.IndicatorStyles}>
					<ActivityIndicator size={20} />
				</View>
			);
		}

		if (this.props.data && this.props.data.allBills.length < 0 && this.props.data.loading === false || this.props.empty === true) {
			return <Text>No Data found</Text>
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
		return this.props.error ? <Text>!!Error fetching data</Text> : '';
	}
}


export default graphql(query)(BillListing)
