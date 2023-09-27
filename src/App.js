import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  return (
    <div className="App">
      <Header/>
        <main className="main">
          {/* <MainPage/> */}
          {/* <MenuPage/> */}
          {/* <ContactsPage/> */}
          <AboutPage/>
        </main>      
      <Footer/>
    </div>
  );
}

export default App;
