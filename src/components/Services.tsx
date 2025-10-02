import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Facebook, Search, Video, MapPin, Calendar } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Design",
      description: "Beautiful, mobile-first sites that convert visitors to bookings. Appointment widget + WhatsApp integration.",
      features: ["Mobile-responsive design", "Booking integration", "WhatsApp chat", "SEO optimized"]
    },
    {
      icon: <Facebook className="w-8 h-8" />,
      title: "Facebook & Instagram Ads",
      description: "Hyperlocal targeting, A/B tested creatives, appointment-driven campaigns.",
      features: ["Local targeting", "A/B testing", "Creative design", "Performance tracking"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Google Ads (Local)",
      description: '"Salon near me" searches turned into calls and visits.',
      features: ["Local search ads", "Call extensions", "Location targeting", "Conversion tracking"]
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Creative Posting & Reels",
      description: "Weekly reels, posts and templates tailored for your salon voice.",
      features: ["Weekly content", "Custom reels", "Brand voice", "Engagement optimization"]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Local Visibility",
      description: "Google Business Profile optimization, local SEO, maps visibility.",
      features: ["GBP optimization", "Local SEO", "Maps ranking", "Review management"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Monthly Retainers",
      description: "Ongoing ad management + monthly content + reporting.",
      features: ["Ongoing management", "Monthly reports", "Strategy optimization", "Dedicated support"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We handle everything — from a converting website to ad campaigns that actually bring paying clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-soft border-0 hover:shadow-medium transition-smooth">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mx-auto mb-4 text-accent-foreground">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-heading text-primary">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-accent mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
               <a href="#contact">
                 <Button variant="outline" className="w-full btn-ghost">
                  Contact now
                </Button>
               </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Decisions backed by data, not guesswork.
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Track ad performance and ROI in real time, understand your local audience better, and optimize campaigns for more bookings — plus clear monthly reports you can act on.
            </p>
            {/* <Button className="btn-primary">
              See Our Reporting Sample
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;