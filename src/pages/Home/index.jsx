import PropTypes from 'prop-types';

import {
  Component,
} from 'react';

import {
  connect,
} from 'react-redux';

import {
  sendData,
} from '@actions';

import {
  getTopChart,
} from '@services/api';
import {
  DATA,
} from '@/global';

import {
  Input, List,
} from '@/components';

import {
  Container, Title,
} from './styles';

class Home extends Component {
  constructor() {
    super();
    this.fetchTopChart = this.fetchTopChart.bind(this);
  }

  async componentDidMount() {
    await this.fetchTopChart();
  }

  async fetchTopChart() {
    const sendData = this.props[DATA];
    const results = await getTopChart();
    await sendData(results);
  }

  render() {
    return (
      <Container>
        <Title>Tocaê</Title>
        <Input />
        <List />
      </Container>
    );
  }
}

const mapDispatchtoProps = (dispatch) => ({
  [DATA]: (musics) => dispatch(sendData([...musics])),
});

const mapStateToProps = (state) => ({ [DATA]: state[DATA] });

export default connect(mapStateToProps, mapDispatchtoProps)(Home);
