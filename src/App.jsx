import IntroSection from "./components/IntroSection/IntroSection";
import "./App.scss";
import Threads from "./components/ThreadBackground/Threads";
import WorkDataSection from "./components/WorkDataSection/WorkDataSection";
function App() {
  return (
    <>
      <div className="main">
        <Threads amplitude={2} distance={0} enableMouseInteraction={false} />
        <IntroSection />
        <WorkDataSection/>
      </div>
    </>
  );
}

export default App;
