import { MessageSquare, Image, Coins, Shield } from "lucide-react";
import chatIcon from "@/assets/chat-icon.jpg";
import imageIcon from "@/assets/image-icon.jpg";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      image: chatIcon,
      title: "AI Text Generation",
      description: "Powered by local Ollama with multiple model support for versatile conversations"
    },
    {
      icon: Image,
      image: imageIcon,
      title: "Image Creation",
      description: "Generate stunning visuals with ImageKit integration"
    },
    {
      icon: Coins,
      title: "Credit System",
      description: "Flexible pay-as-you-go system. Buy credits when you need them."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "JWT authentication and encrypted data storage for peace of mind"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for advanced AI interactions in one platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary"
            >
              {feature.image ? (
                <div className="mb-4 rounded-xl overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow-primary transition-shadow">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
