import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect } from "react";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
	const { expenses, fetchExpenses } = useContext(ExpensesContext);

	useEffect(() => {
		fetchExpenses();
		console.log(expenses);
	}, []);

	return (
		<ExpensesOutput
			expenses={expenses}
			periodName="Total"
			fallbackText="No Expenses Found..."
		/>
	);
};

export default AllExpenses;
