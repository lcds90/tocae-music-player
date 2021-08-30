import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CardMusic } from 'Components';
import { FavoritesList, Title } from './styles';

class Favorites extends PureComponent {
  render() {
    console.log(this.props);
    const { user: { favoritedMusics }, search: { isUserSearching } } = this.props;

    return (
      <FavoritesList userSearching={isUserSearching}>
        <Title>Favoritos</Title>
        {favoritedMusics && favoritedMusics.map((favorite) => (
          <CardMusic music={favorite} key={favorite.id}>{favorite.title}</CardMusic>
        ))}
      </FavoritesList>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  search: state.search,

});

export default connect(mapStateToProps)(Favorites);
