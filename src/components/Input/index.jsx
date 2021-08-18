// src/InputsList.js
import React from 'react';
import { connect } from 'react-redux';

import {
  addFavorite,
} from '@actions';

import {
  ADD_MUSIC_TO_FAVORITES,
} from '@/global';

class InputsList extends React.Component {
  constructor() {
    super();
    this.state = { textValue: '' };
  }

  render() {
    const { textValue } = this.state;

    return (
      <div>
        <input
          type="text"
          placeholder="Digite a tarefa"
          onChange={(event) => this.setState({ textValue: event.target.value })}
        />
        <button type="button" onClick={() => this.props[ADD_MUSIC_TO_FAVORITES](textValue)}>
          Adicionar Tarefa
        </button>
      </div>
    );
  }
}

const mapDispatchtoProps = (dispatch) => ({
  [ADD_MUSIC_TO_FAVORITES]: (value) => dispatch(addFavorite(value)),
});

export default connect(null, mapDispatchtoProps)(InputsList);
