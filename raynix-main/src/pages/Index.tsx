import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ParticleBackground from '@/components/ParticleBackground';
import SunFlare from '@/components/SunFlare';
import ServiceCard from '@/components/ServiceCard';
import SignInModal from '@/components/SignInModal';
import { ArrowRight, Zap, Shield, Sparkles, Rocket, Globe, Lock, Instagram, Mail } from 'lucide-react';
import logo from '@/assets/raynix-logo.png';
import { supabase } from '@/lib/supabase';
import { User } from '@supabase/supabase-js';
import { toast } from 'sonner';

const Index = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error('Sign out failed', {
        description: error.message,
      });
    } else {
      toast.success('Signed out successfully');
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: Sparkles,
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI to engage customers and automate support 24/7.',
    },
    {
      icon: Zap,
      title: 'Documentation AI',
      description: 'Automated document processing, analysis, and intelligent information extraction.',
    },
    {
      icon: Rocket,
      title: 'Voice and Speech AI',
      description: 'Advanced voice recognition, synthesis, and natural language understanding.',
    },
    {
      icon: Globe,
      title: 'Computer Vision',
      description: 'Image recognition, object detection, and visual data analysis solutions.',
    },
    {
      icon: Shield,
      title: 'Predictive Analytics',
      description: 'Data-driven forecasting and business intelligence powered by machine learning.',
    },
    {
      icon: Lock,
      title: 'AI-Powered Search',
      description: 'Intelligent search and information retrieval systems for your business.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Raynix Logo" className="w-10 h-10" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Raynix
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Button
                onClick={scrollToServices}
                variant="ghost"
                className="hidden sm:flex"
              >
                Get Started
              </Button>
              {user ? (
                <Button
                  onClick={handleSignOut}
                  variant="outline"
                  className="border-primary/30 hover:border-primary/50"
                >
                  Sign Out
                </Button>
              ) : (
                <Button
                  onClick={() => setIsSignInModalOpen(true)}
                  variant="outline"
                  className="border-primary/30 hover:border-primary/50"
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <ParticleBackground />
        <SunFlare />
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
              Customized AI Services
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              for Your Business
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              We provide AI-powered solutions like chatbots, document automation, and predictive analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button
                onClick={scrollToServices}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary group"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => setIsSignInModalOpen(true)}
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary/50 hover:bg-primary/10"
              >
                Get Started Free
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover powerful features designed to accelerate your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-animated opacity-10 animate-gradient-shift"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-float">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary p-1 shadow-glow-primary">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <span className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">R</span>
                </div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Raynix
            </h2>
            <p className="text-xl text-foreground/90 mb-4">
              <span className="font-semibold text-primary">Rithviknathan</span>, Founder of Raynix
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leading innovation in AI-powered solutions to transform the future of technology
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Start Your Project
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              To start your project, contact us
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href="https://www.instagram.com/raynixai?igsh=cnp2b3FmaW90dTdo"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Instagram</h3>
                  <p className="text-primary font-medium">@raynixai</p>
                </div>
              </a>

              <a
                href="mailto:raynixai@gmail.com"
                className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Email</h3>
                  <p className="text-primary font-medium break-all">raynixai@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 border-t border-border bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Raynix. All rights reserved.
          </p>
        </div>
      </footer>

      <SignInModal isOpen={isSignInModalOpen} onClose={() => setIsSignInModalOpen(false)} />
    </div>
  );
};

export default Index;
