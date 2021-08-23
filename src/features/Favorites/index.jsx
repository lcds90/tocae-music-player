import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { FAVORITES } from 'Actions/types';
import { CardMusic } from 'Components';
import FavoritesList from './styles';

class Favorites extends PureComponent {
  render() {
    const { props } = this;
    const favorites = props[FAVORITES];

    return (
      <FavoritesList>
        Favoritos
        {favorites.map((favorite) => (
          <CardMusic music={favorite} key={favorite.id}>{favorite.title}</CardMusic>
        ))}
      </FavoritesList>
    );
  }
}

const mapStateToProps = (state) => ({
  [FAVORITES]: state[FAVORITES],
});

export default connect(mapStateToProps)(Favorites);
