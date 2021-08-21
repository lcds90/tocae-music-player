import { PureComponent } from 'react';
import { connect } from 'react-redux';

import {
  TOP_CHART,
  SEARCH,
  RESULTS,
} from 'Actions/types';
import {
  CardMusic,
} from 'Components';

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
            <CardMusic
              key={music.id}
              music={music}
            />
          ))}
        </div>
      );
    }

    return (
      <div>
        <div>
          {
          data
            ? data.map((music) => (
              <CardMusic
                music={music}
                key={music.id}
              />
            ))
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
