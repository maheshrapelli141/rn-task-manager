import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Checkbox, Chip, Divider, Text, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { createTaskAction } from '../redux/actions/task.actions';

const CreateTaskForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const initialState = {
    name: '',
    description: '',
    isImp: false,
    isUrgent: false
  }; 
  const [formState,setFormState] = useState(initialState);
  const [isLoading, setLoading] = useState(false);

  function createTask(){
    setLoading(true);
    dispatch(createTaskAction({
      id: Math.floor(Math.random()*1000),
      ...formState
    }));
    setLoading(false);
    setFormState(initialState);
    navigation.navigate('To Do - Tasks');
  }

  return (
    <View style={{padding: 20,marginTop: 50}}>
      <Text style={{fontSize:24,marginBottom: 10}}>Add Task</Text>
      <Divider />
      <TextInput
        label="Task Name"
        mode='outlined'
        value={formState.name}
        onChangeText={text => setFormState({
          ...formState,
          name: text
        })}
        right={<TextInput.Icon name="pencil-outline" />}
        style={{
          marginTop: 10
        }}
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
      <Checkbox.Item label="Urgent" status={formState.isUrgent ? "checked" : "unchecked"} onPress={() => setFormState({
        ...formState,
        isUrgent: !formState.isUrgent
      })} />
      <Checkbox.Item label="Important" status={formState.isImp ? "checked" : "unchecked"} onPress={() => setFormState({
        ...formState,
        isImp: !formState.isImp
      })} />

      <Button style={{backgroundColor: '#0377fc'}} mode="contained" onPress={createTask}>
      {isLoading ? 'Creating...' :  'Create Task'}
    </Button>
    </View>
  );
};

export default CreateTaskForm;