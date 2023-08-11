import './assets/styles/App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/About';
import Header from './components/Header/header'

function App() {
  return (
      <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </>
  );
}



export default App;
