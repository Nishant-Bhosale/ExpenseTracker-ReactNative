import { createContext, useReducer } from "react";
import ExpenseReducer from "./expenses-reducer";

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

export const ExpensesContext = createContext({
	expenses: [],
	addExpense: ({ description, amount, date }) => {},
	deleteExpense: (id) => {},
	updateExpense: (id, { date, description, amount }) => {},
});

const ExpensesContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ExpenseReducer, DUMMY_EXPENSES);
	console.log(state);
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
				expenses: state,
				addExpense,
				deleteExpense,
				updateExpense,
			}}
		>
			{children}
		</ExpensesContext.Provider>
	);
};

export default ExpensesContextProvider;
