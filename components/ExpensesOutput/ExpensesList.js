import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

const renderExpenseItem = (itemData) => {
	return <ExpenseItem item={itemData.item} />;
};

const ExpensesList = ({ expenses }) => {
	return (
		<FlatList
			data={expenses}
			keyExtractor={(item) => item.id}
			renderItem={renderExpenseItem}
		/>
	);
};

export default ExpensesList;
