import { Component } from 'react';
import { connect } from 'react-redux';
import { PLAYER } from 'Actions/types';
import deezer from 'Assets/deezer.png';
import {
  Audioplayer, Container, MusicInfo, MusicCover, SeeOnDeezer,
} from './styles';
import './player.css';

class Player extends Component {
  componentDidUpdate(prevProps) {
    const { props, state } = this;
    const { id } = props[PLAYER];
    const { id: oldId } = prevProps[PLAYER];

    if (id !== oldId) this.checkIfIsFavorited();
  }

  render() {
    const {
      musicPlaying,
    } = this.props;
    const {
      artist,
      album,
      title,
      link,
      preview,
    } = musicPlaying;

    if (musicPlaying) {
      return (
        <Container>
          <MusicCover image={album.cover} />
          <MusicInfo>
            {artist.name}
            <br />
            {title}
            <SeeOnDeezer logo={deezer} href={link} target="_blank" />
          </MusicInfo>
          <Audioplayer
            src={preview}
            controls
            autoPlay
          />
        </Container>
      );
    }
    return null;
  }
}

const mapStateToProps = (state) => ({
  musicPlaying: state.tracks,
});

export default connect(mapStateToProps)(Player);
