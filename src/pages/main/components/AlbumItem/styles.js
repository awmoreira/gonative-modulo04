import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
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
    marginLeft: metrics.baseMargin,
  },
  more: {
    color: colors.regular,
  },
  thumbnail: {
    borderRadius: 28,
    height: 56,
    width: 56,
  },
  title: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
