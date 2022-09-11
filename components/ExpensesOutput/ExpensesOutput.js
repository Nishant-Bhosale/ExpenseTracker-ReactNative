import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
	{
		id: "e1",
		description: "A pair of shoes",
		amount: 59.99,
		date: new Date("2021-12-19"),
	},
	{
		id: "e2",
		description: "A pair of trousers",
		amount: 89.29,
		date: new Date("2022-01-05"),
	},
	{
		id: "e3",
		description: "Some bananas",
		amount: 5.99,
		date: new Date("2021-12-01"),
	},
	{
		id: "e4",
		description: "A book",
		amount: 15.99,
		date: new Date("2022-02-19"),
	},
	{
		id: "e5",
		description: "Another book",
		amount: 18.99,
		date: new Date("2022-06-23"),
	},
];

const ExpensesOutput = ({ periodName }) => {
	return (
		<View style={styles.container}>
			<ExpensesSummary periodName={periodName} expenses={DUMMY_EXPENSES} />
			<ExpensesList expenses={DUMMY_EXPENSES} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 24,
		paddingTop: 24,
		paddingBottom: 0,
		backgroundColor: GlobalStyles.colors.primary700,
		flex: 1,
	},
});

export default ExpensesOutput;
