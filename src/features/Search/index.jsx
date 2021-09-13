import { Component } from 'react';
import { connect } from 'react-redux';

import {
  search, sendResults,
} from 'Actions';

import {
  searchForMusic,
} from 'Services/api';
import { Container, Input } from './styles';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.timeout = 0;
    this.doSearch = this.doSearch.bind(this);
  }

  handleSearch({ target: { value } }) {
    const { searchByQuery } = this.props;
    if (value === '') {
      searchByQuery({ query: value, isUserSearching: false });
      return;
    }
    searchByQuery({ query: value, isUserSearching: true });
    this.doSearch(value);
  }

  doSearch(query) {
    const { searchByQuery } = this.props;
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(async () => {
      const results = await searchForMusic(query);
      searchByQuery(results);
    }, 600);
  }

  render() {
    const { handleSearch } = this;
    console.log(this.props);
    return (
      <Container>
        <Input
          type="text"
          placeholder="Digite a álbum, artista, ou título musical"
          onChange={handleSearch}
        />
      </Container>
    );
  }
}

const mapDispatchtoProps = (dispatch) => ({
  searchByQuery: (query) => dispatch(search(query)),
  results: (musics) => dispatch(sendResults(musics)),
});

export default connect(null, mapDispatchtoProps)(Search);
