"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { MessageCircle } from "lucide-react";

const Contact = () => {
  const services = [
    "Website Design",
    "Facebook & Instagram Ads",
    "Google Ads (Local)",
    "Creative Posting & Reels",
    "Local Visibility",
    "Monthly Retainers",
  ];

  const [formData, setFormData] = useState<any>({
    businessName: "",
    ownerName: "",
    phone: "",
    email: "",
    city: "",
    services: [],
    preferredTime: "",
    message: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev: any) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev: any) => {
      const updatedServices = prev.services.includes(service)
        ? prev.services.filter((s: string) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: updatedServices };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const { error } = await supabase.from("contact_requests").insert([
      {
        business_name: formData.businessName,
        owner_name: formData.ownerName,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        services: formData.services,
        preferred_time: formData.preferredTime,
        message: formData.message,
        consent: formData.consent,
      },
    ]);

    if (error) {
      console.error(error);
      setStatus("❌ Something went wrong. Please try again.");
    } else {
      setStatus("✅ Thank you! We’ll contact you soon.");
      setFormData({
        businessName: "",
        ownerName: "",
        phone: "",
        email: "",
        city: "",
        services: [],
        preferredTime: "",
        message: "",
        consent: false,
      });
    }
    setLoading(false);
  };

  const handleWhatsApp = () => {
    const message = "Hi! I'm interested in a free marketing audit for my salon/spa.";
    const whatsappUrl = `https://wa.me/919471665451?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="container-padding px-4 md:px-8 py-16 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
          Let's Talk About Growing Your Salon or Spa
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Quick chat. Free audit. Clear plan.
        </p>
      </div>

      <div className="w-full">
        <Card className="shadow-medium border-0 w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-heading text-primary">
              Book a Free Consultation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Your Salon/Spa Name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ownerName">Owner Name</Label>
                  <Input
                    id="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (WhatsApp)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Your City"
                />
              </div>

              <div className="space-y-3">
                <Label>What service are you interested in?</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox
                        id={service}
                        checked={formData.services.includes(service)}
                        onCheckedChange={() => handleServiceToggle(service)}
                      />
                      <Label htmlFor={service} className="text-sm">
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferredTime">Preferred Contact Time</Label>
                <Input
                  id="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  placeholder="Best time to reach you"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Quick Note</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your current marketing challenges..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) =>
                    setFormData((prev: any) => ({ ...prev, consent: checked }))
                  }
                />
                <Label htmlFor="consent" className="text-sm">
                  I agree to receive marketing communications and privacy policy.
                </Label>
              </div>

              {status && (
                <p className="text-sm text-center text-muted-foreground">{status}</p>
              )}

              <div className="space-y-4">
                <Button type="submit" className="w-full btn-primary" disabled={loading}>
                  {loading ? "Submitting..." : "Book a Free Consultation"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleWhatsApp}
                  className="w-full btn-ghost"
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Chat on WhatsApp
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
