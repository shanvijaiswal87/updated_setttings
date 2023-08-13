import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TouchableOpacity ,View,ScrollView,SafeAreaView,Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import SettingsScreen from './components/settings';
import LikesAndShare from './components/likesNdShare';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import YourPhotos from './components/yourPhotos';
import FirstPostNStories from './components/firstPostNStories';



const Stack = createStackNavigator();

export default function App() {
  return(
    

    <NavigationContainer>
      <Stack.Navigator
      
      >
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={({ navigation }) => ({
            headerTitle: 'Settings',
            headerTitleStyle: {
              fontSize: 20,
              color:"#666666",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            

            headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#666666"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />
            )
           
          })}
        />
        <Stack.Screen name="LikesandShare" component={LikesAndShare} />
        <Stack.Screen name="YourPhotos" component={YourPhotos} />
        <Stack.Screen name="FirstPostNStories" component={FirstPostNStories} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

