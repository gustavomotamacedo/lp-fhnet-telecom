import { MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "./WhatsappIcon";

const Footer = () => {
  const whatsappNumber = "5511973399438";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de mais informações sobre a FHNET Internet.")}`;

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="text-left md:text-left">
              <p className="text-white/80 mb-4">
                Internet 100% fibra óptica com a melhor velocidade e estabilidade de Guarulhos.
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-sm text-white/70">
                <MapPin className="h-4 w-4" />
                <span>Guarulhos/SP</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-left">
              <h3 className="font-semibold text-lg mb-4">Nossos Planos</h3>
              <ul className="space-y-2 text-white/80">
                <a className="hover:underline hover:text-blue-300" href="#planos">
                  <li>PRO - 100 MB - R$ 70,00</li>
                </a>
                <a className="hover:underline hover:text-blue-300" href="#planos">
                  <li>FAMILY - 200 MB - R$ 80,00</li>
                </a>
                <a className="hover:underline hover:text-blue-300" href="#planos">
                  <li>INFLUENCER - 300 MB - R$ 99,90</li>
                </a>
                <a className="hover:underline hover:text-blue-300" href="#planos">
                  <li>TOP - 400 MB - R$ 109,00</li>
                </a>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-left md:text-left">
              <h3 className="font-semibold text-lg mb-4">Contato</h3>
              <div className="space-y-3">                
                <button
                  onClick={() => window.open(whatsappUrl, '_blank')}
                  className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-8 pt-8 text-left text-white/60 text-sm">
            <p>&copy; 2024 FHNET Internet. Todos os direitos reservados.</p>
            <p className="mt-2">Internet 100% fibra óptica em Guarulhos/SP</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;