import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  active: {
    color: colors.green,
  },
  author: {
    color: colors.dark,
    fontSize: 14,
    marginTop: 3,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: metrics.basePadding,
    marginTop: metrics.basePadding,
  },
  info: {
    flex: 1,
  },
  loading: {
    marginRight: 2,
  },
  play: {
    color: colors.regular,
  },
  title: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
