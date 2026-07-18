import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

// const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName='Welcome' screenOptions={{
    //     headerStyle: {backgroundColor: 'purple'},
    //     headerTintColor: 'white',
    //     drawerActiveBackgroundColor: '#c274e0',
    //     drawerActiveTintColor: 'white',
    //     // drawerStyle: {backgroundColor: '#ccc'}
    //   }}>
    //     <Drawer.Screen name='Welcome' component={WelcomeScreen} options={{
    //       drawerLabel: 'Welcome Screen',
    //       drawerIcon: ({color, size}) => <Ionicons name='home' color={color} size={size} />
    //       // headerStyle: {backgroundColor: 'purple'},
    //       // headerTintColor: 'white',
    //       // drawerActiveBackgroundColor: '#c274e0',
    //       // drawerActiveTintColor: 'white',
    //       // drawerStyle: {backgroundColor: '#ccc'}
    //     }} />
    //     <Drawer.Screen name='User' component={UserScreen} options={{
    //       drawerIcon: ({color, size}) => <Ionicons name='person' size={size} />
    //     }} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name='Welcome' component={WelcomeScreen} options={{
          tabBarIcon: ({color, size}) => <Ionicons name='home' color={color} size={size} />
        }} />
        <BottomTab.Screen name='User' component={UserScreen} options={{
          tabBarIcon: ({color, size}) => <Ionicons name='person' color={color} size={size} />
        }} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
