import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { WhatsAppIcon } from "./WhatsappIcon";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    cep: "",
    plan: ""
  });
  const { toast } = useToast();
  const whatsappNumber = "5511973399438";

  const plans = [
    { value: "pro", label: "PRO - 100 MB - R$ 70,00" },
    { value: "family", label: "FAMILY - 200 MB - R$ 80,00" },
    { value: "influencer", label: "INFLUENCER - 300 MB - R$ 99,90" },
    { value: "top", label: "TOP - 400 MB - R$ 109,00" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.cep) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    const selectedPlan = plans.find(p => p.value === formData.plan);
    const planText = selectedPlan ? ` Plano de interesse: ${selectedPlan.label}.` : "";
    
    const message = `Olá! Meu nome é ${formData.name}. Telefone: ${formData.phone}. CEP: ${formData.cep}.${planText} Gostaria de verificar disponibilidade e contratar internet fibra óptica.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para continuar a conversa no WhatsApp.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Verificar Disponibilidade
            </h2>
            <p className="text-xl text-muted-foreground">
              Preencha os dados abaixo e entraremos em contato via WhatsApp
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-plan">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Solicitar Contato
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Digite seu nome completo"
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="(11) 99999-9999"
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="cep">CEP *</Label>
                    <Input
                      id="cep"
                      type="text"
                      value={formData.cep}
                      onChange={(e) => handleInputChange("cep", e.target.value)}
                      placeholder="00000-000"
                      className="mt-1"
                      required
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      Para verificar se atendemos sua região
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="plan">Plano de Interesse (opcional)</Label>
                    <Select value={formData.plan} onValueChange={(value) => handleInputChange("plan", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Selecione um plano" />
                      </SelectTrigger>
                      <SelectContent>
                        {plans.map((plan) => (
                          <SelectItem key={plan.value} value={plan.value}>
                            {plan.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:bg-gradient-secondary shadow-glow text-lg py-6"
                  >
                    <WhatsAppIcon className="mr-2 h-5 w-5" />
                    Enviar via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="shadow-plan">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Telefone</h3>
                      <p className="text-muted-foreground">(11) 97339-9438</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => window.open(`tel:+5511973399438`, '_self')}
                  >
                    Ligar Agora
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-plan">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <WhatsAppIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">WhatsApp</h3>
                      <p className="text-muted-foreground">Atendimento rápido</p>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => {
                      const message = "Olá! Gostaria de informações sobre os planos de internet fibra óptica.";
                      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    Abrir WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-plan">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Horário de Atendimento</h3>
                      <div className="text-muted-foreground">
                        <p>Segunda a Sexta: 8h às 18h</p>
                        <p>Sábado: 8h às 14h</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-plan">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Região de Atendimento</h3>
                      <p className="text-muted-foreground">Guarulhos/SP e região</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;