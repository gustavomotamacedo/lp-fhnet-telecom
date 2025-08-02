import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "./WhatsappIcon";

const WhatsAppFloat = () => {
  const whatsappNumber = "5511973399438";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os planos da FHNET Internet.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={() => window.open(whatsappUrl, '_blank')}
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl animate-bounce hover:animate-none transition-all duration-300 group"
      >
        <WhatsAppIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
        <span className="sr-only">Abrir WhatsApp</span>
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Fale conosco no WhatsApp
      </div>
    </div>
  );
};

export default WhatsAppFloat;