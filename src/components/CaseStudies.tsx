import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, MapPin, X, Check, Eye, Phone, Calendar } from "lucide-react";

const CaseStudies = () => {
  const handleWhatsApp = () => {
    const message = "Hi! I'd like to book a Free Marketing Audit with Naya Blend Marketing.";
    const whatsappUrl = `https://wa.me/919471665451?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="case-studies" className="section-padding bg-secondary">
      <div className="container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Why Targeting the Right Audience Matters for Salons & Spas
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Many salons and spas post reels and photos on Instagram hoping for more clients. Sure, the views look good — sometimes 20k or even 50k — but here's the thing: if your salon is in Bandra, does it really matter if people in Delhi or Bangalore are liking your reel? <strong className="text-primary">Views don't pay bills. Bookings do.</strong>
          </p>
        </div>

        {/* Comparison Cases */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Case 1: Without Strategy */}
          <Card className="shadow-soft border-2 border-destructive/20 hover:shadow-medium transition-smooth">
            <CardHeader className="bg-destructive/5 rounded-t-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                  <X className="w-6 h-6 text-destructive" />
                </div>
                <Badge variant="destructive" className="text-xs">
                  Without Strategy
                </Badge>
              </div>
              <CardTitle className="text-xl font-heading text-primary">
                Salon Without Digital Marketing Strategy
              </CardTitle>
              <p className="text-sm text-muted-foreground">Local spa in Pune</p>
            </CardHeader>
            
            <CardContent className="space-y-6 p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Marketing</span>
                  <span className="text-sm font-medium">Organic reels, occasional boosted posts</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Eye className="w-4 h-4 mr-2" />
                    Reach
                  </span>
                  <span className="text-lg font-bold text-primary">20,000 views</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Audience spread</span>
                  <span className="text-sm font-medium text-destructive">Across India, mostly outside 200km</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Leads generated</span>
                  <span className="text-sm font-medium text-destructive">3 random DMs (not local)</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Bookings
                  </span>
                  <span className="text-2xl font-bold text-destructive">0</span>
                </div>
              </div>

              <div className="bg-destructive/5 p-4 rounded-lg border border-destructive/20">
                <p className="text-sm italic text-muted-foreground">
                  <strong className="text-destructive">"</strong>We're getting likes and comments, but no new walk-ins. It feels like shouting into the void.<strong className="text-destructive">"</strong>
                </p>
                <p className="text-xs text-muted-foreground mt-2">— Salon Owner</p>
              </div>
            </CardContent>
          </Card>

          {/* Case 2: With Naya Blend Strategy */}
          <Card className="shadow-soft border-2 border-accent/30 hover:shadow-medium transition-smooth">
            <CardHeader className="bg-accent/5 rounded-t-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Check className="w-6 h-6 text-accent-foreground" />
                </div>
                <Badge className="bg-accent text-accent-foreground text-xs">
                  With Naya Blend
                </Badge>
              </div>
              <CardTitle className="text-xl font-heading text-primary">
                Salon With Naya Blend Marketing Strategy
              </CardTitle>
              <p className="text-sm text-muted-foreground">Similar spa in Pune, 5km radius catchment</p>
            </CardHeader>
            
            <CardContent className="space-y-6 p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Marketing</span>
                  <span className="text-sm font-medium">Hyperlocal ads + Google Ads + targeted reels</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Eye className="w-4 h-4 mr-2" />
                    Reach
                  </span>
                  <span className="text-lg font-bold text-primary">8,000 views</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Audience spread</span>
                  <span className="text-sm font-medium text-accent-foreground">90% within 5km of salon</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Leads generated
                  </span>
                  <span className="text-lg font-bold text-accent-foreground">65 inquiries/month</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Bookings
                  </span>
                  <span className="text-2xl font-bold text-accent-foreground">38 confirmed</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 bg-accent/5 rounded-lg border border-accent/20">
                <div className="text-center">
                  <div className="text-lg font-bold text-accent-foreground">₹70</div>
                  <div className="text-xs text-muted-foreground">Cost per lead</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-accent-foreground">5x ROI</div>
                  <div className="text-xs text-muted-foreground">Return on investment</div>
                </div>
              </div>

              <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
                <p className="text-sm italic text-muted-foreground">
                  <strong className="text-accent-foreground">"</strong>Our reels may not have gone viral, but every view came from the right audience. The chairs are full, the phone keeps ringing, and we finally feel in control of marketing.<strong className="text-accent-foreground">"</strong>
                </p>
                <p className="text-xs text-muted-foreground mt-2">— Salon Owner</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What This Really Means */}
        <div className="bg-card rounded-2xl p-8 shadow-soft border border-border mb-16">
          <h3 className="text-2xl font-heading font-bold text-primary mb-6 text-center">
            What This Really Means
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-1">
                <X className="w-4 h-4 text-destructive" />
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Reels without targeting</h4>
                <p className="text-sm text-muted-foreground">Vanity metrics (likes, follows, views that don't convert)</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-accent-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Reels + digital marketing</h4>
                <p className="text-sm text-muted-foreground">Business growth (leads, bookings, revenue)</p>
              </div>
            </div>
          </div>

          <div className="text-center p-6 bg-accent/5 rounded-lg border border-accent/20">
            <p className="text-muted-foreground mb-4">
              The difference isn't in creating reels. It's in showing them to the right audience — the people who can actually walk through your salon doors.
            </p>
          </div>
        </div>

        {/* Key Insight */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 max-w-4xl mx-auto border border-accent/20">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Key Insight
            </h3>
            <p className="text-lg text-primary mb-4">
              <strong>Views look nice. Bookings pay bills.</strong>
            </p>
            <p className="text-muted-foreground">
              Your audience isn't "India." It's the people living within 5–7 km of your salon. Targeting them is the only way to grow consistently.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;