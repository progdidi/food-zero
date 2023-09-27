import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import MenuPage from "./pages/MenuPage/MenuPage";

function App() {
  return (
    <div className="App">
      <Header/>
        <main className="main">
          {/* <MainPage/> */}
          <MenuPage/>
        </main>      
      <Footer/>
    </div>
  );
}

export default App;
