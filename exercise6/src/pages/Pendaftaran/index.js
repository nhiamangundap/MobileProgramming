import React, {useState, useEffect} from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';
import Cards from '../../molecules/Cards';
import Axios from 'axios';

const Pendaftaran = () => {
  const [users, setUsers] = useState([]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    Axios.get('http://10.0.2.2:3004/users').then(res => setUsers(res.data));
  }, [users]);

  const handleSubmit = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    Axios.post('http://10.0.2.2:3004/users', data);
  };

  return (
    <View>
      <View>
        <TextInput
          value={firstName}
          label="First Name"
          placeholder="Masukan First Name Anda"
          onChangeText={e => setFirstName(e)}
        />
        <TextInput
          value={lastName}
          label="Last Name"
          placeholder="Masukan Last Name Anda"
          onChangeText={e => setLastName(e)}
        />
        <TextInput
          value={email}
          label="First Name"
          placeholder="Masukan Email Name Anda"
          onChangeText={e => setEmail(e)}
        />
        <Button label="Tambah" onSubmit={handleSubmit} />
      </View>

      <View>
        <ScrollView>
          {users.map(item => (
            <Cards
              key={item.id}
              firstName={`${item.firstName} ${item.lastName}`}
              email={item.email}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Pendaftaran;

const styles = StyleSheet.create({
});