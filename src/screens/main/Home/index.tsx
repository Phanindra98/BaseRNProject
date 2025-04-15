import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { GlobalStore } from '../../../storage/stores';

const Home = ({navigation}: any) => {
  const handleNavigate = () => {
    navigation.navigate('Profile', {name: 'John Doe'});
  };
  const userLogged = GlobalStore.userToken.getValue('authToken');
  console.log('User logged:', userLogged);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Text>user logged value - {userLogged?.authToken}</Text>
      <Button title="Go to profile" onPress={handleNavigate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Home;
