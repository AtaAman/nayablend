import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp } from "lucide-react";

const Portfolio = () => {
  const portfolioItems = [
    {
      type: "Website",
      title: "Luxury Salon Website",
      metrics: { impressions: "15K", leads: "89", cpl: "₹65" },
      description: "Modern, mobile-first salon website with integrated booking system"
    },
    {
      type: "Facebook Ad",
      title: "Hair Treatment Campaign",
      metrics: { impressions: "25K", leads: "142", cpl: "₹52" },
      description: "Targeted local campaign for premium hair treatments"
    },
    {
      type: "Instagram Reel",
      title: "Transformation Reel",
      metrics: { impressions: "45K", leads: "67", cpl: "₹38" },
      description: "Viral transformation reel showcasing salon expertise"
    },
    {
      type: "Google Ad",
      title: "Bridal Makeup Campaign",
      metrics: { impressions: "12K", leads: "95", cpl: "₹71" },
      description: "High-converting bridal service advertisements"
    },
    {
      type: "Content",
      title: "Spa Wellness Posts",
      metrics: { impressions: "35K", leads: "78", cpl: "₹45" },
      description: "Engaging wellness content driving spa bookings"
    },
    {
      type: "Local SEO",
      title: "Maps Optimization",
      metrics: { impressions: "8K", leads: "124", cpl: "₹29" },
      description: "Local search optimization for salon discovery"
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      "Website": "bg-blue-100 text-blue-800",
      "Facebook Ad": "bg-blue-600 text-white",
      "Instagram Reel": "bg-pink-100 text-pink-800",
      "Google Ad": "bg-green-100 text-green-800",
      "Content": "bg-purple-100 text-purple-800",
      "Local SEO": "bg-orange-100 text-orange-800"
    };
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Our Work Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real campaigns. See how we've helped salons and spas grow their business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-medium transition-smooth border-0 shadow-soft overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center relative">
                <div className="text-center">
                  <ExternalLink className="w-8 h-8 text-muted-foreground mb-2 mx-auto" />
                  <Badge className={getTypeColor(item.type)}>
                    {item.type}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{item.metrics.impressions}</div>
                    <div className="text-xs text-muted-foreground">Impressions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent">{item.metrics.leads}</div>
                    <div className="text-xs text-muted-foreground">Leads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{item.metrics.cpl}</div>
                    <div className="text-xs text-muted-foreground">CPL</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;