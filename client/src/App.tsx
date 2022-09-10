import { Dashboard } from "./components/Dashboard/Dashboard";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AfterLogin from "./pages/AfterLoginTest/AfterLogin";
import NotFound from "./pages/NotFound/NotFound";

function App() {
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
