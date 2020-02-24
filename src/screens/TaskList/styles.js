import {StyleSheet, Platform} from 'react-native';
import commonStyles from '../../common/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 3,
  },
  tasksContainer: {
    flex: 7,
  },
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    color: commonStyles.colors.secondary,
    fontFamily: commonStyles.fontFamily,
    fontSize: 50,
    marginLeft: 20,
    marginBottom: 20,
  },
  subtitle: {
    color: commonStyles.colors.secondary,
    fontFamily: commonStyles.fontFamily,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 30,
  },
  iconBar: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: Platform.OS === 'ios' ? 50 : 10,
    justifyContent: 'flex-end',
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: commonStyles.colors.todayTasks,
    bottom: 30,
    borderRadius: 25,
    justifyContent: 'center',
    height: 50,
    position: 'absolute',
    right: 30,
    width: 50,
  },
});
