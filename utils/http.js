import axios from "axios";

const URL = "https://testname-5bd53-default-rtdb.firebaseio.com";

const storeExpense = (expenseData) => {
	axios.post(`${URL}/expenses.json`, JSON.stringify(expenseData));
};

const getExpenses = async () => {
	const res = await axios.get(`${URL}/expenses.json`);
	const expenses = [];

	for (const key in res.data) {
		const expense = {
			id: key,
			amount: res.data[key].amount,
			date: new Date(res.data[key].date),
			description: res.data[key].description,
		};

		expenses.push(expense);
	}
	console.log(expenses);

	return expenses;
};

export { storeExpense, getExpenses };
