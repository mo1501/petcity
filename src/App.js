
import './App.css';
import { createGlobalStyle } from 'styled-components';
import NavBar from './routes/navbar/navbar.component';

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Montserrat', sans-serif;
  }

`

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <div className="App">
        
        <h2>Page content</h2>
      </div>
    </>
  );
}

export default App;
