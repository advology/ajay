import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Header } from './components/Header';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import { Provider } from "react-redux";
import store from './components/Store';
import LeadFormPopup from './components/LeadFormPopup';
import { MobMenu } from './components/MobMenu';
import { Portfolio } from "./pages/Portfolio";



function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Provider store={store}>
            <Header />
              <Routes>
                <Route index element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
              </Routes>
            <Footer/>
            <LeadFormPopup />
            <MobMenu/>
          </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
