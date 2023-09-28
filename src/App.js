
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
import ProductPage from './routes/product-page/product-page.component';
import AuthPage from './routes/authentication/authentication.component';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPasswordPage from './routes/forgot-password/forgot-password-page.component';
const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Montserrat', sans-serif;
  }

`

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<AuthPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/home' element={<NavBar />} >
          <Route index element={<HomePage />} />
          <Route path='/home/categories' element={<CategoriesPage />} />
          <Route path='/home/deals' element={<DealsPage />} />
          <Route path='/home/whatsnew/' element={<WhatsNewPage />} />
          <Route path='/home/cart/' element={<CartPage />} />
          <Route path='/home/categories/product/:id' element={<ProductPage />} />
          <Route path='/home/account' element={<AccountPage />} />


        </Route>



      </Routes>
    </>
  );
}

export default App;
