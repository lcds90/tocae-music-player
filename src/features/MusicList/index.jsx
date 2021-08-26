import { Component } from 'react';
import { connect } from 'react-redux';
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
    const { props: { search } } = this;
    const { results: { next } } = search;
    if (next !== prevProps.search.results.next) {
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
      );
    }
  }

  render() {
    const { search, tracks } = this.props;
    const { isUserSearching } = search;
    const {
      topChart: { data },
      results: { data: musics, total },
    } = tracks;

    const { resultsFromNext, next } = this.state;
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
  tracks: state.tracks,
  search: state.search,
});

export default connect(mapStateToProps)(List);
