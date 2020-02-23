import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

export default props => {
  return (
    <View>
      <Text>{props.description}</Text>
      <Text>{props.estimatedAt + ''}</Text>
      <Text>{props.doneAt + ''}</Text>
    </View>
  );
};
