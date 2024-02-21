import { render} from '@testing-library/react'
import '@testing-library/jest-dom';
import App from './App'

// obs: elementos que começam c Query não falharão caso o elemento não seja encontradol
test ('sum', () => {
    const { getByText } = render(<App/>)

    const testElement = getByText('Projeto de Teste');
    expect(testElement).toBeInTheDocument;
    expect(testElement).toHaveClass('test');

})