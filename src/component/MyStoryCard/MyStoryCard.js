import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

export default function MyStoryCard() {
    return (
        <TouchableOpacity style={styles.cardContainer}>
            <ImageBackground
                source={{ uri: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D' }}
                style={styles.bgImage}
                imageStyle={styles.bgImageStyle}
            >
            </ImageBackground>
            <View style={styles.plusIconContainer}>
                <Icon name="plus" size={18} color="#fff" />
            </View>

            <Text style={styles.username}>Create Story</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: 90,
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 2,
        backgroundColor: '#1c1e21',
        borderRadius: 12,
        height: 178,
    },
    bgImage: {
        width: 90,
        height: 120,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 12,
    },
    bgImageStyle: {
        borderRadius: 12,
    },
    plusIconContainer: {
        position: 'absolute',
        bottom: 47,
        right: 32,
        backgroundColor: '#1877f2',
        borderRadius: 12,
        paddingLeft: 6,
        paddingBottom: 4,
        paddingTop: 4,
        paddingRight: 6,
    },
    username: {
        marginTop: 40,
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        position: 'relative',
        bottom: 5,
    },
});