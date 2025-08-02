import { Check, Crown, Users, Video, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PlansSection = () => {
  const whatsappNumber = "5511973399438";
  
  const plans = [
    {
      id: "pro",
      name: "PRO",
      speed: "100 MB",
      price: "70",
      icon: Users,
      description: "Ideal para uso básico",
      features: [
        "Navegação na internet",
        "Redes sociais",
        "E-mails",
        "Vídeos em HD"
      ],
      popular: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "family",
      name: "FAMILY",
      speed: "200 MB",
      price: "80",
      icon: Users,
      description: "Perfeito para famílias",
      features: [
        "Streaming simultâneo",
        "Home office",
        "Estudos online",
        "Múltiplos dispositivos"
      ],
      popular: true,
      color: "from-primary to-primary-glow"
    },
    {
      id: "influencer",
      name: "INFLUENCER",
      speed: "300 MB",
      price: "99",
      icon: Video,
      description: "Para criadores de conteúdo",
      features: [
        "Upload rápido de vídeos",
        "Lives sem travamentos",
        "Reuniões online em HD",
        "Cloud storage ilimitado"
      ],
      popular: false,
      color: "from-accent to-cyan-400"
    },
    {
      id: "top",
      name: "TOP",
      speed: "400 MB",
      price: "109",
      icon: Gamepad2,
      description: "Máxima performance",
      features: [
        "Gaming sem lag",
        "Streaming 4K",
        "Download instantâneo",
        "Baixa latência"
      ],
      popular: false,
      color: "from-secondary to-primary"
    }
  ];

  const handlePlanClick = (planName: string, price: string) => {
    const message = `Olá! Tenho interesse no plano ${planName} de R$ ${price},00/mês. Gostaria de mais informações e verificar disponibilidade.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="planos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Escolha o Plano Ideal para Você
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todos os planos incluem Wi-Fi, instalação gratuita e suporte técnico especializado
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={plan.id} 
                className={`relative transition-all duration-300 hover:scale-105 shadow-plan hover:shadow-glow ${
                  plan.popular ? 'ring-2 ring-primary shadow-glow' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-white px-4 py-1">
                      <Crown className="h-3 w-3 mr-1" />
                      Mais Escolhido
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  {/* Plan Icon */}
                  <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  
                  {/* Speed */}
                  <div className="text-4xl font-bold text-primary mb-2">
                    {plan.speed}
                  </div>

                  {/* Price */}
                  <div className="text-3xl font-bold">
                    <span className="text-sm text-muted-foreground">R$</span>
                    {plan.price}
                    <span className="text-sm text-muted-foreground">/mês</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    onClick={() => handlePlanClick(plan.name, plan.price)}
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-primary hover:bg-gradient-secondary shadow-glow' 
                        : 'bg-secondary hover:bg-secondary/90'
                    } transition-all duration-300`}
                  >
                    Contratar Agora
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Dúvidas sobre qual plano escolher? Fale conosco!
          </p>
          <Button 
            variant="outline" 
            onClick={() => {
              const message = "Olá! Gostaria de ajuda para escolher o melhor plano para o meu perfil.";
              const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            Preciso de Ajuda na Escolha
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;