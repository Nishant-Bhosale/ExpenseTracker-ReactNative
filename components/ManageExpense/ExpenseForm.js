import { View, StyleSheet, Text, Alert } from "react-native";
import { useState } from "react";
import Input from "./Input";
import Button from "../UI/Button";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../utils/date";

const ExpenseForm = ({
	cancelHandler,
	isEditing,
	onSubmit,
	expenseToUpdate,
}) => {
	const [inputs, setInputs] = useState({
		amount: {
			value: isEditing ? expenseToUpdate.amount + "" : "",
			isValid: isEditing,
		},
		date: {
			value: isEditing ? getFormattedDate(expenseToUpdate.date) : "",
			isValid: isEditing,
		},
		description: {
			value: isEditing ? expenseToUpdate.description : "",
			isValid: isEditing,
		},
	});

	const inputChangeHandler = (inputIdentifier, enteredValue) => {
		setInputs((prev) => {
			return {
				...prev,
				[inputIdentifier]: { value: enteredValue, isValid: true },
			};
		});
	};

	const submitHandler = () => {
		const { amount, date, description } = inputs;

		const amountIsValid = !isNaN(amount.value) && amount.value > 0;
		const dateIsValid = new Date(date.value).toString() !== "Invalid Date";
		const descriptionIsValid = description.value.trim().length > 0;

		if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
			// Alert.alert("Invalid input", "Please check your input values!");
			setInputs(() => {
				return {
					amount: { value: amount.value, isValid: amountIsValid },
					date: { value: date.value, isValid: dateIsValid },
					description: {
						value: description.value,
						isValid: descriptionIsValid,
					},
				};
			});
			return;
		}

		const expenseData = {
			amount: +amount.value,
			date: new Date(date.value),
			description: description.value,
		};

		onSubmit(expenseData);
	};

	const formIsInvalid =
		!inputs.amount.isValid ||
		!inputs.date.isValid ||
		!inputs.description.isValid;

	return (
		<View style={styles.form}>
			<Text style={styles.title}>Your Expense</Text>
			<View style={styles.inputsRow}>
				<Input
					label="Amount"
					textInputConfig={{
						keyboardType: "decimal-pad",
						onChangeText: inputChangeHandler.bind(this, "amount"),
						value: inputs.amount.value,
					}}
					invalid={!inputs.amount.isValid}
					style={styles.rowInput}
				/>
				<Input
					label="Date"
					textInputConfig={{
						placeholder: "YYYY-MM-DD",
						maxLength: 10,
						onChangeText: inputChangeHandler.bind(this, "date"),
						value: inputs.date.value,
					}}
					invalid={!inputs.date.isValid}
					style={styles.rowInput}
				/>
			</View>
			<Input
				label="Description"
				textInputConfig={{
					// autoCorrect: false,
					// autoCapitalize: "sentences",
					multiline: true,
					onChangeText: inputChangeHandler.bind(this, "description"),
					placeholder: "Enter description here...",
					value: inputs.description.value,
				}}
				invalid={!inputs.description.isValid}
			/>
			{formIsInvalid && (
				<Text style={styles.errorText}>
					Invalid input values - please check your entered data!
				</Text>
			)}
			<View style={styles.buttons}>
				<Button mode="flat" onPress={cancelHandler} style={styles.button}>
					Cancel
				</Button>
				<Button onPress={submitHandler} style={styles.button}>
					{isEditing ? "Update" : "Add"}
				</Button>
			</View>
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
	buttons: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	errorText: {
		textAlign: "center",
		color: GlobalStyles.colors.error500,
		margin: 8,
	},
	button: {
		marginHorizontal: 8,
		minWidth: 120,
	},
});

export default ExpenseForm;
