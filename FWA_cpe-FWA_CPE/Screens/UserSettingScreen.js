


import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';

export function UserSettingScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Settings</Text>
      <Text style={styles.h2}></Text>

      <TouchableOpacity style={styles.UserPreferncesScreen}
        onPress={() => navigation.navigate('UserPreferncesScreen')}>
        <Text style={styles.lable}>Prefernces</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.UserBackupScreen}
        onPress={() => navigation.navigate('UserBackupScreen')}>
        <Text style={styles.lable}>Backup and Restore</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.UserSoftwareScreen}
        onPress={() => navigation.navigate('UserSoftwareScreen')}>
        <Text style={styles.lable}>Software Update</Text>
      </TouchableOpacity>

    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333281',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign: 'auto',
    top: 50,

  },
  h1: {
    top: 10,
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold'
  },
  h2: {
    top: 10,
    width: 3250,
    backgroundColor: '#FFFFFF',
    height: 3

  },
  lable: {
    color: '#FFFFFF',
    fontSize: 20,
    top: 30,
    marginLeft: 10,
    padding: 5,
    textAlign: 'auto',
    marginBottom: 10,

  },

});

export default UserSettingScreen;
