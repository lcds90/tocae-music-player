import { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  TOP_CHART,
  SEARCH,
  RESULTS,
} from 'Actions/types';

class List extends PureComponent {
  render() {
    const { props } = this;
    const { isUserSearching } = props[SEARCH];
    const { topChart: { data } } = props[TOP_CHART];
    const { resultsFromSearch: { data: musics, total } } = props[RESULTS];

    if (total === 0) {
      return <div>Nenhum resultado encontrado</div>;
    }

    if (isUserSearching && musics && total > 0) {
      return (
        <div>
          {musics.length === 0 && <span>Pesquisando...</span>}
          {musics.map((music) => (
            <div>{`${music.title} - ${music.artist.name}`}</div>
          ))}
        </div>
      );
    }

    return (
      <div>
        <div>
          {
          data
            ? data.map((element) => <p key={element.id}>{element.title}</p>)
            : <div>Carregando...</div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  [TOP_CHART]: state[TOP_CHART],
  [SEARCH]: state[SEARCH],
  [RESULTS]: state[RESULTS],
});

export default connect(mapStateToProps)(List);
