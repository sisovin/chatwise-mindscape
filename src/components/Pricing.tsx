import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      credits: "1,000",
      price: "$9.99",
      description: "Perfect for individuals exploring AI capabilities",
      features: [
        "1,000 AI credits",
        "Text generation access",
        "Image generation access",
        "Basic support",
        "30-day validity"
      ],
      popular: false
    },
    {
      name: "Professional",
      credits: "5,000",
      price: "$39.99",
      description: "Ideal for professionals and content creators",
      features: [
        "5,000 AI credits",
        "Priority text generation",
        "Priority image generation",
        "Advanced models access",
        "Priority support",
        "90-day validity",
        "Usage analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      credits: "20,000",
      price: "$129.99",
      description: "For businesses and power users",
      features: [
        "20,000 AI credits",
        "Unlimited text generation",
        "Unlimited image generation",
        "All premium models",
        "24/7 priority support",
        "180-day validity",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include access to our powerful AI models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group animate-fade-in hover-scale ${
                plan.popular ? "md:-mt-4" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-glow-primary">
                  Most Popular
                </div>
              )}

              <div
                className={`h-full p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-b from-primary/10 to-accent/10 border-primary/50 shadow-glow-primary"
                    : "bg-secondary/50 border-border/50 hover:border-primary/30"
                }`}
              >
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">/ month</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {plan.credits} credits included
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link to="/auth" className="block">
                  <Button
                    variant={plan.popular ? "hero" : "outline"}
                    className="w-full"
                    size="lg"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          All prices in USD. Credits don't expire within validity period. Secure payment via ABA PayWay.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
