import { useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "../components/UI/Button";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";

const ManageExpense = ({ route, navigation }) => {
	const editedExpenseId = route.params?.expenseId;
	const isEditing = !!editedExpenseId;

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEditing ? "Edit Expense" : "Add Expense",
		});
	}, [navigation, isEditing]);

	const cancelHandler = () => {};

	const confirmHandler = () => {};

	return (
		<View style={styles.container}>
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
