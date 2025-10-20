import { Mail, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/DotPattern";
import logo from "@/assets/cognitioniq-logo.png";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden font-sans">
      {/* Dot Patterns */}
      <DotPattern position="top-left" />
      <DotPattern position="top-right" />
      <DotPattern position="bottom-right" />
      <DotPattern position="bottom-left" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        {/* Logo */}
        <div className="mb-12 animate-fade-in">
          <img 
            src={logo} 
            alt="CognitionIQ Logo" 
            className="h-20 md:h-28 object-contain"
          />
        </div>

        {/* Hero Content */}
        <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-4">
            The Future of Brain Health
          </p>
          <div className="flex items-center justify-center gap-2 text-primary">
            <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
            <div className="w-2 h-2 rounded-full bg-primary animate-glow" style={{ animationDelay: '0.3s' }} />
            <div className="w-2 h-2 rounded-full bg-primary animate-glow" style={{ animationDelay: '0.6s' }} />
          </div>
        </div>

        {/* Featured Article */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a 
            href="https://news.stthomas.edu/innovation-scholars-present-research-to-nasa/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-card border border-border rounded-lg p-6 md:p-8 max-w-2xl hover:border-[#255aa4] transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h2 className="text-lg md:text-xl font-semibold mb-2 text-foreground group-hover:text-[#255aa4] transition-colors">
                    Innovation Scholars Present Research to NASA
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base mb-3">
                    Discover where our journey began with groundbreaking research presented to NASA
                  </p>
                  <div className="flex items-center gap-2 text-primary group-hover:text-[#255aa4] text-sm font-medium transition-colors">
                    <span>Read our story</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
          >
            <a href="mailto:info@cognition-iq.com" className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-8"
          >
            <a 
              href="https://www.linkedin.com/company/cognitioniq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              Follow on LinkedIn
            </a>
          </Button>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-muted-foreground text-sm">
            © 2025 CognitionIQ. The Future of Brain Health
          </p>
        </div>
      </div>
    </main>
  );
};

export default Index;
