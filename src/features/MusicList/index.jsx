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
import { MusicList, Title } from './styles';

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
        <MusicList>
          <Title>Resultados de pesquisa</Title>
          {musics.length === 0 && <span>Pesquisando...</span>}
          {musics.map((music) => (
            <CardMusic
              key={music.id}
              music={music}
            />
          ))}
        </MusicList>
      );
    }

    return (
      <MusicList>
        <Title>Top 10</Title>
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
      </MusicList>
    );
  }
}

const mapStateToProps = (state) => ({
  [TOP_CHART]: state[TOP_CHART],
  [SEARCH]: state[SEARCH],
  [RESULTS]: state[RESULTS],
});

export default connect(mapStateToProps)(List);
