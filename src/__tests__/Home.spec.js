import { cleanup, screen } from '@testing-library/react';
import Home from '../pages/Home';
import renderWithRedux from './renderWithRedux';

describe('<Home /> Tests Section', () => {
  beforeEach(cleanup);

  it('should contain title Tocaê', () => {
    const { getByRole,  } = renderWithRedux(<Home />);
    const title = getByRole('heading', { name: /tocaê/i });
    expect(title).toBeInTheDocument();
  });
});
