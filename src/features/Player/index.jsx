import { Component } from 'react';
import { connect } from 'react-redux';
import { PLAYER } from 'Actions/types';
import {
  FaFacebook, FaInstagram, FaLinkedin, FaYoutube,
} from 'react-icons/fa';
import { Container, Audioplayer, ContainerMediaSocial } from './styles';

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
        <ContainerMediaSocial>
          <a href="https://www.facebook.com/manipulae/" target="_blank" rel="noreferrer">
            <FaFacebook fontSize="2rem" title="Página do Facebook da Manipulaê" />
          </a>
          <a href="https://www.instagram.com/manipulaebr/?hl=pt-br" target="_blank" rel="noreferrer">
            <FaInstagram fontSize="2rem" title="Página do Instagram da Manipulaê" />
          </a>
          <a href="https://www.linkedin.com/company/manipula%C3%AA/" target="_blank" rel="noreferrer">
            <FaLinkedin fontSize="2rem" title="Página do Linkedin da Manipulaê" />
          </a>
          <a href="https://www.youtube.com/channel/UCsW1M0ci-vcxcv5PPb9VFwg" target="_blank" rel="noreferrer">
            <FaYoutube fontSize="2rem" title="Página do Youtube da Manipulaê" />
          </a>
        </ContainerMediaSocial>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  [PLAYER]: state[PLAYER],
});

export default connect(mapStateToProps)(Player);
