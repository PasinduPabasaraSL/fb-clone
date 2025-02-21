import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import VideoCard from '../../component/VideoCard/VideoCard';

const videoData = [
  {
    id: '1',
    videoUrl: 'video1.mp4',
    duration: '3:45',
    views: '2.5M',
    user: {
      name: 'John Doe',
      avatar: 'https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isVerified: true,
    },
    timePosted: '2 hours ago',
    description: 'Check out this amazing video! #awesome',
    likes: '15K',
    shares: '1.1K',
  },
  {
    id: '2',
    videoUrl: 'video2.mp4',
    duration: '2:30',
    views: '1.2M',
    user: {
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1562038969-e85c13ecb2ac?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isVerified: false,
    },
    timePosted: '5 hours ago',
    description: 'Another great video to share! #content',
    likes: '8.5K',
    shares: '500',
  },
];

export default function FbVideoPage() {
  return (
    <FlatList
      data={videoData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <VideoCard video={item} />
      )}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
});