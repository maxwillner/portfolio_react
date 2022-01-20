import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Project from './components/Project';


function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Project></Project>
        <Portfolio></Portfolio>
        <Resume></Resume>
        <ContactForm></ContactForm>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
