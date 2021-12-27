import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <Resume></Resume>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
