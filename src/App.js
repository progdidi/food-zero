import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import MenuPage from "./pages/MenuPage/MenuPage";

function App() {
  return (
    <div className="App">
      <Header/>
        <main className="main">
          {/* <MainPage/> */}
          {/* <MenuPage/> */}
          <ContactsPage/>
        </main>      
      <Footer/>
    </div>
  );
}

export default App;
