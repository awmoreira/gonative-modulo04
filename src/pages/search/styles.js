import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  form: {
    borderBottomColor: colors.secondary,
    borderBottomWidth: 1,
    marginHorizontal: metrics.basePadding,
    marginTop: metrics.basePadding,
    paddingBottom: metrics.basePadding,
  },
  searchInput: {
    backgroundColor: colors.secondary,
    borderRadius: metrics.baseRadius,
    color: colors.white,
    height: 42,
    paddingHorizontal: metrics.basePadding,
  },
});

export default styles;
