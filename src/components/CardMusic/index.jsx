import { Component } from 'react';
import { connect } from 'react-redux';
import { ADD_FAVORITE, REMOVE_FAVORITE } from 'Actions/types';
import { handleFavorite } from 'Actions';
import { getFavorites, saveInFavorites, removeFromFavorites } from 'Services/api';

class CardMusic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: null,
    };
    this.handleFavoriteMusic = this.handleFavoriteMusic.bind(this);
    this.checkIfIsFavorited = this.checkIfIsFavorited.bind(this);
  }

  componentDidMount() {
    this.checkIfIsFavorited();
  }

  checkIfIsFavorited() {
    const { music: { id } } = this.props;
    const favoritesIds = getFavorites();
    const isFavorited = favoritesIds.find((favorite) => favorite.id === id);
    if (isFavorited) this.setState({ favorited: true });
    else this.setState({ favorited: false });
  }

  handleFavoriteMusic(music) {
    const { props, state: { favorited } } = this;
    const addToFavorite = props[ADD_FAVORITE];
    const removeFromFavorite = props[REMOVE_FAVORITE];

    if (!favorited) {
      addToFavorite(music);
      this.setState({ favorited: true }, saveInFavorites(music));
    } else {
      removeFromFavorite(music);
      this.setState({ favorited: false }, removeFromFavorites(music));
    }
  }

  render() {
    const { props, state, handleFavoriteMusic } = this;
    const { music } = props;
    const { favorited } = state;
    const { album, artist, title } = music;

    return (
      <section style={{ display: 'flex' }}>
        {`${title} - ${artist.name}`}
        <article>
          <button
            onClick={() => handleFavoriteMusic(music)}
            type="submit"
          >
            {!favorited
              ? 'Adicionar aos Favoritos'
              : 'Remover dos favoritos'}

          </button>
        </article>
      </section>
    );
  }
}

const mapDispatchtoProps = (dispatch) => ({
  [ADD_FAVORITE]: (value) => dispatch(handleFavorite(value, 'add')),
  [REMOVE_FAVORITE]: (value) => dispatch(handleFavorite(value, 'remove')),
});

export default connect(null, mapDispatchtoProps)(CardMusic);
