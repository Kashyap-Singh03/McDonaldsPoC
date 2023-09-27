import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CartPage from '../Screens/CartPage/CartPage';
import CategoryPage from '../Screens/CategoryPage/CategoryPage';
import HomePage from '../Screens/HomePage/HomePage';
import ItemDetailsPage from '../Screens/ItemDetailsPage/ItemDetailsPage';
import ProfilePage from '../Screens/ProfilePage/ProfilePage';
import SpecialOfferPage from '../Screens/SpecialOfferPage/SpecialOfferPage';
import theme from './../Theme/theme';

const HomeStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const SpecialOfferStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="HomePage">
      <HomeStack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="CategoryPage"
        component={CategoryPage}
        options={{
          headerTitle: 'Available Items',
          headerTitleStyle: {color: theme.colors.black},
        }}
      />
      <HomeStack.Screen
        name="ItemDetailsPage"
        component={ItemDetailsPage}
        options={{
          headerTitle: 'Item Details',
          headerTitleStyle: {color: theme.colors.black},
        }}
      />
    </HomeStack.Navigator>
  );
};

const CartStackScreen = () => {
  return (
    <CartStack.Navigator initialRouteName="CartPage">
      <CartStack.Screen
        name="CartPage"
        component={CartPage}
        options={{headerShown: false}}
      />
    </CartStack.Navigator>
  );
};

const SpecialOfferStackScreen = () => {
  return (
    <SpecialOfferStack.Navigator initialRouteName="SpecialOfferPage">
      <SpecialOfferStack.Screen
        name="SpecialOfferPage"
        component={SpecialOfferPage}
        options={{headerShown: false}}></SpecialOfferStack.Screen>
    </SpecialOfferStack.Navigator>
  );
};

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator initialRouteName="ProfilePage">
      <ProfileStack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{headerShown: false}}
      />
    </ProfileStack.Navigator>
  );
};

const AppNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      //@ts-ignore
      tabBarOptions={{
        keyboardHidesTabBar: true,
        labelStyle: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          textAlignVertical: 'center',
        },
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'home'}
              size={focused ? 35 : 30}
              color={
                focused ? theme?.colors.black : theme?.colors.disableTextColor
              }
            />
          ),
          tabBarLabel: '',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Special Offer"
        component={SpecialOfferStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'gift'}
              size={focused ? 35 : 30}
              color={
                focused ? theme?.colors.black : theme?.colors.disableTextColor
              }
            />
          ),
          tabBarLabel: '',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'cart'}
              size={focused ? 35 : 30}
              color={
                focused ? theme?.colors.black : theme?.colors.disableTextColor
              }
            />
          ),
          tabBarLabel: '',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'account'}
              size={focused ? 35 : 30}
              color={
                focused ? theme?.colors.black : theme?.colors.disableTextColor
              }
            />
          ),
          tabBarLabel: '',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
