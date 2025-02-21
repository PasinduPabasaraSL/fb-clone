import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // For the search icon

// Sample data for group posts
const groupPosts = [
  {
    id: '1',
    groupName: 'Tech Enthusiasts',
    groupImage: 'https://example.com/group1.jpg',
    postContent: 'Excited to learn more about AI and Machine Learning!',
    time: '2 hours ago',
  },
  {
    id: '2',
    groupName: 'Travel Lovers',
    groupImage: 'https://example.com/group2.jpg',
    postContent: 'Where is your next vacation destination?',
    time: '4 hours ago',
  },
];

export default function FBFeeds() {
  const [activeTab, setActiveTab] = useState('All');

  // Sample tab change handler
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderGroupPost = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.groupHeader}>
        <Image source={{ uri: item.groupImage }} style={styles.groupImage} />
        <View style={styles.groupInfo}>
          <Text style={styles.groupName}>{item.groupName}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
      <Text style={styles.postContent}>{item.postContent}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Feeds</Text>
        <TouchableOpacity style={styles.searchIcon}>
          <Icon name="search" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Tabs Section */}
      <View style={styles.tabsContainer}>
        {['All', 'Favourites', 'Friends', 'Groups', 'Pages'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.activeTab]}
            onPress={() => handleTabChange(tab)}
          >
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

  
      {/* Group Posts Section (Only visible when 'Groups' tab is active) */}
      {activeTab === 'Groups' && (
        <FlatList
          data={groupPosts}
          renderItem={renderGroupPost}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1e21',
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    backgroundColor: '#1877f2',
    paddingVertical: 10,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  searchIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  tabButton: {
    paddingVertical: 5,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: '#1877f2',
  },
  tabText: {
    fontSize: 16,
    color: '#000',
  },
  postContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
    marginHorizontal: 10,
  },
  groupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  groupInfo: {
    marginLeft: 12,
  },
  groupName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  time: {
    fontSize: 12,
    color: '#65676b',
  },
  postContent: {
    marginTop: 10,
    fontSize: 14,
    color: '#1c1e21',
  },
});