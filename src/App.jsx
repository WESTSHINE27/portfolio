import IntroSection from "./components/IntroSection/IntroSection";
import "./App.scss";
import Threads from "./components/ThreadBackground/Threads";
import WorkDataSection from "./components/WorkDataSection/WorkDataSection";
import ProjectListSection from "./components/ProjectListSection/ProjectListSection";
import EducationListSection from "./components/EducationListSection/EducationListSection";
import ExperienceListSection from "./components/ExperienceListSection/ExperienceListSection";
import ContactListSection from "./components/ContactListSection/ContactListSection";
import HeaderNavBar from "./components/HeaderNavBar/HeaderNavBar";

function App() {

  return (
    <>
      <div className="main">
        <HeaderNavBar />
        <Threads amplitude={2} distance={0} enableMouseInteraction={false} />
        <IntroSection/>
        <WorkDataSection />
        <ProjectListSection />
        <EducationListSection />
        <ExperienceListSection />
        <ContactListSection />
      </div>
    </>
  );
}

export default App;
