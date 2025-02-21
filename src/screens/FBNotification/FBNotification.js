import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

// Sample data for notifications
const notifications = [
  {
    id: '1',
    message: 'John liked your post',
    time: '2 minutes ago',
    image: 'https://images.unsplash.com/photo-1518443855757-dfadac7101ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    message: 'Sarah commented on your photo',
    time: '1 hour ago',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    message: 'Anjali started following you',
    time: '3 hours ago',
    image: 'https://images.unsplash.com/photo-1579222408706-84220d858e9d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '4',
    message: 'Michael shared your post',
    time: '5 hours ago',
    image: 'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function FBNotification() {
  const renderNotification = ({ item }) => (
    <TouchableOpacity style={styles.notificationContainer}>
      <View style={styles.notificationHeader}>
        <Image source={{ uri: item.image }} style={styles.notificationImage} />
        <View style={styles.notificationText}>
          <Text style={styles.message}>{item.message}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Notifications</Text>

      <FlatList
        data={notifications}
        renderItem={renderNotification}
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
  notificationContainer: {
    backgroundColor: '#1c1e21',
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  notificationText: {
    marginLeft: 15,
  },
  message: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  time: {
    fontSize: 12,
    color: '#65676b',
  },
});