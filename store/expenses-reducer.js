import { useReducer } from "react";

const ExpenseReducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			const id = new Date().toString() + Math.random().toString;
			return [{ ...action.payload, id }, ...state];
		case "UPDATE":
			const updatableExpenseIndex = state.findIndex((expense) => {
				return expense.id === action.payload.id;
			});
			const updatableExpense = state[updatableExpenseIndex];
			const updatedItem = { ...updatableExpense, ...action.payload.data };
			const updatedExpenses = [...state];
			updatedExpenses[updatableExpenseIndex] = updatedItem;
			return updatedExpenses;
		case "DELETE":
			return state.filter((expense) => expense.id !== action.payload);
		default:
			return state;
	}
};

export default ExpenseReducer;
