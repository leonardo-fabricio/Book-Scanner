import { Image, StyleSheet, View, Text } from "react-native";
import { darkThemeColors } from "../../../theme";
import { styles } from "./style";

interface FileCardProps {
  title: string;
  reading: string;
  access: string;
  saved: boolean;
}

export function FileCard(item: FileCardProps) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={require("../../../assets/file.webp")}
      />

      <View style={styles.infoContent}>
        <View style={styles.titleContent}>
          <Text style={styles.nameFile}>{item.title}</Text>
          {item.saved && (
            <Image
              style={styles.imageHeart}
              source={require("../../../assets/heart.png")}
            />
          )}
        </View>
        <View style={styles.statusContent}>
          <Text style={styles.textSeconday}>reading: {item.reading}</Text>
          <Text style={styles.textSeconday}>access: {item.access}</Text>
        </View>
      </View>
    </View>
  );
}
