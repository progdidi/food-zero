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
    <div className="App">
      <Header/>
        <main className="main">
          {/* <MainPage/> */}
          {/* <MenuPage/> */}
          {/* <ContactsPage/> */}
          {/* <AboutPage/> */}
          {/* <PortfolioPage/> */}
          {/* <DishPage/> */}
          <BlogPage/>
          {/* <BlogArticlePage/> */}
        </main>      
      <Footer/>
    </div>
  );
}

export default App;
