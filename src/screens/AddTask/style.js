import {StyleSheet} from 'react-native';
import commonStyles from '../../common/styles';

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  container: {
    backgroundColor: '#FFF',
  },
  header: {
    fontFamily: commonStyles.fontFamily,
    backgroundColor: commonStyles.colors.todayTasks,
    color: commonStyles.colors.secondary,
    textAlign: 'center',
    padding: 15,
    fontSize: 19,
  },
  input: {
    fontFamily: commonStyles.fontFamily,
    width: '90%',
    height: 40,
    margin: 15,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 6,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    margin: 20,
    marginRight: 30,
    color: commonStyles.colors.todayTasks,
  },
});
