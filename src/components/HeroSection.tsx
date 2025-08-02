import { Wifi, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('planos');
    plansSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative h-screen bg-herosection text-white py-20 lg:py-32 overflow-hidden">
      <div className="w-screen h-full bg-blue-700/40 absolute top-0"></div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Internet <span className="text-accent">100% Fibra Óptica</span> em Guarulhos
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Tenha a melhor experiência digital com velocidade real e estabilidade garantida
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Zap className="h-5 w-5 text-accent" />
              <span className="font-medium">Velocidade Real</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Wifi className="h-5 w-5 text-accent" />
              <span className="font-medium">Wi-Fi Incluído</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="h-5 w-5 text-accent" />
              <span className="font-medium">Instalação Gratuita</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={scrollToPlans}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 transition-all duration-300 text-lg px-8 py-6 shadow-glow animate-glow"
          >
            Ver Nossos Planos
          </Button>

          {/* Trust Indicator */}
          <p className="mt-6 text-white/70 text-sm">
            Planos a partir de <span className="font-bold text-accent">R$ 70,00/mês</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;