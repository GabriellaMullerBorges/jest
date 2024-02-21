import { render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import { waitFor } from '@testing-library/react';
import App from './App'

// obs: elementos que começam c Query não falharão caso o elemento não seja encontrado
//find espera o elemento aparecer em tela 

test ('title', () => {
    const { getByText } = render(<App />);
    const testElement = getByText('Projeto de Teste');
    expect(testElement).toBeInTheDocument;
    expect(testElement).toHaveClass('test');
})

describe('App Component', () => {
    it('it should be able to add new itens to the list' , () =>{
        const { getByText } = render(<App />);
      expect(getByText('Java')).toBeInTheDocument;  
      expect(getByText('JavaScript')).toBeInTheDocument; 
    } )
});


describe('App Component', () => {
    it('should change the button color to red on click', async () => {
      const { getByText } = render(<App />);
      const addButton = getByText('Adicionar');
  
      userEvent.click(addButton);
  
      await waitFor(() => {
        expect(addButton).toHaveStyle('background-color: red');
      })
    });
  });

  describe('App Component', () => {
    it('it should render a list of itens regarding programming languages' , async  () =>{
        const { getByText, debug } = render(<App />);
        const addButton = getByText('Adicionar');
    
        debug();
        expect(addButton).toBeInTheDocument;
        userEvent.click(addButton);    

        await waitFor(() => {
            expect(getByText('Python')).toBeInTheDocument
          })
          debug()
       
    } )
});