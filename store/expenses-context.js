import { createContext, useReducer } from "react";
import ExpenseReducer from "./expenses-reducer";
import { getExpenses } from "../utils/http";

export const ExpensesContext = createContext({
	expenses: [],
	addExpense: ({ description, amount, date }) => {},
	deleteExpense: (id) => {},
	updateExpense: (id, { date, description, amount }) => {},
});

const ExpensesContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ExpenseReducer, []);

	const addExpense = (expenseData) => {
		dispatch({
			type: "ADD",
			payload: expenseData,
		});
	};

	const fetchExpenses = async () => {
		const expenses = await getExpenses();
		dispatch({
			type: "GET",
			payload: expenses,
		});
	};

	const deleteExpense = (id) => {
		dispatch({
			type: "DELETE",
			payload: id,
		});
	};

	const updateExpense = (id, expenseData) => {
		dispatch({
			type: "UPDATE",
			payload: { id, data: expenseData },
		});
	};

	return (
		<ExpensesContext.Provider
			value={{
				expenses: state,
				addExpense,
				deleteExpense,
				updateExpense,
				fetchExpenses,
			}}
		>
			{children}
		</ExpensesContext.Provider>
	);
};

export default ExpensesContextProvider;
