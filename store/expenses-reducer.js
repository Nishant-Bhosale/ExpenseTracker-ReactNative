import { useReducer } from "react";

const ExpenseReducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			return [action.payload, ...state];
		case "UPDATE":
			const updatableExpenseIndex = state.findIndex((expense) => {
				return expense.id === action.payload.id;
			});
			const updatableExpense = state[updatableExpenseIndex];
			const updatedItem = { ...updatableExpense, ...action.payload.data };
			const updatedExpenses = [...state];
			updatedExpenses[updatableExpenseIndex] = updatedItem;
			return updatedExpenses;
		case "GET":
			const invertedArr = action.payload.reverse();
			return invertedArr;
		case "DELETE":
			return state.filter((expense) => expense.id !== action.payload);
		default:
			return state;
	}
};

export default ExpenseReducer;
