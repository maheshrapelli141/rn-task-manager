import React from 'react';
import { View } from 'react-native';
import { Avatar, Button, List } from 'react-native-paper';
import ImportantBadge from './ImportantBadge';
import UrgentBadge from './UrgentBadge';

const TaskItem = ({ type }) => {
  return (
    <List.Accordion
      title="Accordion
      1"
      id="1"
      style={{ display: 'flex' }}
      // left={() =>   <Avatar.Text size={36} label="XD" />}
      right={() => <View>
        <ImportantBadge /><UrgentBadge />
      </View>}
    >
      <List.Item
        title="Deploy App"
        description="Build and deploy task manager app by today"
      />
      {type === 'completed'
        ?
        ''
        :
        <Button icon="check" mode="outlined" onPress={() => console.log('Pressed')}>
          Mark as Complete
        </Button>}

    </List.Accordion>
  );
};

export default TaskItem;