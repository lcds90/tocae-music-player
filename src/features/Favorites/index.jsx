import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { FAVORITES, SEARCH } from 'Actions/types';
import { CardMusic } from 'Components';
import { FavoritesList, Title } from './styles';

class Favorites extends PureComponent {
  render() {
    const { props } = this;
    const favorites = props[FAVORITES];
    const { isUserSearching } = props[SEARCH];

    return (
      <FavoritesList userSearching={isUserSearching}>
        <Title>Favoritos</Title>
        {favorites.map((favorite) => (
          <CardMusic music={favorite} key={favorite.id}>{favorite.title}</CardMusic>
        ))}
      </FavoritesList>
    );
  }
}

const mapStateToProps = (state) => ({
  [FAVORITES]: state[FAVORITES],
  [SEARCH]: state[SEARCH],

});

export default connect(mapStateToProps)(Favorites);
