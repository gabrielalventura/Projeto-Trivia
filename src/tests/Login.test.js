import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Login from '../pages/Login';
import App from '../App';

describe('Testa o Componente login', () => {
  it('Test inputs e se botão esta disabled', () => {
    renderWithRouterAndRedux(<Login />);

    const name = screen.getByTestId('input-player-name')
    expect(name).toBeInTheDocument();
    const email = screen.getByTestId('input-gravatar-email')
    expect(email).toBeInTheDocument();
    const play = screen.getByTestId('btn-play')
    expect(play).toBeInTheDocument();
    expect(play).toBeDisabled();
    });

    it('Teste se o botão play fica enabled e se é clicavel', () => {
        const { history } = renderWithRouterAndRedux(<App />);
    
        const name = screen.getByTestId('input-player-name')
        expect(name).toBeInTheDocument();
        const email = screen.getByTestId('input-gravatar-email')
        expect(email).toBeInTheDocument();
        const play = screen.getByTestId('btn-play')
        expect(play).toBeInTheDocument();
        userEvent.type(name, 'joão');
        userEvent.type(email, 'j@hot.com');
        expect(play).toBeEnabled();
        userEvent.click(play);
         waitFor (() => expect(history.location.pathname).toBe('/game'))
        });

    it('Teste do botão settings', () => {
        const { history } = renderWithRouterAndRedux(<App />);
        
        const set = screen.getByTestId('btn-settings')
        expect(set).toBeInTheDocument();
        userEvent.click(set);
        expect(history.location.pathname).toBe('/settings')
        });
        it('Testa se em caso da API retornar como invalida, o usuário retorna a página de login', () => {

        });
});