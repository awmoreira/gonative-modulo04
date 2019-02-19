import { call, put } from 'redux-saga/effects';
import RNSound from 'react-native-sound/sound';

import { Creators as PlayerActions } from '../ducks/player';

// const Sound = new RNSound(); //parei aqui

export function* play() {
  try {
    // yield call(Sound.play);
  } catch (err) {
    console.log(err);
  }
}

export function* setSong(action) {
  try {
    // yield call(Sound.init, action.payload.song.file);
    yield call(play);

    yield put(PlayerActions.setSongSuccess(action.payload.song));
  } catch (err) {
    yield put(PlayerActions.setSongFailure('Erro ao iniciar a música.'));
  }
}
