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
    const { search } = this.props;
    if (value === '') {
      search({ query: value, isUserSearching: false });
      return;
    }
    search({ query: value, isUserSearching: true });
    this.doSearch(value);
  }

  doSearch(query) {
    const { search } = this.props;
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(async () => {
      const results = await searchForMusic(query);
      search(results);
    }, 600);
  }

  render() {
    const { handleSearch } = this;
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
  search: (value) => dispatch(search(value)),
  results: (musics) => dispatch(sendResults(musics)),
});

export default connect(null, mapDispatchtoProps)(Search);
