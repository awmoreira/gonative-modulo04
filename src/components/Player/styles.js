import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  author: {
    color: colors.dark,
    fontSize: 12,
    marginTop: 3,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    paddingHorizontal: metrics.basePadding,
    ...ifIphoneX(
      {
        height: 74,
        paddingBottom: metrics.basePadding,
      },
      {
        height: 54,
      },
    ),
  },
  controlIcon: {
    color: colors.white,
  },
  controls: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  currentSong: {
    flex: 1,
  },
  play: {
    marginHorizontal: metrics.baseMargin / 2,
  },
  title: {
    color: colors.white,
    fontSize: 14,
  },
});

export default styles;
