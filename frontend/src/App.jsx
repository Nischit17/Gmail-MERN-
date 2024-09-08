import "./App.css";
import Inbox from "./components/Inbox";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-[#F6F8Fc] h-screen">
      <NavBar />
      <div className="flex">
        <Sidebar />
        <Inbox />
      </div>
    </div>
  );
}

export default App;
