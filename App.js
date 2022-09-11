import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import ManageExpense from "./screens/ManageExpense";
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import { GlobalStyles } from "./constants/styles";
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
	const TabBarIcon = ({ name, size, color }) => {
		return <Ionicons name={name} size={size} color={color} />;
	};

	return (
		<BottomTabs.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
				headerTintColor: "white",
				tabBarStyle: {
					backgroundColor: GlobalStyles.colors.primary500,
					height: 60,
				},
				tabBarActiveTintColor: GlobalStyles.colors.accent500,
				tabBarLabelStyle: { marginBottom: 6 },
			}}
		>
			<BottomTabs.Screen
				name="AllExpenses"
				component={AllExpenses}
				options={{
					tabBarIcon: ({ color, size }) => (
						<TabBarIcon name="calendar" color={color} size={size} />
					),
					title: "All Expenses",

					tabBarLabel: "All Expenses",
				}}
			/>
			<BottomTabs.Screen
				name="RecentExpenses"
				component={RecentExpenses}
				options={{
					tabBarIcon: ({ color, size }) => (
						<TabBarIcon name="hourglass" color={color} size={size} />
					),
					title: "Recent Expenses",
					tabBarLabel: "Recent",
				}}
			/>
		</BottomTabs.Navigator>
	);
};

export default function App() {
	return (
		<>
			<StatusBar style="auto" />
			<NavigationContainer>
				<Stack.Navigator initialRouteName="ExpensesOverview">
					<Stack.Screen
						name="ExpensesOverview"
						component={ExpensesOverview}
						options={{ headerShown: false }}
					/>
					<Stack.Screen name="ManageExpense" component={ManageExpense} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
