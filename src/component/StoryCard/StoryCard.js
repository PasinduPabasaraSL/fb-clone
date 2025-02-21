import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const StoryCard = ({ imageUrl, userName}) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: imageUrl }}
                style={styles.storyImage}
            />

            {/* Profile Picture Overlay */}
            <View style={styles.profileContainer}>
                <View style={styles.profileBorder}>
                    <Image
                        source={{ uri: imageUrl }}
                        style={styles.profilePic}
                    />
                </View>
            </View>

            {/* Username Overlay */}
            <View style={styles.userNameContainer}>
                <Text style={styles.userName}>{userName}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 180,
        marginHorizontal: 5,
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 120,
    },
    storyImage: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ddd',
    },
    profileContainer: {
        position: 'absolute',
        top: 8,
        left: 8,
    },
    profileBorder: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#0064E0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePic: {
        width: 34,
        height: 34,
        borderRadius: 17,
        borderWidth: 2,
        borderColor: '#FFFFFF',
    },
    userNameContainer: {
        position: 'absolute',
        bottom: 8,
        left: 8,
        right: 8,
    },
    userName: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '500',
    },
});

export default StoryCard;