import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.title}>VegeLens</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#BDBDBD"
        />
      </View>

      {/* Icon Buttons */}
      <View style={styles.iconRow}>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={{uri: 'https://via.placeholder.com/50'}}
            style={styles.iconImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={{uri: 'https://via.placeholder.com/50'}}
            style={styles.iconImage}
          />
        </TouchableOpacity>
      </View>

      {/* Image Cards */}
      <View style={styles.cardContainer}>
        <Image
          source={require('../../vegetables1.png')}
          style={styles.cardImage}
        />

        <Image
          source={require('../../vegetables1.png')}
          style={styles.cardImage}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4CAF50',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
    right: 10,
  },
  menuButton: {
    marginRight: 10,
  },
  menuIcon: {
    fontSize: 24,
    color: 'white',
    position: 'relative',
    right: 70,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  searchContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    fontSize: 16,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 100,
  },
  iconButton: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
});
