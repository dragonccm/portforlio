import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  ClientWork,
  BackToTop,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 overflow-hidden">
        <div className="bg-hero bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <Projects />

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <ClientWork />
        </div>

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>
        </div>
        <div className="relative z-0">
          <Contact />
        </div>

        <BackToTop />
      </div>
    </BrowserRouter>
  );
};

export default App;
