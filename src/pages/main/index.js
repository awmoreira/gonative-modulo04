import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  View, StatusBar, TouchableOpacity, FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Creators as AlbumsActions } from '../../store/ducks/albums';
import { colors } from '../../styles';

import AlbumItem from './components/AlbumItem';

import styles from './styles';

class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Sua biblioteca',
    headerRight: (
      <TouchableOpacity style={styles.headerRight} onPress={() => navigation.navigate('Search')}>
        <Icon name="search" size={24} color="#FFF" />
      </TouchableOpacity>
    ),
    headerStyle: {
      backgroundColor: colors.secondary,
      borderBottomWidth: 0,
    },
    headerTintColor: colors.white,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    albums: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
        }),
      ),
    }).isRequired,
    getAlbumsRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getAlbumsRequest();
  }

  render() {
    const { navigation, albums } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <FlatList
          data={albums.data}
          keyExtractor={album => String(album.id)}
          renderItem={({ item }) => (
            <AlbumItem onPress={() => navigation.navigate('Album', { album: item })} album={item} />
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.albums,
});

const mapDispatchToProps = dispatch => bindActionCreators(AlbumsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
