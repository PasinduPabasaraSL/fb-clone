import { View, Text, StyleSheet, FlatList, RefreshControl } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FastImage from 'react-native-fast-image';

export default function AxiosPage() {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setLoader(true);
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setData(response.data);
                setTimeout(() => {
                    setData(response.data);
                    setLoader(false);
                }, 1000);
            })
            .catch((error) => {
                console.log('Error fetching data:', error);
                setLoader(false);
            });
    };

    const onRefresh = () => {
        setRefreshing(true);
        fetchData();
        setRefreshing(false);
    };

    if (loader) {
        return (
            <View style={styles.container}>
                <FastImage
                    source={require('../../assets/Ghost.gif')}
                    style={styles.loadingGif}
                />
            </View>
        );
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>AxiosPage</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Title: {item.title}</Text>
                        <Text style={styles.cardBody}>Body: {item.body}</Text>
                    </View>
                )}

                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
        width: '100%',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardBody: {
        fontSize: 16,
        color: 'gray',
    },
    loadingGif: {
        width: 100,
        height: 100,
    },
});