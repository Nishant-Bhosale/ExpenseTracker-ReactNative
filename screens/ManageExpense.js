import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

const ManageExpense = ({ route, navigation }) => {
	const { deleteExpense, updateExpense, addExpense, expenses } =
		useContext(ExpensesContext);

	const editedExpenseId = route.params?.expenseId;
	const isEditing = !!editedExpenseId;
	let expenseToUpdate;
	if (isEditing) {
		expenseToUpdate = expenses.find(
			(expense) => expense.id === editedExpenseId,
		);
		console.log(expenseToUpdate);
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEditing ? "Edit Expense" : "Add Expense",
		});
	}, [navigation, isEditing]);

	const deleteExpenseHandler = (id) => {
		deleteExpense(id);
		navigation.goBack();
	};

	const cancelHandler = () => {
		navigation.goBack();
	};

	const confirmHandler = (expenseData) => {
		isEditing
			? updateExpense(editedExpenseId, expenseData)
			: addExpense(expenseData);
		navigation.goBack();
	};

	return (
		<View style={styles.container}>
			<ExpenseForm
				cancelHandler={cancelHandler}
				isEditing={isEditing}
				onSubmit={confirmHandler}
				expenseToUpdate={expenseToUpdate}
			/>

			{isEditing && (
				<View style={styles.deleteContainer}>
					<IconButton
						icon="trash"
						size={36}
						color={GlobalStyles.colors.error500}
						onPress={() => deleteExpenseHandler(editedExpenseId)}
					/>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: GlobalStyles.colors.primary800,
	},

	deleteContainer: {
		marginTop: 16,
		paddingTop: 8,
		borderTopWidth: 2,
		borderTopColor: GlobalStyles.colors.primary200,
		alignItems: "center",
	},
});

export default ManageExpense;
