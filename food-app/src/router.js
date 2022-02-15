import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
    LoginPage,
    AfterLogin,
    NoMatch,
  } from './pages';

// import { Navbar } from './components/molecules';

function CustomRoutes() {

return ( 
    <Router>

    {/* <section className="App"> */}
    <Routes>
          <Route exact path="/" element={<LoginPage />}/>
          <Route path="/loggedIn" element={<AfterLogin />}/>
          <Route path="*" element={<NoMatch />}/>
    </Routes>
    {/* </section> */}
  </Router>
);
}

export default CustomRoutes;