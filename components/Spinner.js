import React from 'react';
import { ActivityIndicator } from 'react-native-paper';

const Spinner = () => {
  return (
    <ActivityIndicator animating={true}/>
  );
};

export default Spinner;