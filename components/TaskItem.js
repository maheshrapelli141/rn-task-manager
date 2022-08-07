import React from 'react';
import { View } from 'react-native';
import { Avatar, Button, List } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { markTaskAsCompletedAction } from '../redux/actions/task.actions';
import ImportantBadge from './ImportantBadge';
import UrgentBadge from './UrgentBadge';

const TaskItem = ({ type, name ,description, isImp,isUrgent,id }) => {
  const dispatch = useDispatch();

  return (
    <List.Accordion
      title={name}
      id={id || Math.random()}
      style={{ display: 'flex' }}
      // left={() =>   <Avatar.Text size={36} label="XD" />}
      right={() => <View>
        {isImp && <ImportantBadge />}
        {isUrgent && <UrgentBadge />}
      </View>}
    >
      <List.Item
        title={name}
        description={description}
      />
      {type === 'completed'
        ?
        null
        :
        <Button icon="check" mode="outlined" onPress={() => dispatch(markTaskAsCompletedAction(id))}>
          Mark as Complete
        </Button>}

    </List.Accordion>
  );
};

export default TaskItem;