import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const ExpensesOutput = () => {
	return (
		<View>
			<ExpensesSummary />
			<ExpensesList />
		</View>
	);
};

export default ExpensesOutput;
