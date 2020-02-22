import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';

import styles from './styles';
import todayImage from '../../../assets/imgs/today.jpg';

export default class TaskList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={todayImage} style={styles.background} />
        <Text style={styles.listContainer}>TaskList</Text>
      </View>
    );
  }
}
