import logo from './logo.svg';
import './App.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Montserrat', sans-serif;
  }

`

function App() {
  return (
    <>
    <GlobalStyle/>
    <div className="App">
      <p>Helo</p>
    </div>
    </>
  );
}

export default App;
