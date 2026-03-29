import { Brain, Heart, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/20 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3">
            <Brain className="w-7 h-7 text-primary" />
            <span className="text-xl font-semibold">MindBridge</span>
          </div>
          <p className="text-muted-foreground mt-3">Mental wellness, redefined.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase text-muted-foreground mb-4">Product</h4>
          <div className="space-y-2">
            {["Features", "How It Works", "Pricing", "Changelog"].map((l) => (
              <a key={l} href="#" className="block text-card-foreground hover:text-primary transition-colors py-1.5 text-sm">{l}</a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase text-muted-foreground mb-4">Resources</h4>
          <div className="space-y-2">
            {["Blog", "Help Center", "Privacy Policy", "Terms of Service"].map((l) => (
              <a key={l} href="#" className="block text-card-foreground hover:text-primary transition-colors py-1.5 text-sm">{l}</a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase text-muted-foreground mb-4">Get in Touch</h4>
          <a href="mailto:support@mindbridge.in" className="flex items-center gap-2 text-primary text-sm py-1.5">
            <Mail className="w-4 h-4" /> support@mindbridge.in
          </a>
          <a href="tel:18602662345" className="flex items-center gap-2 text-card-foreground text-sm py-1.5">
            <Phone className="w-4 h-4" /> 1860-2662-345
          </a>
          <p className="text-muted-foreground text-sm mt-4">Bangalore, India</p>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© 2024 MindBridge. All rights reserved.</p>
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Made with <Heart className="w-3 h-3 fill-destructive text-destructive" /> in India
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
