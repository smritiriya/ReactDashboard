import { Header, Sidebar } from "./components";
import "./App.scss";
import { Dashboard } from "./containers";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="outlet-container">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
