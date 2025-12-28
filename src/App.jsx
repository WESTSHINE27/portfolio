import IntroSection from "./components/IntroSection/IntroSection";
import "./App.scss";
import Threads from "./components/ThreadBackground/Threads";
import WorkDataSection from "./components/WorkDataSection/WorkDataSection";
import InfoListSection from "./components/InfoListSection/InfoListSection";
function App() {
  return (
    <>
      <div className="main">
        <Threads amplitude={2} distance={0} enableMouseInteraction={false} />
        <IntroSection />
        <WorkDataSection/>
        <InfoListSection/>
      </div>
    </>
  );
}

export default App;
