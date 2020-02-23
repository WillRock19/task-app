import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';

import styles from './styles';
import todayImage from '../../../assets/imgs/today.jpg';
import Task from './../../components/Task';

import moment from 'moment';
import 'moment/locale/pt-br';

export default class TaskList extends Component {
  render() {
    const today = moment()
      .locale('pt-br')
      .format('ddd, D [de] MMMM');

    return (
      <View style={styles.container}>
        <ImageBackground source={todayImage} style={styles.background}>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={styles.tasksContainer}>
          <Task
            description="Comprar Livro"
            estimatedAt={new Date()}
            doneAt={new Date()}
          />
          <Task description="Comprar Livro" estimatedAt={new Date()} />
        </View>
        <Text style={styles.listContainer}>TaskList</Text>
      </View>
    );
  }
}
