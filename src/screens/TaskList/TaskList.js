import React, {Component} from 'react';
import {View, Text, ImageBackground, FlatList} from 'react-native';

import styles from './styles';
import todayImage from '../../../assets/imgs/today.jpg';
import Task from './../../components/Task';

import moment from 'moment';
import 'moment/locale/pt-br';

export default class TaskList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: this.createDefaultTasks(),
    };
  }

  createDefaultTasks = () => {
    return [
      {
        id: Math.random(),
        description: 'Comprar livro da Sasha Bartland',
        estimatedAt: new Date(),
        doneAt: new Date(),
      },
      {
        id: Math.random(),
        description: 'Ler livro da Sasha Bartland',
        estimatedAt: new Date(),
      },
    ];
  };

  toogleTask = taskId => {
    const tasks = [...this.state.tasks];

    tasks.forEach(task => {
      if (task.id === taskId) {
        task.doneAt = task.doneAt ? null : new Date();
      }
      this.setState({tasks});
    });
  };

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
          <FlatList
            data={this.state.tasks}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => (
              <Task {...item} toogleTask={this.toogleTask} />
            )}
          />
        </View>
      </View>
    );
  }
}
