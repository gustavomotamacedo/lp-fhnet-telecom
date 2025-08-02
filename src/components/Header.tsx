import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "./WhatsappIcon";

const Header = () => {
  const whatsappNumber = "5511973399438";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os planos da FHNET Internet.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/assets/logo.jpg" 
              alt="FHNET Internet" 
              className="h-10 w-auto logo-shadow"
            />
          </div>

          {/* Navigation - Desktop */}
          <nav className="w-1/3 flex items-center justify-around space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors ">
              Início
            </a>
            <a href="#planos" className="text-foreground hover:text-primary transition-colors">
              Planos
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          {/* Contact Actions */}
          <div className="flex items-center space-x-3">            
            <Button 
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="bg-gradient-primary hover:bg-gradient-secondary transition-all duration-300 shadow-glow"
              size="sm"
            >
              <WhatsAppIcon className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;