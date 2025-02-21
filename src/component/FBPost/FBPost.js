import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function FBPost({ user, postText, postImage, postTime }) {
    return (
        <View style={styles.postContainer}>
            {/* Post Header */}
            <View style={styles.postHeader}>
                <Image
                    source={{ uri: user.profilePic }}
                    style={styles.profilePic}
                />
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>{user.name}</Text>
                    <Text style={styles.postTime}>{postTime}</Text>
                </View>
                <Icon name="dots-horizontal" size={24} color="#666" />
            </View>

            {/* Post Content */}
            <View style={styles.postContent}>
                <Text style={styles.postText}>
                    {postText}
                </Text>
                {postImage && (
                    <Image
                        source={{ uri: postImage }}
                        style={styles.postImage}
                    />
                )}
            </View>

            {/* Post Footer */}
            <View style={styles.postFooter}>
                <View style={styles.footerButton}>
                    <Icon name="thumb-up-outline" size={20} color="#666" />
                    <Text style={styles.footerButtonText}>Like</Text>
                </View>
                <View style={styles.footerButton}>
                    <Icon name="comment-outline" size={20} color="#666" />
                    <Text style={styles.footerButtonText}>Comment</Text>
                </View>
                <View style={styles.footerButton}>
                    <Icon name="share-outline" size={20} color="#666" />
                    <Text style={styles.footerButtonText}>Share</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    postContainer: {
        backgroundColor: '#1c1e21',
        marginVertical: 10,
        padding: 10,
        borderRadius: 8,
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
    },
    postTime: {
        color: 'white',
        fontSize: 12,
    },
    postContent: {
        marginBottom: 10,
    },
    postText: {
        fontSize: 14,
        marginBottom: 10,
        color: 'white',
    },
    postImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    postFooter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderColor: '#eee',
        paddingTop: 10,
    },
    footerButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerButtonText: {
        marginLeft: 5,
        fontSize: 14,
        color: '#666',
    },
});