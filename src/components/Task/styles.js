import {StyleSheet} from 'react-native';
import commonStyles from './../../common/styles';

export default StyleSheet.create({
  container: {
    alignItems: 'center', //defines the align of the cross-axis from flex-box (its a column, since flexDirection [main-axis] is row)
    flexDirection: 'row',
    borderColor: '#AAA',
    borderBottomWidth: 1,
  },
  checkContainer: {
    alignItems: 'center', //defines the horizontal alignment, since the flex-direction (main-axis), by default, is 'column', the cross-axis will be 'row'
    justifyContent: 'center',
    width: '20%',
  },
  checkItem: {
    height: 25,
    width: 25,
    borderRadius: 13,
  },
  pending: {
    borderWidth: 1,
    borderColor: '#555',
  },
  done: {
    alignItems: 'center',
    backgroundColor: '#4D7031',
    justifyContent: 'center',
  },
});
