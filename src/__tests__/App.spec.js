import { render, screen } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import store from '../store';

describe('Teste de rotas', () => {
  test('Renderiza a página incial', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );

    const title = screen.getByRole('heading', {
      name: /tocaê/i,
      level: 1,
    });
    expect(title).toBeInTheDocument();
  });
});
