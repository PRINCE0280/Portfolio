import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Skills} from "./components/Experience/Skills";
import { Hero } from "./components/Hero/Hero";
import MessageForm from "./components/Message/Message";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <MessageForm/>
      <Contact />
     
    </div>
  );
}

export default App;
