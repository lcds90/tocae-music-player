import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CardMusic } from 'Components';
import { FavoritesList, Title } from './styles';

class Favorites extends PureComponent {
  render() {
    const { favoritedMusics, isUserSearching } = this.props;

    return (
      <FavoritesList userSearching={isUserSearching}>
        <Title>Favoritos</Title>
        {favoritedMusics.map((favorite) => (
          <CardMusic music={favorite} key={favorite.id}>{favorite.title}</CardMusic>
        ))}
      </FavoritesList>
    );
  }
}

const mapStateToProps = (state) => ({
  favoritedMusics: state.tracks,
  isUserSearching: state.search,

});

export default connect(mapStateToProps)(Favorites);
