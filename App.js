import { View, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import UserCard from "./src/Components/UserCard"; 

export default function App() {
  const { width } = useWindowDimensions();

  const cardWidth = width < 400 ? "100%" : "48%";

  const users = [
    {
      name: "Ana López",
      age: 25,
      photo: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
      role: "Diseñadora",
    },
    {
      name: "Carlos Pérez",
      age: 30,
      photo: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
      role: "Desarrollador",
    },
    {
      name: "María Torres",
      age: 28,
      photo: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
      role: "Programadora"
    },
    {
      name: "José Ramírez",
      age: 35,
      photo: "https://cdn-icons-png.flaticon.com/512/7077/7077313.png",
      role: "Gerente",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {users.map((user, index) => (
          <View key={index} style={[styles.cardWrapper, { width: cardWidth }]}>
            <UserCard {...user} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardWrapper: {
    marginBottom: 12,
  },
});
