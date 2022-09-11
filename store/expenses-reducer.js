import { useReducer } from "react";

const ExpenseReducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			return state;
		case "UPDATE":
			return state;
		case "DELETE":
			return state;
		default:
			return state;
	}
};

export default ExpenseReducer;
