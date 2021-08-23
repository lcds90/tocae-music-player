import { Component } from 'react';
import { connect } from 'react-redux';
import deezer from 'Assets/deezer.png';
import {
  ADD_FAVORITE, REMOVE_FAVORITE, FAVORITES, PLAYER,
} from 'Actions/types';
import { handleFavorite, sendMusicToPlayer } from 'Actions';
import { saveInFavorites, removeFromFavorites } from 'Services/api';
import { FaHeart, FaPlayCircle, FaRegHeart } from 'react-icons/fa';
import {
  Artist,
  Card, Container, Duration, FavoriteButton, Info, Play, SeeOnDeezer, Title,
} from './styles';

class CardMusic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: null,
      duration: null,
    };
    this.handleFavoriteMusic = this.handleFavoriteMusic.bind(this);
    this.checkIfIsFavorited = this.checkIfIsFavorited.bind(this);
    this.convertTime = this.convertTime.bind(this);
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

  convertTime(seg) {
    let resto = seg % (60 * 60);
    const minutos = Math.floor(seg / 60).toString();

    resto %= 60;
    const segundos = Math.ceil(resto).toString();

    return `${minutos}:${segundos.length === 1 ? `${segundos}0` : segundos}`;
  }

  render() {
    const {
      props, state, handleFavoriteMusic, convertTime,
    } = this;
    const { music } = props;
    const playMusic = props[PLAYER];
    const { favorited } = state;
    const {
      album, artist, title, link, preview, duration,
    } = music;
    return (
      <Container>
        <Artist>{artist.name}</Artist>
        <Title>{title}</Title>
        <Info>
          <FavoriteButton
            onClick={() => handleFavoriteMusic(music)}
            type="submit"
          >
            {!favorited
              ? <FaRegHeart />
              : <FaHeart />}

          </FavoriteButton>
          <SeeOnDeezer logo={deezer} href={link} target="_blank" />
          <Play
            type="button"
            onClick={() => playMusic(music)}
          >
            <FaPlayCircle />
          </Play>
          <Duration>
            {convertTime(duration)}
          </Duration>
          <Card image={album.cover_big} />
        </Info>
      </Container>
    );
  }
}

const mapDispatchtoProps = (dispatch) => ({
  [ADD_FAVORITE]: (value) => dispatch(handleFavorite(value, 'add')),
  [REMOVE_FAVORITE]: (value) => dispatch(handleFavorite(value, 'remove')),
  [PLAYER]: (music) => dispatch(sendMusicToPlayer(music)),
});

const mapStateToProps = (state) => ({
  [FAVORITES]: state[FAVORITES],
});

export default connect(mapStateToProps, mapDispatchtoProps)(CardMusic);
