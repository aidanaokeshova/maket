import "./App.scss";
import About from "./components/About/About";
import Card from "./components/Cards/Card";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Man from "./components/Man/Man";
import Sub from "./components/Sub/Sub";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import End from "./components/End/End";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Info />
      <Card />
      <Man />
      <Team />
      <Sub />
      <Footer />
      <End />
    </div>
  );
}

export default App;
