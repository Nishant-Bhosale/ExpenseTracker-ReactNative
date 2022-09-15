import axios from "axios";

const URL = "https://testname-5bd53-default-rtdb.firebaseio.com";

const storeExpense = async (expenseData) => {
	const res = await axios.post(
		`${URL}/expenses.json`,
		JSON.stringify(expenseData),
	);
	const id = res.data.name;
	return id;
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

	return expenses;
};

const updateExpenseF = async (id, expenseData) => {
	return axios.put(`${URL}/expenses/${id}.json`, JSON.stringify(expenseData));
};

const deleteExpenseF = async (id) => {
	return axios.delete(`${URL}/expenses/${id}.json`);
};

export { storeExpense, getExpenses, deleteExpenseF, updateExpenseF };
