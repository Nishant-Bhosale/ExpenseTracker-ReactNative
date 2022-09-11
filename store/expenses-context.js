import { createContext, useReducer } from "react";
import ExpenseReducer from "./expenses-reducer";

export const ExpensesContext = createContext({
	expenses: [],
	addExpense: ({ description, amount, date }) => {},
	deleteExpense: (id) => {},
	updateExpense: (id, { date, description, amount }) => {},
});

const ExpensesContextProvider = () => {
	const [state, dispatch] = useReducer(ExpenseReducer);

	const addExpense = (expenseData) => {
		dispatch({
			type: "ADD",
			payload: expenseData,
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
				expenses: [],
				addExpense,
				deleteExpense,
				updateExpense,
			}}
		></ExpensesContext.Provider>
	);
};
