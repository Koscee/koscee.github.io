import './App.css';
import {
  Footer,
  HeroSection,
  ProjectSection,
  SkillsSection,
} from './components';

function App() {
  return (
    <div className="app_wrapper">
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App;
