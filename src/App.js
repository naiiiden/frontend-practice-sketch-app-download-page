import "./style/general.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Hero/>
        <Features/>
      </main>
      <Footer/>
    </div>
    )
}

export default App;