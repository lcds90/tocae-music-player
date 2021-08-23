import {
  Component,
} from 'react';

import {
  connect,
} from 'react-redux';

import {
  fetchData,
} from 'Actions';

import { SEARCH } from 'Actions/types';

import {
  Favorites,
  MusicList, Player, Search,
} from 'Features';

import { Navbar } from 'Components';
import {
  Container, Wrapper,
} from './styles';

class Home extends Component {
  componentDidMount() {
    const { props } = this;
    props.fetchData();
  }

  render() {
    const { props } = this;
    const { isUserSearching } = props[SEARCH];
    return (
      <Container userSearching={isUserSearching}>
        <Navbar>
          <Search />
        </Navbar>
        <Wrapper>
          <Favorites />
          <MusicList />
        </Wrapper>
        <Player />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  [SEARCH]: state[SEARCH],
});

export default connect(mapStateToProps, { fetchData })(Home);
