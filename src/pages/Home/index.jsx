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

import {
  Container, Title,
} from './styles';

class Home extends Component {
  componentDidMount() {
    const { props } = this;
    props.fetchData();
  }

  render() {
    return (
      <Container>
        <Title>Tocaê</Title>
        <Search />
        <Favorites />
        <MusicList />
      </Container>
    );
  }
}

export default connect(null, { fetchData })(Home);
