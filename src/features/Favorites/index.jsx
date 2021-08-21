import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { FAVORITES } from 'Actions/types';

class Favorites extends PureComponent {
  render() {
    const { props } = this;
    const favorites = props[FAVORITES];

    return (
      <div>
        Favoritos
        {favorites.map((favorite) => (
          <div key={favorite.id}>{favorite.title}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  [FAVORITES]: state[FAVORITES],
});

export default connect(mapStateToProps)(Favorites);
