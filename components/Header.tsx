import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="flex gap-x-3 max-sm:gap-y-1.5 max-sm:pb-1.5 items-center flex-wrap bg-white shadow-sm sticky top-0 z-50 p-container py-0">
      <Logo />
      <NavLinks />
    </header>
  );
};

export default Header;
