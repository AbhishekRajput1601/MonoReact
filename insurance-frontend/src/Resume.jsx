import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Achievements from "./components/Achievements";

export default function Resume() {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-8">

        <PersonalInfo />

        <Education />

        <Experience />

        <Projects />

        <TechStack />

        <Achievements />

      </div>
    </div>
  );
}