import "./style/general.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";

const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Hero/>
        <Features/>
      </main>
    </div>
    )
}

export default App;