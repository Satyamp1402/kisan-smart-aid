import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const financialFeatures = [
  {
    title: "Yield-Based Credit Scoring",
    description: "Get loans based on AI predictions of your crop yields. Our smart scoring system considers your farming history, soil quality, and weather patterns.",
    icon: "📊",
    benefits: ["Higher loan approval rates", "Better interest rates", "Faster processing"]
  },
  {
    title: "Dynamic Insurance Premiums",
    description: "Real-time risk assessment for crop insurance with premiums that adjust based on actual weather conditions and farming practices.",
    icon: "🛡️",
    benefits: ["Fair pricing", "Real-time adjustments", "Comprehensive coverage"]
  },
  {
    title: "Input Financing",
    description: "Predict ROI for seeds and fertilizers, then connect with micro-lenders for optimal input financing solutions.",
    icon: "💰",
    benefits: ["ROI predictions", "Micro-lender connections", "Flexible repayment"]
  },
  {
    title: "Crop Insurance Claim Assistant",
    description: "95% farmers don't get insurance payouts due to documentation issues. Our AI assistant ensures you get what you deserve.",
    icon: "📋",
    benefits: ["Photo documentation guide", "Automated damage assessment", "Claim deadline reminders"]
  }
];

const insuranceProcess = [
  {
    step: "1",
    title: "Photo Documentation",
    description: "AI guides you to take the right photos for insurance claims"
  },
  {
    step: "2",
    title: "Damage Assessment",
    description: "Automated AI analysis of crop damage with severity ratings"
  },
  {
    step: "3",
    title: "Claim Processing",
    description: "Template generator and deadline reminders for smooth claims"
  },
  {
    step: "4",
    title: "Fair Compensation",
    description: "Ensure you receive the maximum entitled insurance payout"
  }
];

export const FinancialSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Micro-Credit &{" "}
            <span className="bg-gradient-sky bg-clip-text text-transparent">
              Insurance Integration
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access fair financing and insurance with AI-powered risk assessment and claim assistance.
          </p>
        </div>

        {/* Financial Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {financialFeatures.map((feature, index) => (
            <Card key={index} className="p-8 shadow-medium hover:shadow-strong transition-all duration-300 bg-card border-0 animate-grow" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{feature.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-foreground">
                        <span className="w-2 h-2 bg-sky-blue rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Insurance Claim Process */}
        <div className="bg-gradient-to-r from-sky-blue/10 to-primary/10 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            Insurance Claim Process Made Simple
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our AI assistant guides you through every step to ensure you receive fair compensation for crop damage.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insuranceProcess.map((process, index) => (
              <div key={index} className="text-center animate-grow" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-sky-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{process.title}</h4>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="sky" size="lg">Start Insurance Process</Button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="p-6 text-center shadow-medium bg-card border-0">
            <div className="text-3xl font-bold text-sky-blue mb-2">95%</div>
            <div className="text-muted-foreground">Farmers miss insurance payouts</div>
            <div className="text-sm text-foreground mt-2">We help you get what you deserve</div>
          </Card>
          <Card className="p-6 text-center shadow-medium bg-card border-0">
            <div className="text-3xl font-bold text-harvest-gold mb-2">₹50,000+</div>
            <div className="text-muted-foreground">Average insurance claim</div>
            <div className="text-sm text-foreground mt-2">Proper documentation matters</div>
          </Card>
          <Card className="p-6 text-center shadow-medium bg-card border-0">
            <div className="text-3xl font-bold text-primary mb-2">3x</div>
            <div className="text-muted-foreground">Faster loan approval</div>
            <div className="text-sm text-foreground mt-2">With AI-based credit scoring</div>
          </Card>
        </div>
      </div>
    </section>
  );
};