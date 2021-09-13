import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from 'Actions';
import { Navbar } from 'Components';
import {
  Favorites, MusicList, Player, Search,
} from 'Features';
import {
  Container, Wrapper,
} from './styles';

export default () => {
  const dispatch = useDispatch();
  const isUserSearching = useSelector((state) => state.search);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <Container>
      <Navbar>
        <Search />
      </Navbar>
      <Wrapper userSearching={isUserSearching}>
        <Favorites />
        <MusicList />
      </Wrapper>
      <Player />
    </Container>
  );
};
/*
class Home extends Component {
  componentDidMount() {
    const { fetchMusics } = this.props;
    fetchMusics();
  }

  render() {
    const { search: { isUserSearching } } = this.props;
    return (
      <Container>
        <Navbar>
          <Search />
        </Navbar>
        <Wrapper userSearching={isUserSearching}>
          <Favorites />
          <MusicList />
        </Wrapper>
        <Player />
      </Container>
    );
  }
}

Home.propTypes = {

};

const mapStateToProps = (state) => ({
  search: state.search,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMusics: () => dispatch(fetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
 */
