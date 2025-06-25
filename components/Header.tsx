import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="flex gap-3 items-center bg-white shadow-sm sticky top-0 z-50 p-container py-0">
      <Logo />
      <NavLinks />
    </header>
  );
};

export default Header;
