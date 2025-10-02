import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    // { label: "Portfolio", href: "#portfolio" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Contact", href: "#contact" }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container-padding flex h-16 items-center justify-between">
        {/* Logo */}
       <a href="/">
         <div className="flex items-center space-x-2">
          <img className="h-16 w-32" src="./logo.png" alt="naya blend" />
        </div>
       </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:9471665451" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-smooth">
            <Phone className="w-4 h-4" />
            <span>9471665451</span>
          </a>
          <a href="#contact">
            <Button variant="default" size="sm" className="btn-primary">
            Get Free Audit
          </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="container-padding py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-medium text-foreground hover:text-primary transition-smooth"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border space-y-3">
              <a href="tel:9471665451" className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>9471665451</span>
              </a>
              <Button variant="default" size="sm" className="btn-primary w-full">
                Get Free Audit
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;