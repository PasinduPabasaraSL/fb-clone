import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FBFeeds from './src/screens/FBFeeds/FBFeeds';
import FBFriends from './src/screens/FBFriends/FBFriends';
import FBHomePage from './src/screens/FBHomePage/FBHomePage';
import FBMoreMenu from './src/screens/FBMoreMenu/FBMoreMenu';
import FBNotification from './src/screens/FBNotification/FBNotification';
import FbVideoPage from './src/screens/FbVideoPage/FbVideoPage';
import FBHeader from './src/component/FBHeader/FBHeader';

const App = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <>
      <FBHeader />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              let iconName;
              if (route.name === 'FBHomePage') {
                iconName = 'home';
              } else if (route.name === 'FbVideoPage') {
                iconName = 'video';
              } else if (route.name === 'FbFriends') {
                iconName = 'account-group';
              } else if (route.name === 'FbFeeds') {
                iconName = 'cards';
              } else if (route.name === 'FbNotification') {
                iconName = 'bell';
              } else if (route.name === 'FbMenu') {
                iconName = 'menu';
              }

              return <Icon name={iconName} size={28} color={color} />;
            },
            tabBarLabel: () => null,
            tabBarActiveTintColor: '#1877f2',
            tabBarInactiveTintColor: 'white',
            tabBarStyle: {
              backgroundColor: '#1c1e21',
            },
          })}
        >
          <Tab.Screen name="FBHomePage" component={FBHomePage} />
          <Tab.Screen name="FbVideoPage" component={FbVideoPage} />
          <Tab.Screen name="FbFriends" component={FBFriends} />
          <Tab.Screen name="FbFeeds" component={FBFeeds} />
          <Tab.Screen name="FbNotification" component={FBNotification} />
          <Tab.Screen name="FbMenu" component={FBMoreMenu} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;