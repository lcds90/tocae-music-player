import { Component } from 'react';
import { connect } from 'react-redux';

import {
  search, sendResults,
} from 'Actions';

import {
  SEARCH, RESULTS,
} from 'Actions/types';

import {
  searchForMusic,
} from 'Services/api';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.timeout = 0;
    this.doSearch = this.doSearch.bind(this);
  }

  handleSearch({ target: { value } }) {
    const { props } = this;
    const searchQuery = props[SEARCH];
    if (value === '') {
      searchQuery({ query: value, isUserSearching: false });
      return;
    }
    searchQuery({ query: value, isUserSearching: true });
    this.doSearch(value);
  }

  doSearch(query) {
    const { props } = this;
    const sendDataToStore = props[RESULTS];
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(async () => {
      const results = await searchForMusic(query);
      sendDataToStore(results);
    }, 600);
  }

  render() {
    const { handleSearch } = this;
    return (
      <div>
        <input
          style={{ width: '500px' }}
          type="text"
          placeholder="Digite a álbum, artista, ou título musical"
          onChange={handleSearch}
        />
      </div>
    );
  }
}

const mapDispatchtoProps = (dispatch) => ({
  [SEARCH]: (value) => dispatch(search(value)),
  [RESULTS]: (musics) => dispatch(sendResults(musics)),
});

export default connect(null, mapDispatchtoProps)(Search);
