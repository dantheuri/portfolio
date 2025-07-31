import Header from "./components/Header";
import Skills from "./components/Skills";
import TabNavigation from "./components/TabNavigation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#151515] text-white font-space flex flex-col items-center gap-35">
      <Header />
      <Skills />
      <TabNavigation />
      <div className="bg-[#242424] w-full flex flex-col items-center">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
