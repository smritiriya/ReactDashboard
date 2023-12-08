import { ReactComponent as Applogo } from "./blueBox.svg";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-logo-container">
        <Applogo />
      </div>
      
    </div>
  )
}

export default Sidebar;