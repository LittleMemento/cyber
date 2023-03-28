import Digits from "./components/digits/Digits";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Register from "./components/register/Register";
import Section from "./components/sectionfirst/Section";
import Sectionb from "./components/sectionsecond/Sectionb";
import Turnir from "./components/turnir/Turnir";

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Sectionb />
      <Turnir />
      <Gallery />
      <Digits />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
