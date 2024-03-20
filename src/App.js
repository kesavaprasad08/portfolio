import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import MyProjects from "./components/MyProjects";
import TechStack from "./components/TechStack";
function App() {
  return (
    <div className="bg-pageGreen text-white">
      <Header />
      <Home />
      <TechStack />
      <MyProjects />
    </div>
  );
}

export default App;
