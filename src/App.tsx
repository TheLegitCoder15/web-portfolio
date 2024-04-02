import Banner from "./components/banner";
import Navbar from "./components/navbar";
import { BsHouse, BsPerson, BsBriefcase } from "react-icons/bs";

function App() {
  return (
    <>
      <header>
        <Navbar
          navitems={["Home", "About", "Work"]}
          navicons={[
            <BsHouse size={24} />,
            <BsPerson size={24} />,
            <BsBriefcase size={24} />,
          ]}
        />
      </header>
      <div className="content">
        <Banner />
      </div>
    </>
  );
}

export default App;
