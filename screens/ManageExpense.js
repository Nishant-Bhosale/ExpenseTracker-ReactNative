import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import Button from "../components/UI/Button";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

const ManageExpense = ({ route, navigation }) => {
	const { deleteExpense, updateExpense, addExpense } =
		useContext(ExpensesContext);

	const editedExpenseId = route.params?.expenseId;
	const isEditing = !!editedExpenseId;

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

	const confirmHandler = () => {
		isEditing
			? updateExpense("e1", { description: "TEst", amount: 30 })
			: addExpense({ description: "ESfj", amount: 32, date: new Date() });
		navigation.goBack();
	};

	return (
		<View style={styles.container}>
			<ExpenseForm />
			<View style={styles.buttons}>
				<Button mode="flat" onPress={cancelHandler} style={styles.button}>
					Cancel
				</Button>
				<Button onPress={confirmHandler} style={styles.button}>
					{isEditing ? "Update" : "Add"}
				</Button>
			</View>
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
	buttons: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	button: { marginHorizontal: 8, minWidth: 120 },
	deleteContainer: {
		marginTop: 16,
		paddingTop: 8,
		borderTopWidth: 2,
		borderTopColor: GlobalStyles.colors.primary200,
		alignItems: "center",
	},
});

export default ManageExpense;
