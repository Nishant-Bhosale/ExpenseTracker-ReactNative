import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const ExpensesOutput = ({ expenses, periodName, fallbackText }) => {
	let content = <Text style={styles.infoText}>{fallbackText}</Text>;
	return (
		<View style={styles.container}>
			<ExpensesSummary periodName={periodName} expenses={expenses} />
			{expenses.length ? <ExpensesList expenses={expenses} /> : content}
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
	infoText: {
		color: "white",
		fontSize: 16,
		textAlign: "center",
		marginTop: 32,
	},
});

export default ExpensesOutput;
