import Digits from "./components/digits/Digits";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
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
    </div>
  );
}

export default App;
