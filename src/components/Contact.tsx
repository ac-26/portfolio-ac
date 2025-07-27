import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "arnavchopra2607@gmail.com",
      href: "mailto:arnavchopra2607@gmail.com"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/arnavc26",
      href: "https://linkedin.com/in/arnavc26"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "https://github.com/ac-26",
      href: "https://github.com/ac-26"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Jaipur, Rajasthan, India",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? 
              I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <form 
              action="https://formspree.io/f/xqalbzpk"
              method="POST"
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    name="name"
                    placeholder="Your name" 
                    required 
                    className="focus:border-accent focus:ring-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="your.email@example.com" 
                    required 
                    className="focus:border-accent focus:ring-accent"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  name="subject"
                  placeholder="What's this about?" 
                  required 
                  className="focus:border-accent focus:ring-accent"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  placeholder="Tell me more about your project or idea..." 
                  rows={5}
                  required 
                  className="focus:border-accent focus:ring-accent resize-none"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-elegant"
              >
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              </Button>
            </form>


            {/* Contact info */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about data science and technology. Feel free to 
                  reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <Card 
                    key={item.label}
                    className="shadow-card hover:shadow-elegant transition-all duration-300 group"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{item.label}</p>
                          {item.href ? (
                            <a 
                              href={item.href}
                              target={item.href.startsWith('http') ? '_blank' : undefined}
                              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-muted-foreground hover:text-accent transition-colors duration-200"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Resume download */}
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300 bg-gradient-primary">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-bold text-primary-foreground mb-2">
                    Download My Resume
                  </h4>
                  <p className="text-primary-foreground/80 mb-4">
                    Get a detailed overview of my experience and skills
                  </p>
                  <Button 
                    variant="secondary" 
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    onClick={() => window.open('/resume.pdf', '_blank')}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;