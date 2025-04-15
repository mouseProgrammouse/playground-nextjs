'use client';
import BackToHome from './BackToHome';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  showBackToHome?: boolean;
}

const Header = ({ showBackToHome = true }: HeaderProps) => {
  return (
    <header className="content-between">
      {showBackToHome && <BackToHome />}
      <ThemeToggle />
    </header>
  );
};

export default Header;
