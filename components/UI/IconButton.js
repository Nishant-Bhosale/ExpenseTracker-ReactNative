import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ icon, size, color, onPress }) => {
	console.log(icon);
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => pressed && styles.pressed}
		>
			<View style={styles.buttonContainer}>
				<Ionicons name={icon} size={size} color={color} />
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		borderRadius: 24,
		padding: 6,
		marginHorizontal: 8,
		marginVertical: 2,
	},
	pressed: {
		opacity: 0.75,
	},
});

export default IconButton;
