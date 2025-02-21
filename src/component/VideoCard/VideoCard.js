// VideoCard.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const VideoCard = ({ video }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <View style={styles.videoCard}>
      {/* Video Player */}
      <View style={styles.videoContainer}>
        <View style={styles.videoWrapper}>
          <View style={styles.videoPlaceholder}>
            <Icon name="play-circle" size={50} color="#fff" />
          </View>
          <View style={styles.videoDuration}>
            <Text style={styles.durationText}>{video.duration}</Text>
          </View>
        </View>
        <View style={styles.videoStats}>
          <Text style={styles.viewCount}>{video.views} views</Text>
        </View>
      </View>

      {/* User Info */}
      <View style={styles.postInfo}>
        <View style={styles.userInfo}>
          <Image 
            source={{ uri: video.user.avatar }}
            style={styles.avatar}
          />
          <View style={styles.userNameContainer}>
            <View style={styles.nameRow}>
              <Text style={styles.username}>{video.user.name}</Text>
              {video.user.isVerified && (
                <Icon name="check-circle" size={14} color="#1877f2" style={styles.verifiedBadge} />
              )}
            </View>
            <Text style={styles.postTime}>{video.timePosted}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>

      {/* Description */}
      <TouchableOpacity 
        style={styles.postContent}
        onPress={() => setShowFullDescription(!showFullDescription)}
      >
        <Text style={styles.postText} numberOfLines={showFullDescription ? undefined : 2}>
          {video.description}
        </Text>
      </TouchableOpacity>

      {/* Engagement Stats */}
      <View style={styles.engagementStats}>
        <View style={styles.statsLeft}>
          <Icon name="thumbs-up" size={14} color="#1877f2" />
          <Text style={styles.statsText}>{video.likes}</Text>
        </View>
        <View style={styles.statsRight}>
          <Text style={styles.statsText}>{video.shares} Shares</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => setIsLiked(!isLiked)}
        >
          <Icon 
            name={isLiked ? "thumbs-up" : "thumbs-o-up"} 
            size={20} 
            color={isLiked ? "#1877f2" : "#65676b"} 
          />
          <Text style={[styles.actionText, isLiked && styles.actionTextActive]}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="share" size={20} color="#65676b" />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  videoCard: {
    backgroundColor: '#fff',
    marginTop: 1,
    marginBottom: 8,
  },
  videoContainer: {
    width: '100%',
    backgroundColor: '#000',
  },
  videoWrapper: {
    position: 'relative',
    aspectRatio: 16 / 9,
  },
  videoPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  videoDuration: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  durationText: {
    color: '#fff',
    fontSize: 12,
  },
  videoStats: {
    padding: 10,
  },
  viewCount: {
    color: '#fff',
    fontSize: 14,
  },
  postInfo: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userNameContainer: {
    marginLeft: 10,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  verifiedBadge: {
    marginLeft: 4,
  },
  postTime: {
    fontSize: 12,
    color: '#65676b',
    marginTop: 1,
  },
  followButton: {
    backgroundColor: '#e7f3ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  followButtonText: {
    color: '#1877f2',
    fontWeight: '600',
    fontSize: 14,
  },
  postContent: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  postText: {
    fontSize: 14,
    lineHeight: 19,
    color: '#1c1e21',
  },
  engagementStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e4e6eb',
  },
  statsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsRight: {
    flexDirection: 'row',
  },
  statsText: {
    color: '#65676b',
    fontSize: 13,
    marginLeft: 6,
    marginRight: 12,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderColor: '#e4e6eb',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 30,
  },
  actionText: {
    marginLeft: 6,
    fontSize: 13,
    fontWeight: '600',
    color: '#65676b',
  },
  actionTextActive: {
    color: '#1877f2',
  },
});

export default VideoCard;