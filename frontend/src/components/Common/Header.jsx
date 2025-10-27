import Topbar from "../Layout/Topbar";
import Navbar from "./Navbar";

export const Header = () => {
  return (
    <header>
      {/* Topbar */}
      <Topbar />
      {/* navbar*/}
      <Navbar />
      {/* Cart Drawer*/}
    </header>
  );
};

export default Header;
