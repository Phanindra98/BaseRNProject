import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Profile} from '../../../screens/main';

import {Login, Signup, VerifyOTP, CreateParent} from '../../../screens/auth';

const MainStack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="Login">
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="SignUp" component={Signup} />
      <MainStack.Screen name="VerifyOtp" component={VerifyOTP} />
      <MainStack.Screen name="ParentInfo" component={CreateParent} />
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Profile" component={Profile} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
