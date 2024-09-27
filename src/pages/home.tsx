import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { FileCard } from "../components/FileCard";
import { styles } from "./style";
import { useState } from "react";

const data = [
  {
    title: "Title of upload 1",
    reading: "20%",
    access: "Today",
    saved: false,
  },
  {
    title: "Title of upload 2",
    reading: "45%",
    access: "Yesterday",
    saved: true,
  },
  {
    title: "Title of upload 3",
    reading: "10%",
    saved: false,
    access: "2 days ago",
  },
  {
    title: "Title of upload 4",
    reading: "60%",
    saved: true,
    access: "Today",
  },
  {
    title: "Title of upload 5",
    reading: "30%",
    saved: true,
    access: "5 days ago",
  },
  {
    title: "Title of upload 6",
    reading: "90%",
    saved: false,
    access: "Today",
  },
  {
    title: "Title of upload 7",
    reading: "75%",
    saved: false,
    access: "Yesterday",
  },
  {
    title: "Title of upload 8",
    reading: "50%",
    saved: false,
    access: "3 days ago",
  },
];

export default function HomePage() {
  const quantityItems = 3;
  const [seeMoreRecents, setSeeMoreRecents] = useState(false);
  const [seeMoreYourList, setSeeMoreYourList] = useState(false);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.primaryText}>Book Scanner</Text>
          <TouchableOpacity style={styles.buttonScan}>
            <Text style={styles.buttonText}>New</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.recentsContent}>
          <Text style={styles.secondaryText}>Recents</Text>
          <View style={styles.listContent}>
            {data.map((item, index) => {
              if (!seeMoreRecents && index < quantityItems)
                return <FileCard {...item} />;
              else if (seeMoreRecents) return <FileCard {...item} />;
              return <></>;
            })}
          </View>
          <TouchableOpacity
            style={styles.seeMore}
            onPress={() => setSeeMoreRecents(!seeMoreRecents)}
          >
            <Text style={styles.textSeeMore}>
              See {seeMoreRecents ? "Less" : "More"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.recentsContent}>
          <Text style={styles.secondaryText}>Your List</Text>
          <View style={styles.listContent}>
            {data.map((item, index) => {
              if (!seeMoreYourList && index < quantityItems)
                return <FileCard {...item} />;
              else if (seeMoreYourList) return <FileCard {...item} />;
              return <></>;
            })}
          </View>
          <TouchableOpacity
            style={styles.seeMore}
            onPress={() => setSeeMoreYourList(!seeMoreYourList)}
          >
            <Text style={styles.textSeeMore}>
              See {seeMoreYourList ? "Less" : "More"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
