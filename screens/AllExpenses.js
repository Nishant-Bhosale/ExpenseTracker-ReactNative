import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
	const expenseContext = useContext(ExpensesContext);
	console.log(expenseContext.expenses);
	return (
		<ExpensesOutput
			expenses={expenseContext.expenses}
			periodName="Total"
			fallbackText="No Expenses Found..."
		/>
	);
};

export default AllExpenses;
