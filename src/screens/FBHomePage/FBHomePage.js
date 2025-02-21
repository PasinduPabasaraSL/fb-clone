import React from 'react';
import { ScrollView, StyleSheet, View, FlatList } from 'react-native';
import FBPost from '../../component/FBPost/FBPost';
import StoryCard from '../../component/StoryCard/StoryCard';
import StatusBar from '../../component/StatusBar/StatusBar';
import MyStoryCard from '../../component/MyStoryCard/MyStoryCard';

const storiesData = [
    { id: 1, imageUrl: 'https://plus.unsplash.com/premium_photo-1673512198690-6439132f3187?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', userName: 'Nimna Thathsara' },
    { id: 2, imageUrl: 'https://images.unsplash.com/photo-1518443855757-dfadac7101ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', userName: 'John Snow' },
    { id: 3, imageUrl: 'https://images.unsplash.com/photo-1515663997372-ca8f97ca7160?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', userName: 'Sithum Ranathunga' },
    { id: 4, imageUrl: 'https://cdn.pixabay.com/photo/2024/01/02/14/58/leaf-8483401_640.jpg', userName: 'Peter Pan' },
];

const postsData = [
    {
        id: 1,
        user: { name: 'Nimna Thathsara', profilePic: 'https://plus.unsplash.com/premium_photo-1673512198690-6439132f3187?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        postText: 'Hello, this is my first post!',
        postImage: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        postTime: '2 hrs ago',
    },
    {
        id: 2,
        user: { name: 'Mia Kalifa', profilePic: 'https://jackfisherbooks.com/wp-content/uploads/2019/08/mia-khalifa.jpg' },
        postText: 'Loving the new React Native updates!',
        postImage: null,
        postTime: '3 hrs ago',
    },
    {
        id: 3,
        user: { name: 'Thilina Rajapaksha', profilePic: 'https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        postText: 'Hey....',
        postImage: 'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        postTime: '6 hrs ago',
    },
    {
        id: 4,
        user: { name: 'Chamara Weerasinha', profilePic: 'https://i.scdn.co/image/ab6761610000e5ebaa82df0bfa7e4a83212a310c' },
        postText: 'Hello Fans',
        postImage: 'https://images.unsplash.com/photo-1736994390641-d19a77126c22?q=80&w=1529&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        postTime: '9 hrs ago',
    },
    {
        id: 5,
        user: { name: 'Anupama Silva', profilePic: 'https://plus.unsplash.com/premium_photo-1675034828098-eecd38775c62?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        postText: 'Busy..',
        postImage: 'https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        postTime: '11 hrs ago',
    },
    {
        id: 6,
        user: { name: 'Anura Kumara Dissanayake', profilePic: 'https://globalvoices.org/wp-content/uploads/2024/07/Anura_Kumara_Dissanayake_2023.jpg' },
        postText: 'Returned to Sri Lanka today (17) concluding a successful state visit to China strengthening the relationship between our two countries.',
        postImage: null,
        postTime: '1 day ago',
    },
];

const HomePage = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <StatusBar />
                {/* Stories Section */}
                <FlatList
                    horizontal
                    data={storiesData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <StoryCard imageUrl={item.imageUrl} userName={item.userName} />
                    )}
                    ListHeaderComponent={<MyStoryCard />}
                />

                {/* Posts Section */}
                <FlatList
                    data={postsData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <FBPost
                            user={item.user}
                            postText={item.postText}
                            postImage={item.postImage}
                            postTime={item.postTime}
                        />
                    )}
                    style={styles.postSection}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'black' },
    storiesSection: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    postSection: {
        marginTop: -120,
    }

});

export default HomePage;