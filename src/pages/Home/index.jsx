import {
  Component,
} from 'react';

import {
  connect,
} from 'react-redux';

import {
  fetchData,
} from 'Actions';

import {
  Favorites,
  MusicList, Search,
} from 'Features';

import { Navbar } from 'Components';
import {
  Container,
} from './styles';

class Home extends Component {
  componentDidMount() {
    const { props } = this;
    props.fetchData();
  }

  render() {
    return (
      <Container>
        <Navbar>
          <Search />
        </Navbar>
        <Favorites />
        <MusicList />
      </Container>
    );
  }
}

export default connect(null, { fetchData })(Home);
