
import './App.css';
import { createGlobalStyle } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state/store/store.js';
import NavBar from './routes/navbar/navbar.component.jsx';
import HomePage from './routes/home/home.component.jsx';
import CategoriesPage from './routes/categories/categories.component.jsx';
import DealsPage from './routes/deals/deals.component.jsx';
import CartPage from './routes/cart/cart.component.jsx';
import AccountPage from './routes/account/account.component.jsx';
import WhatsNewPage from './routes/what\'s-new/whatsnew.component.jsx';
import ProductPage from './routes/product-page/product-page.component.jsx';
import AuthPage from './routes/authentication/authentication.component.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPasswordPage from './routes/forgot-password/forgot-password-page.component.jsx';
const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Montserrat', sans-serif;
  }

`

function App() {
  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  );
}

export default App;
