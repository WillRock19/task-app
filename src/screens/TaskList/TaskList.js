import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import commonStyles from '../../common/styles';
import styles from './styles';
import todayImage from '../../../assets/imgs/today.jpg';
import Task from './../../components/Task';

import moment from 'moment';
import 'moment/locale/pt-br';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class TaskList extends Component {
  constructor() {
    super();
    this.state = {
      showDoneTasks: true,
      visibleTasks: [],
      tasks: this.createDefaultTasks(),
    };
  }

  componentDidMount = () => {
    this.filterTasks();
  };

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

  toogleFilter = () => {
    this.setState({showDoneTasks: !this.state.showDoneTasks}, this.filterTasks);
  };

  filterTasks = () => {
    let visibleTasks = null;
    if (this.state.showDoneTasks) {
      visibleTasks = this.state.tasks.slice();
    } else {
      const taskIsPending = task =>
        task.doneAt === undefined || task.doneAt === null;

      visibleTasks = this.state.tasks.filter(taskIsPending);
    }
    this.setState({visibleTasks});
  };

  toogleTask = taskId => {
    const tasks = this.state.tasks.slice();

    tasks.forEach(task => {
      if (task.id === taskId) {
        task.doneAt = task.doneAt ? null : new Date();
      }
      this.setState({tasks}, this.filterTasks);
    });
  };

  render() {
    const today = moment()
      .locale('pt-br')
      .format('ddd, D [de] MMMM');

    return (
      <View style={styles.container}>
        <ImageBackground source={todayImage} style={styles.background}>
          <View style={styles.iconBar}>
            <TouchableOpacity onPress={this.toogleFilter}>
              <Icon
                name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                size={19}
                color={commonStyles.colors.secondary}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={styles.tasksContainer}>
          <FlatList
            data={this.state.visibleTasks}
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
