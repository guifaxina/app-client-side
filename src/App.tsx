import { Dashboard } from "./components/Dashboard/Dashboard";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BuyPage from './pages/BuyPage/BuyPage'
import NotFound from "./pages/NotFound/NotFound";
import Modal from 'react-modal'
import ProductsPage from "./pages/ProductsPage/ProductsPage";


function App() {
  Modal.setAppElement('#root')

  return (
    <>
      <Router>
        <Routes>
          <Route path='/'     element={<Dashboard />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
          <Route path='/buy-page' element={<BuyPage />}> </Route>
          <Route path='*'     element={<NotFound />}></Route>
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
