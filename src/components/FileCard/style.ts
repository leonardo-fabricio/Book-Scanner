import { darkThemeColors } from "../../../theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    height: 40,
    width: "auto",
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 4,
  },
  infoContent: {
    display: "flex",
    justifyContent: "space-around",
    width: "auto"
  },
  nameFile: {
    color: darkThemeColors.textSecondary,
    fontSize: 14,
  },
  statusContent: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  textSeconday: {
    color: darkThemeColors.secondary,
    fontSize: 14,
  },
  textSecondayVariant: {
    color: darkThemeColors.secondaryVariant,
    fontSize: 14,
  },
  imageHeart: {
    width: 12,
    height: 12,
  },
  titleContent: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    width: "auto"
  },
});
