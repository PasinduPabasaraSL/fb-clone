import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

// Sample Data
const suggestedFriends = [
  {
    id: '1',
    name: 'John Doe',
    avatar: 'https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    name: 'Jane Smith',
    avatar: 'https://images.unsplash.com/photo-1562038969-e85c13ecb2ac?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    name: 'Michael Lee',
    avatar: 'https://media.istockphoto.com/id/2150345920/photo/pensive-lost-in-thoughts-suffering-from-depression.jpg?s=1024x1024&w=is&k=20&c=KC0SsjeCJ5MyCM-qet3O63dfGqo084hH-E8sH566Px4=',
  },
  {
    id: '4',
    name: 'Emily White',
    avatar: 'https://media.istockphoto.com/id/2037255569/photo/contemplative-woman-amidst-tropical-foliage.webp?a=1&b=1&s=612x612&w=0&k=20&c=od1fK_nuAH8IQg5W2Ljv_Mt0EpNvrCpFVAhZp7rlRB4=',
  },
];

export default function FBFriends() {
  const [invitesSent, setInvitesSent] = useState([]);

  const sendInvite = (friendId) => {
    if (!invitesSent.includes(friendId)) {
      setInvitesSent([...invitesSent, friendId]);
    }
  };

  const renderSuggestedFriend = ({ item }) => {
    const isInviteSent = invitesSent.includes(item.id);

    return (
      <View style={styles.friendContainer}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.friendInfo}>
          <Text style={styles.friendName}>{item.name}</Text>
          <TouchableOpacity
            style={isInviteSent ? styles.inviteButtonSent : styles.inviteButton}
            onPress={() => sendInvite(item.id)}
            disabled={isInviteSent}
          >
            <Text style={styles.inviteButtonText}>
              {isInviteSent ? 'Invite Sent' : 'Send Invite'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Suggested Friends</Text>
      <FlatList
        data={suggestedFriends}
        renderItem={renderSuggestedFriend}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
  },
  header: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  friendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#1c1e21',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  friendInfo: {
    marginLeft: 12,
    flex: 1,
  },
  friendName: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  inviteButton: {
    marginTop: 8,
    backgroundColor: '#1877f2',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  inviteButtonSent: {
    marginTop: 8,
    backgroundColor: '#e4e6eb',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  inviteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});