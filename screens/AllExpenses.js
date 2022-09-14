import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect } from "react";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
	const expenseContext = useContext(ExpensesContext);

	return (
		<ExpensesOutput
			expenses={expenseContext.expenses}
			periodName="Total"
			fallbackText="No Expenses Found..."
		/>
	);
};

export default AllExpenses;
