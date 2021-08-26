import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchData } from 'Actions';
import { Navbar } from 'Components';
import {
  Favorites, MusicList, Player, Search,
} from 'Features';
import {
  Container, Wrapper,
} from './styles';

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
