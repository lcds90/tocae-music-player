import React from 'react';
import { connect } from 'react-redux';

import {
  addFavorite,
} from 'Actions';

import {
  ADD_MUSIC_TO_FAVORITES,
} from 'Actions/types';

class InputsList extends React.Component {
  constructor() {
    super();
    this.state = { textValue: '' };
  }

  render() {
    const { props, state } = this;
    const addMusic = props[ADD_MUSIC_TO_FAVORITES];
    const { textValue } = state;

    return (
      <div>
        <input
          style={{ width: '500px' }}
          type="text"
          placeholder="Digite a álbum, artista, ou título musical"
          onChange={(event) => this.setState({ textValue: event.target.value })}
        />
        <button type="button" onClick={() => addMusic(textValue)}>
          Pesquisar Música
        </button>
      </div>
    );
  }
}

const mapDispatchtoProps = (dispatch) => ({
  [ADD_MUSIC_TO_FAVORITES]: (value) => dispatch(addFavorite(value)),
});

export default connect(null, mapDispatchtoProps)(InputsList);
