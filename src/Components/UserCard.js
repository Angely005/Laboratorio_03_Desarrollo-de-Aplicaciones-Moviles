import { View, Text, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function UserCard({ name, age, photo, role }) {
  return (
    <View style={styles.card}>
      
      <Image source={{ uri: photo }} style={styles.image} />

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.age}>{age} años</Text>

      {role && <Text style={styles.role}>{role}</Text>}
    </View>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  role: PropTypes.string,
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",     
    borderRadius: 12,           
    shadowColor: "#000",        
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 8,
    overflow: "hidden",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 120,                
  },
  name: {
    fontSize: 18,               
    fontWeight: "bold",         
    marginTop: 8,
  },
  age: {
    fontSize: 16,
    color: "green",             
    marginTop: 4,
  },
  role: {
    fontSize: 14,
    color: "gray",              
    marginTop: 4,
  },
});
