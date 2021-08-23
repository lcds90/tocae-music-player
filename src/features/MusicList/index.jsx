import { Component } from 'react';
import { connect } from 'react-redux';
import { TOP_CHART, SEARCH, RESULTS } from 'Actions/types';
import { CardMusic } from 'Components';
import { searchForMoreMusic } from 'Services/api';
import { MusicList, Title } from './styles';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      next: '',
      resultsFromNext: [],
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { props } = this;
    const { results: { next } } = props[RESULTS];
    if (next !== prevProps[RESULTS].results.next) {
      this.setState({ next });
    }
  }

  async handleScroll({ target }, next) {
    const isBottom = target.scrollHeight - target.scrollTop === target.clientHeight;
    if (isBottom && next.length > 0) {
      const { data, next: newNext } = await searchForMoreMusic(next);
      this.setState(
        {
          resultsFromNext: data,
          next: newNext,
        },
        () => console.log(this.state.next),
      );
    }
  }

  render() {
    const { props, state } = this;
    const { isUserSearching } = props[SEARCH];
    const {
      topChart: { data },
    } = props[TOP_CHART];
    const {
      results: { data: musics, total },
    } = props[RESULTS];

    const { resultsFromNext, next } = state;
    if (isUserSearching && musics && total > 0) {
      return (
        <>
          <MusicList
            onScroll={(e) => this.handleScroll(e, next)}
            userSearching={isUserSearching}
          >
            <Title>Resultados de pesquisa</Title>
            {musics.length === 0 && <span>Pesquisando...</span>}
            {musics.map((music) => (
              <CardMusic key={music.id} music={music} />
            ))}
            {resultsFromNext.length > 0
              && resultsFromNext.map((music) => (
                <CardMusic key={music.id} music={music} />
              ))}
          </MusicList>
        </>
      );
    }

    return (
      <MusicList userSearching={isUserSearching}>
        <Title>Top 10</Title>
        {data ? (
          data.map((music) => <CardMusic music={music} key={music.id} />)
        ) : (
          <div>Carregando...</div>
        )}
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
