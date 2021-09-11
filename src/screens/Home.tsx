import React, { useCallback, useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { FriendList } from '../components/FriendList';

export function Home() {
  const [name, setName] = useState('');

  const [friends, setFriends] = useState([]);

  async function handleSearch() {
    const response = await fetch(`http://192.168.15.28:3333/friends?q=${name}`);
    const data = await response.json();
    setFriends(data);
  }

  const handleFollow = useCallback(() => {
    console.log('Follow');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amigos</Text>
      <TextInput
        style={styles.input}
        placeholder={'Nome do Amigo'}
        onChangeText={setName}
      />
      <Button title={'Buscar'} onPress={handleSearch} />

      <FriendList data={friends} follow={handleFollow} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    padding: 7,
    marginVertical: 10,
  },
  list: {
    marginTop: 20,
  },
});
