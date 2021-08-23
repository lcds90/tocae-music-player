import { Component } from 'react';
import { connect } from 'react-redux';
import { PLAYER } from 'Actions/types';
import { Container, Audioplayer } from './styles';

class Player extends Component {
  componentDidUpdate(prevProps) {
    const { props, state } = this;
    const actualPlaying = props[PLAYER];
    const previousPlaying = prevProps[PLAYER];

    if (actualPlaying.length !== previousPlaying.length) this.checkIfIsFavorited();
  }

  render() {
    const { props } = this;
    const { musicPlaying } = props[PLAYER];

    return (
      <Container>
        <Audioplayer
          src={musicPlaying}
          controls
          autoPlay
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  [PLAYER]: state[PLAYER],
});

export default connect(mapStateToProps)(Player);
