import { Mail, Phone } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dianaksm789@gmail.com",
      href: "mailto:dianaksm789@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62881025101311",
      href: "tel:+62881025101311",
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
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
        </div>
      </div>
    </section>
  );
}
