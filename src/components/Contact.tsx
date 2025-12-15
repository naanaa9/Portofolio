import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_rd558k7",   
        "template_a2vljmn",  
        formRef.current,
        "-6rVcMVENqPbHb3go" 
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message.");
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dianashrk22@gmail.com",
      href: "mailto:dianashrk22@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62881025101311",
      href: "tel:+62881025101311",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">{info.label}</p>
                      <a
                        href={info.href}
                        className="hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-muted/50 rounded-xl">
              <h4 className="mb-3">Let's work together!</h4>
              <p className="text-muted-foreground">
                I'm currently available for freelance projects and full-time opportunities.
                Whether you have a question or just want to say hi, my inbox is always open.
              </p>
            </div>
          </div>

          <div>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
