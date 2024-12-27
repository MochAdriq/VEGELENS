import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VegeLens</Text>
      <Text style={styles.description}>Halaman Utama</Text>
    </View>
  );
}

function CustomDrawerContent({navigation}) {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.header}>
        <Image
          source={require('./src/img/vegetables1.png')} // Ganti sesuai path logo Anda
          style={styles.logo}
        />
        <Text style={styles.appName}>VegeLens</Text>
      </View>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Version</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Laporkan</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logout}
        onPress={() => navigation.goBack()}>
        <Text style={styles.logoutText}>Keluar</Text>
      </TouchableOpacity>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: 'white',
          },
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    marginTop: 10,
  },
  drawerContainer: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    fontSize: 16,
    color: '#4CAF50',
  },
  logout: {
    marginTop: 'auto',
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
