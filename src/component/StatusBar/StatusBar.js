import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import Icon component

export default function StatusBar() {
    return (
        <View style={styles.container}>
            <View style={styles.statusBar}>
                <Icon name="account-circle" size={40} color="#666" style={styles.statusProfilePic} />
                <View style={styles.statusInput}>
                    <Text style={styles.statusText}>What's on your mind?</Text>
                </View>
                <TouchableOpacity style={styles.photoButton}>
                    <Icon name="image" size={24} color="#00a400" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c1e21',
        borderTopWidth: 0.6,
        borderTopColor: '#FAEBD7',
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
        borderColor: '#FAEBD7',
        borderWidth: 0.7,
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 12,
        marginRight: 10,
    },
    statusText: {
        color: 'white',
    },
    photoButton: {
        padding: 5,
    },
});