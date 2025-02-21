import { View, Text } from 'react-native'
import React from 'react'
import { Button, Avatar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function PaperComponent() {
    return (
        <View>
            <Text>PaperComponent</Text>

            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')} style={styles.btn}>
                Press me
            </Button>

            <Avatar.Image size={50} source={require('../../assets/women.jpeg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        marginTop: 20,
        marginBottom: 20,
    },
})