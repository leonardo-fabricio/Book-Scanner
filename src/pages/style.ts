import { StyleSheet } from "react-native";
import { darkThemeColors } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 24,
    padding: 24,
    width: "auto",
  },
  header: {
    height: 80,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  listItems: { display: "flex" },
  primaryText: {
    color: darkThemeColors.textPrimary,
    fontSize: 16,
  },
  secondaryText: {
    color: darkThemeColors.textSecondary,
    fontSize: 12,
  },
  buttonScan: {
    backgroundColor: darkThemeColors.primary,
    borderRadius: 8,
    padding: 8,
  },
  buttonText: {
    color: darkThemeColors.textPrimary,
    fontSize: 12,
  },
  recentsContent: {
    display: "flex",
    gap: 8,
    width: "auto",
  },
  seeMore: {
    alignSelf: "flex-start",
  },
  textSeeMore: {
    color: darkThemeColors.secondaryVariant,
  },
  listContent: {
    backgroundColor: darkThemeColors.surface,
    borderRadius: 8,
    gap: 8,
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
});
