import "./Header.css";
import Logo from "./Logo";
import Search from "./Search";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Search/>
    </div>
  )
};

export default Header;
