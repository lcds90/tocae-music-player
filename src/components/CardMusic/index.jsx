import { Component } from 'react';
import { connect } from 'react-redux';
import {
  ADD_FAVORITE, REMOVE_FAVORITE, FAVORITES, PLAYER,
} from 'Actions/types';
import { handleFavorite, sendMusicToPlayer } from 'Actions';
import { saveInFavorites, removeFromFavorites } from 'Services/api';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import {
  Artist,
  Card, Container, FavoriteButton, Info, SeeOnDeezer, Title,
} from './styles';

class CardMusic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: null,
    };
    this.handleFavoriteMusic = this.handleFavoriteMusic.bind(this);
    this.checkIfIsFavorited = this.checkIfIsFavorited.bind(this);
  }

  async componentDidMount() {
    await this.checkIfIsFavorited();
  }

  componentDidUpdate(prevProps) {
    const { props, state } = this;
    const actualFavorites = props[FAVORITES];
    const prevFavorites = prevProps[FAVORITES];
    const { favorited } = state;

    if (favorited === null) this.checkIfIsFavorited();
    if (actualFavorites.length !== prevFavorites.length) this.checkIfIsFavorited();
  }

  async checkIfIsFavorited() {
    const { props } = this;
    const favoritesIds = props[FAVORITES];
    const { music: { id } } = props;
    const isFavorited = await favoritesIds.some((favorite) => favorite.id === id);
    if (isFavorited) this.setState({ favorited: true });
    else this.setState({ favorited: false });
  }

  handleFavoriteMusic(music) {
    const { props, state: { favorited } } = this;
    const addToFavorite = props[ADD_FAVORITE];
    const removeFromFavorite = props[REMOVE_FAVORITE];

    if (!favorited) {
      addToFavorite(music);
      this.setState({ favorited: null }, saveInFavorites(music));
    } else {
      removeFromFavorite(music);
      this.setState({ favorited: null }, removeFromFavorites(music));
    }
  }

  render() {
    const { props, state, handleFavoriteMusic } = this;
    const { music } = props;
    const playMusic = props[PLAYER];
    const { favorited } = state;
    const {
      album, artist, title, link, preview,
    } = music;
    return (
      <Container>
        <Title>{title}</Title>
        <Artist>{artist.name}</Artist>
        <Info>
          <FavoriteButton
            onClick={() => handleFavoriteMusic(music)}
            type="submit"
          >
            {!favorited
              ? <FaRegHeart />
              : <FaHeart />}

          </FavoriteButton>
          <SeeOnDeezer href={link} target="_blank">
            Ver no Deezer
          </SeeOnDeezer>
          <button
            type="button"
            onClick={() => playMusic(preview)}
          >
            Play
          </button>
          <Card image={album.cover_big} />
        </Info>
      </Container>
    );
  }
}

const mapDispatchtoProps = (dispatch) => ({
  [ADD_FAVORITE]: (value) => dispatch(handleFavorite(value, 'add')),
  [REMOVE_FAVORITE]: (value) => dispatch(handleFavorite(value, 'remove')),
  [PLAYER]: (url) => dispatch(sendMusicToPlayer(url)),
});

const mapStateToProps = (state) => ({
  [FAVORITES]: state[FAVORITES],
});

export default connect(mapStateToProps, mapDispatchtoProps)(CardMusic);
