import React from 'react';
import { Text } from 'react-native-paper';

const MyText = ({children,style,...rest}) => {
  return (
    <Text style={{fontFamily:'TiroGurmukhi_Regular',...style}} {...rest}>{children}</Text>
  );
};

export default MyText;