
import './App.css';
import { createGlobalStyle } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import NavBar from './routes/navbar/navbar.component';
import HomePage from './routes/home/home.component';
import CategoriesPage from './routes/categories/categories.component';
import DealsPage from './routes/deals/deals.component';
import CartPage from './routes/cart/cart.component';
import AccountPage from './routes/account/account.component';
import WhatsNewPage from './routes/what\'s-new/whatsnew.component';

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Montserrat', sans-serif;
  }

`

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<NavBar />} >
          <Route index element={<HomePage />} />
          <Route path='/categories' element={<CategoriesPage />} />
          <Route path='/deals' element={<DealsPage />} />
          <Route path='/whatsnew/' element={<WhatsNewPage />} />
          <Route path='/cart/' element={<CartPage />} />

          <Route path='/account' element={<AccountPage />} />


        </Route>

      </Routes>
    </>
  );
}

export default App;