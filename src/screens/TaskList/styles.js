import {StyleSheet} from 'react-native';
import commonStyles from '../../common/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 3,
  },
  listContainer: {
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
  }
});
