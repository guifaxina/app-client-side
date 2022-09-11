import { Dashboard } from "./components/Dashboard/Dashboard";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AfterLogin from "./pages/ProductsPage/Products";
import NotFound from "./pages/NotFound/NotFound";
import Modal from 'react-modal'

function App() {
  Modal.setAppElement('#root')

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path="/home" element={<AfterLogin />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
