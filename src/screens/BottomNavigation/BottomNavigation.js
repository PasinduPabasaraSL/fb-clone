import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const BottomNavigation = () => {
    const [activeTab, setActiveTab] = useState('Home');

    return (
        <View style={styles.bottomNav}>
            <TouchableOpacity
                style={[styles.tabItem, activeTab === 'Home' && styles.activeTab]}
                onPress={() => setActiveTab('Home')}
            >
                <Text style={styles.tabIcon}>🏠</Text>
                <Text style={[styles.tabText, activeTab === 'Home' && styles.activeTabText]}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.tabItem, activeTab === 'Categories' && styles.activeTab]}
                onPress={() => setActiveTab('Categories')}
            >
                <Text style={styles.tabIcon}>📑</Text>
                <Text style={[styles.tabText, activeTab === 'Categories' && styles.activeTabText]}>Categories</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.tabItem, activeTab === 'Cart' && styles.activeTab]}
                onPress={() => setActiveTab('Cart')}
            >
                <Text style={styles.tabIcon}>🛒</Text>
                <Text style={[styles.tabText, activeTab === 'Cart' && styles.activeTabText]}>Cart</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.tabItem, activeTab === 'Profile' && styles.activeTab]}
                onPress={() => setActiveTab('Profile')}
            >
                <Text style={styles.tabIcon}>👤</Text>
                <Text style={[styles.tabText, activeTab === 'Profile' && styles.activeTabText]}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        paddingBottom: Platform.OS === 'ios' ? 25 : 10,
        borderTopWidth: 1,
        borderTopColor: '#F1F5F9',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 5,
    },
    tabItem: {
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    activeTab: {
        backgroundColor: '#F1F5F9',
    },
    tabIcon: {
        fontSize: 24,
        marginBottom: 4,
    },
    tabText: {
        fontSize: 12,
        color: '#64748B',
        fontWeight: '500',
    },
    activeTabText: {
        color: '#1E293B',
    },
});

export default BottomNavigation;