import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from "../App";

describe('Testa pagina feedback', () => {
    const playerA = {
        player: {
            name: 'João',
            assertions: 3,
            score: 4,
            gravatarEmail: 'j@hot.com'
        }
    }
    const playerB = {
        player: {
            name: 'Eliabe',
            assertions: 2,
            score: 4,
            gravatarEmail: 'Eliabe@hot.com'
        }
    }
  it('Test se os datatestid estão no document', () => {
   renderWithRouterAndRedux(<App />, playerA, '/feedback');

    const score = screen.getByTestId('feedback-total-score')
    expect(score).toBeInTheDocument();
    const assertion = screen.getByTestId('feedback-total-question')
    expect(assertion).toBeInTheDocument();
    const img = screen.getByTestId('header-profile-picture')
    expect(img).toBeInTheDocument();
    const name = screen.getByTestId('header-player-name')
    expect(name).toBeInTheDocument();
    const header = screen.getByTestId('header-score')
    expect(header).toBeInTheDocument();
    

    });
  it('teste botao Play Again', () => {
    const { history } = renderWithRouterAndRedux(<App />, playerA, '/feedback');

    const play = screen.getByRole('button', { name: /Play Again/i });
        
    expect(play).toBeInTheDocument();
    expect(play).toBeEnabled();
    userEvent.click(play);

    expect(history.location.pathname).toBe('/')
   
  });
//   test('teste botao ranking', () => {
//     const { history } = renderWithRouterAndRedux(<App />, playerA, '/feedback');
//    const btn = screen.getByTestId('btn-ranking')
//     expect(btn).toBeInTheDocument();
//     userEvent.click(btn);
//     expect(history.location.pathname).toBe('/ranking')
//     const ranking = screen.getByTestId('ranking-title')
//   });
  test('testa mensagem boa', () => {
    const { getByText } = renderWithRouterAndRedux(<App />, playerA, '/feedback')
    const wellDone = getByText(/well done!/i)
    expect(wellDone).toBeInTheDocument()
  });
  test('testa mensagem ruim', () => {
    const { getByText } = renderWithRouterAndRedux(<App />, playerB, '/feedback')
    const wellDone = getByText(/Could be better.../i)
    expect(wellDone).toBeInTheDocument()
  })
    
});