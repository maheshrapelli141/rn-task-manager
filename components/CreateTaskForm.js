import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Spinner from './Spinner';

const CreateTaskForm = () => {
  const [formState,setFormState] = useState({
    name: '',
    description: ''
  });
  const [isLoading, setLoading] = useState(false);

  function createTask(){
    setLoading(true);
    console.log(formState);
    setTimeout(() => setLoading(false),2000);
  }

  return (
    <View style={{padding: 10}}>
      <TextInput
        label="Task Name"
        mode='outlined'
        value={formState.name}
        onChangeText={text => setFormState({
          ...formState,
          name: text
        })}
        right={<TextInput.Icon name="pencil-outline" />}
      />
      <TextInput
        label="Task Detail"
        mode='outlined'
        value={formState.description}
        onChangeText={text => setFormState({
          ...formState,
          description: text
        })}
        multiline
        numberOfLines={5}
        right={<TextInput.Icon name="text-short" />}
      />
      <Button style={{backgroundColor: '#0377fc'}} mode="contained" onPress={createTask}>
      {isLoading ? 'Creating...' :  'Create Task'}
    </Button>
    </View>
  );
};

export default CreateTaskForm;