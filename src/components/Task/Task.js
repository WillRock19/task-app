import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import moment from 'moment';
import 'moment/locale/pt-br';

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
  const doneOrNotStyle =
    props.doneAt != null ? {textDecorationLine: 'line-through'} : {};

  const dateToShow = props.doneAt != null ? props.doneAt : props.estimatedAt;

  const readableDate = moment(dateToShow)
    .locale('pt-br')
    .format('ddd, D [de] MMM');

  return (
    <View style={styles.container}>
      <View style={styles.checkContainer}>{getCheckView(props.doneAt)}</View>
      <View>
        <Text style={[styles.description, doneOrNotStyle]}>
          {props.description}
        </Text>
        <Text style={styles.date}>{readableDate}</Text>
      </View>
    </View>
  );
};
