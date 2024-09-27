import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { darkThemeColors, theme } from "./theme";
import HomePage from "./src/pages/home";

export default function App() {
  return (
    
    <View style={styles.container}>
        <HomePage />
        <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkThemeColors.background,
    width: "auto"
  },
});
