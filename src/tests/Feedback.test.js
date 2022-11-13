import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Feedback from '../pages/Feedback';

describe('Testa pagina feedback', () => {
  it('Test se os datatestid estão no document', () => {
   renderWithRouterAndRedux(<Feedback />);

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
  it('teste botões', () => {
    const { history } = renderWithRouterAndRedux(<Feedback />);

    const play = screen.getByRole('button', { name: /Play/i });
        
    expect(play).toBeInTheDocument();
    expect(play).toBeEnabled();
    userEvent.click(play);

    expect(history.location.pathname).toBe('/')
    // const btn = screen.getByTestId('btn-ranking')
    // expect(btn).toBeInTheDocument();
    // userEvent.click(btn);
    // expect(history.location.pathname).toBe('/ranking')
    // const ranking = screen.getByTestId('ranking-title')
  });
    
});