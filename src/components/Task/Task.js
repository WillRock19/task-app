import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

function getCheckView(doneAt) {
  if (doneAt != null) {
    return (
      <View style={[styles.checkItem, styles.done]}>
        <Icon name="check" size={19} color="#FFF" />
      </View>
    );
  }
  return <View style={[styles.checkItem, styles.pending]} />;
}

export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.checkContainer}>{getCheckView(props.doneAt)}</View>
      <View>
        <Text>{props.description}</Text>
        <Text>{props.estimatedAt + ''}</Text>
      </View>
    </View>
  );
};
