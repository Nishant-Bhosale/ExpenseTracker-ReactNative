import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../utils/date";

const RecentExpenses = () => {
	const { expenses } = useContext(ExpensesContext);
	const recentExpenses = expenses.filter((expense) => {
		const today = new Date();
		const day7DaysAgo = getDateMinusDays(today, 7);

		return expense.date > day7DaysAgo;
	});

	console.log(expenses);
	return (
		<ExpensesOutput
			expenses={recentExpenses}
			periodName="Last 7 Days"
			fallbackText="No expenses found for the last 7 days!"
		/>
	);
};

export default RecentExpenses;
