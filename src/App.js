import './App.css';
import {EmploymentHistory} from "./components/EmploymentHistory";
import {Education} from "./components/Education";
import {SocialLinks} from "./components/SocialLinks";

function App() {
  return (
      <div className="App grid grid-cols-1 lg:grid-cols-[1fr_1fr] lg:grid-rows-[10rem_10rem_2rem_1fr] lg:gap-5 xl:gap-x-20 my-5">
          <div className="order-1 lg:justify-self-start lg:order-2 px-5 pb-3 lg:p-0">
              <div className="max-w-lg">
                  <h1 className="text-4xl md:text-7xl font-bold">Andrew Nash</h1>
                  <h3 className="text-lg md:text-4xl">Software Engineer</h3>
              </div>
          </div>
          <div className="order-3 lg:justify-self-start px-5">
              <p className="max-w-lg m-auto">
                  Results-driven Software Engineer with a proven track record of designing and implementing solutions.
                  Experienced in developing scalable cloud solutions utilizing Azure.
                  Adept at collaborating with cross-functional teams to deliver high-quality projects and mentoring junior engineers.
              </p>
          </div>
          <div className="order-4 lg:order-4 px-5 py-3 justify-center lg:justify-start flex flex-wrap">
              <SocialLinks />
          </div>
          <div className="order-5 lg:row-span-4 lg:justify-self-end lg:order-1 pt-3 px-5">
              <h1 className="text-xl md:text-xl font-bold py-5">Employment</h1>
              <EmploymentHistory/>
          </div>
          <div className="order-6 px-5">
              <h1 className="text-xl md:text-xl font-bold py-5">Education</h1>
              <Education/>
          </div>
          <div className="h-[100svh] p-5 order-7 lg:col-span-2"></div>
      </div>
  );
}

export default App;
