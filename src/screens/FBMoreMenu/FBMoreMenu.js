import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import vector icons

// Sample data for menu options
const menuOptions = [
  {
    id: '1',
    title: 'Friends',
    icon: 'users', // FontAwesome icon name
  },
  {
    id: '2',
    title: 'Groups',
    icon: 'group', // FontAwesome icon name
  },
  {
    id: '3',
    title: 'Events',
    icon: 'calendar', // FontAwesome icon name
  },
  {
    id: '4',
    title: 'Marketplace',
    icon: 'shopping-cart', // FontAwesome icon name
  },
  {
    id: '5',
    title: 'Pages',
    icon: 'file-text', // FontAwesome icon name
  },
  {
    id: '6',
    title: 'Friends List',
    icon: 'address-book', // FontAwesome icon name
  },
];

export default function FBMoreMenu() {
  const renderMenuItem = ({ item }) => (
    <TouchableOpacity style={styles.menuItem}>
      <Icon name={item.icon} size={24} color="#1877f2" style={styles.menuIcon} />
      <Text style={styles.menuTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Menu</Text>

      <FlatList
        data={menuOptions}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  menuItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  menuIcon: {
    marginRight: 15,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1c1e21',
  },
});