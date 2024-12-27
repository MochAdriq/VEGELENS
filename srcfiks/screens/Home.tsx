import 'react-native-gesture-handler'; // Inisialisasi Gesture Handler (Penting)
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.toggleDrawer()}>
        <Ionicons name="menu-outline" size={30} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>VegeLens</Text>
    </View>
  );
};

const CustomDrawerContent: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.header}>
        <Image
          source={require('../img/vegetables1.png')} // Ganti dengan gambar Anda
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
};

const Drawer = createDrawerNavigator();

const App: React.FC = () => {
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
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
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
