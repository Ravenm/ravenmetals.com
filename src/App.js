import './App.css';
import {EmploymentHistory} from "./components/EmploymentHistory";

function App() {
  return (
      <div className="App grid lg:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] lg:gap-x-52 my-5">
          <div className="lg:justify-self-start sm:order-1 lg:order-2 p-5">
              <h1 className="text-xl md:text-7xl font-bold">Andrew Nash</h1>
              <h3 className="text-lg md:text-4xl">Software Engineer</h3>
              <p></p>
          </div>
          <div className="sm:justify-self-center lg:justify-self-end sm:order-2 lg:order-1">
              <EmploymentHistory/>
          </div>
      </div>
  );
}

export default App;
