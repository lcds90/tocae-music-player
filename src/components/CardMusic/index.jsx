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
    };
    this.handleFavoriteMusic = this.handleFavoriteMusic.bind(this);
    this.checkIfIsFavorited = this.checkIfIsFavorited.bind(this);
    this.convertTime = this.convertTime.bind(this);
  }

  async componentDidMount() {
    await this.checkIfIsFavorited();
  }

  componentDidUpdate(prevProps) {
    const { user: actual } = this.props;
    const { user: prev } = prevProps;
    const { favorited } = this.state;

    if (favorited === null) this.checkIfIsFavorited();
    if (actual.length !== prev.length) this.checkIfIsFavorited();
  }

  async checkIfIsFavorited() {
    const { user, music: { id } } = this.props;
    console.log(this.props);
    const isFavorited = await user.some((favorite) => favorite.id === id);
    if (isFavorited) this.setState({ favorited: true });
    else this.setState({ favorited: false });
  }

  handleFavoriteMusic(music) {
    const {
      props: { addFavorite, removeFavorite },
      state: { favorited },
    } = this;

    if (!favorited) {
      addFavorite(music);
      this.setState({ favorited: null }, saveInFavorites(music));
    } else {
      removeFavorite(music);
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
      props: {
        music, playMusic,
      },
      state: {
        favorited,
      },
      handleFavoriteMusic, convertTime,
    } = this;
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
  addFavorite: (payload) => dispatch(handleFavorite(payload, 'add')),
  removeFavorite: (payload) => dispatch(handleFavorite(payload, 'remove')),
  playMusic: (payload) => dispatch(sendMusicToPlayer(payload)),
});

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchtoProps)(CardMusic);
