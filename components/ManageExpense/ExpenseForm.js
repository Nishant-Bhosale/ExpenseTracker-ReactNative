import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";

const ExpenseForm = () => {
	const amountChangeHandler = () => {};

	return (
		<View style={styles.form}>
			<Text style={styles.title}>Your Expense</Text>
			<View style={styles.inputsRow}>
				<Input
					label="Amount"
					textInputConfig={{
						keyboardType: "decimal-pad",
						onChangeText: amountChangeHandler,
					}}
					style={styles.rowInput}
				/>
				<Input
					label="Date"
					textInputConfig={{
						onChangeText: () => {},
						placeholder: "YYYY-MM-DD",
						maxLength: 10,
					}}
					style={styles.rowInput}
				/>
			</View>
			<Input
				label="Description"
				textInputConfig={{
					// autoCorrect: false,
					// autoCapitalize: "sentences",
					multiline: true,
					onChangeText: () => {},
					placeholder: "Enter description here...",
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		color: "white",
		fontWeight: "bold",
		alignSelf: "center",
		marginVertical: 24,
	},
	form: {
		marginTop: 50,
	},
	inputsRow: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	rowInput: {
		flex: 1,
	},
});

export default ExpenseForm;
