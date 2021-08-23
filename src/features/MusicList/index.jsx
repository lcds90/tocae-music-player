import { Component } from 'react';
import { connect } from 'react-redux';
import { searchForMoreMusic } from 'Services/api';
import InfiniteScroll from 'react-infinite-scroll-component';
import { TOP_CHART, SEARCH, RESULTS } from 'Actions/types';
import { CardMusic } from 'Components';
import { MusicList, Title } from './styles';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      results: [],
    };
    this.fetchMoreData = this.fetchMoreData.bind(this);
  }

  componentDidMount() {
    const { props } = this;
    const { results: { next } } = props[RESULTS];
    const { isUserSearching } = props[SEARCH];
    const {
      topChart: { data },
    } = props[TOP_CHART];
    const { results: { data: musics, total } } = props[RESULTS];

    this.setState({
      isUserSearching,
      next,
      topChart: data,
      musics,
      total,
    });
  }

  async fetchMoreData() {
    alert('ok');
    const { results: { next } } = props[RESULTS];
    const results = await searchForMoreMusic(next);
  }

  render() {
    const { props } = this;
    const { isUserSearching } = props[SEARCH];
    const {
      topChart: { data },
    } = props[TOP_CHART];

    const { results: { data: musics, total } } = props[RESULTS];
    if (isUserSearching && musics && total > 0) {
      return (
        <InfiniteScroll
          dataLength={musics.length}
          next={this.fetchMoreData}
          hasMore
          loader={<h4>Loading...</h4>}
        >
          <MusicList userSearching={isUserSearching}>
            <Title>Resultados de pesquisa</Title>
            {musics.length === 0 && <span>Pesquisando...</span>}
            {musics.map((music) => (
              <CardMusic key={music.id} music={music} />
            ))}
          </MusicList>
        </InfiniteScroll>
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
