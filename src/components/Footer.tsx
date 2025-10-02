import {
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Website Design",
    "Facebook & Instagram Ads",
    "Google Ads (Local)",
    "Creative Posting & Reels",
    "Local Visibility",
    "Monthly Retainers",
  ];

  const handleWhatsApp = () => {
    const message =
      "Hi! I'm interested in learning more about Naya Blend Marketing services.";
    const whatsappUrl = `https://wa.me/919471665451?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-padding py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/">
              <div className="flex items-center  space-x-2">
                <img className="h-16 w-32 bg-white px-2 py-1 rounded-sm" src="./logo.png" alt="naya blend" />
              </div>
            </a>
            <p className="text-sm opacity-90 mb-6 max-w-xs">
              Fill your chairs. Grow your brand. We help salons and spas get
              local clients through smart websites, targeted ads and
              scroll-stopping reels.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61556567454250"
                target="_blank"
                className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-smooth"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/nayablendmarketing/"
                target="_blank"
                className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-smooth"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-smooth"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="tel:9471665451"
                  className="text-sm opacity-90 hover:opacity-100 transition-smooth"
                >
                  9471665451
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@nayablendmarketing.com"
                  className="text-sm opacity-90 hover:opacity-100 transition-smooth"
                >
                  info@nayablendmarketing.com
                </a>
              </div>
              <button
                onClick={handleWhatsApp}
                className="flex items-center space-x-3 text-sm opacity-90 hover:opacity-100 transition-smooth"
              >
                <MessageCircle className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © 2024 Naya Blend Marketing — All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm opacity-80 hover:opacity-100 transition-smooth"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm opacity-80 hover:opacity-100 transition-smooth"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
