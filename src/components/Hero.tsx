import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";

const Hero = () => {
  const handleWhatsApp = () => {
    const message = "Hi! I'm interested in a free marketing audit for my salon/spa.";
    const whatsappUrl = `https://wa.me/919471665451?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="home" className="section-padding gradient-hero overflow-hidden">
      <div className="container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-12">
              Helping Salons & Spas Attract More{" "}
              <span className="text-accent">Local Clients</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-2xl">
              Naya Blend Marketing builds websites, runs local ads, and creates reels that turn scrollers into bookings.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="#contact">
                <Button 
                size="lg" 
                className="btn-primary text-lg px-8 py-4 h-auto"
              >
                Get a Free Marketing Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              </a>
              <Button 
                size="lg" 
                onClick={handleWhatsApp}
                className="btn-primary text-lg px-8 py-4 h-auto"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </div>

            {/* Value Points */}
            {/* <div className="grid sm:grid-cols-3 gap-6 text-center lg:text-left">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto lg:mx-0">
                  <span className="text-accent text-xl">📍</span>
                </div>
                <p className="text-primary-foreground/90 text-sm">
                  Hyperlocal ads that drive walk-ins
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto lg:mx-0">
                  <span className="text-accent text-xl">📱</span>
                </div>
                <p className="text-primary-foreground/90 text-sm">
                  Creative reels & posts that get bookings
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto lg:mx-0">
                  <span className="text-accent text-xl">💻</span>
                </div>
                <p className="text-primary-foreground/90 text-sm">
                  Websites built to convert
                </p>
              </div>
            </div> */}
          </div>

          {/* Hero Image */}
          <div className="relative lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-medium">
              <img
                src={heroImage}
                alt="Modern salon interior with laptop showing beauty website"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full gradient-accent opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-primary opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;