import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function FBHeader() {
  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.logo}>facebook</Text>
        <View style={styles.topRightIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <View style={styles.plusButton}>
              <Icon name="plus" size={22} color="#000" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="magnify" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="facebook-messenger" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1e21',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingTop: 12,
  },
  logo: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  topRightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 15,
  },
  plusButton: {
    backgroundColor: '#e4e6eb',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // topNav: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   paddingVertical: 10,
  //   borderBottomWidth: 1,
  //   borderTopWidth: 1,
  //   borderColor: '#3e4042',
  // },
  navItem: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  activeNavItem: {
    borderBottomWidth: 2,
    borderBottomColor: '#1877f2',
    paddingBottom: 8,
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  menuDot: {
    position: 'absolute',
    bottom: -3,
    right: -3,
    backgroundColor: '#3e4042',
    borderRadius: 10,
    padding: 2,
  },
  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  statusProfilePic: {
    marginRight: 10,
  },
  statusInput: {
    flex: 1,
    backgroundColor: '#3e4042',
    borderRadius: 20,
    padding: 12,
    marginRight: 10,
  },
  statusText: {
    color: '#b0b3b8',
  },
  photoButton: {
    padding: 5,
  },
});