import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import DishPage from "./pages/DishPage/DishPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import BlogArticlePage from "./pages/BlogArticlePage/BlogArticlePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <main className="main">
            <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="/menu" element={<MenuPage/>} />
              <Route path="/contacts" element={<ContactsPage/>} />
              <Route path="/about" element={<AboutPage/>} />
              <Route path="/portfolio" element={<PortfolioPage/>} />
              <Route path="/dish/:id" element={<DishPage/>} />
              <Route path="/blog" element={<BlogPage/>} />
              <Route path="/article" element={<BlogArticlePage/>} />
            </Routes>
          </main>      
        {/* <Footer/> */}
      </div>

    </Router>
  );
}

export default App;
