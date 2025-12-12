import AnimatedSection from './AnimatedSection';

const Contact = () => {
  const contactMethods = [
    {
      id: 1,
      title: 'Email',
      detail: 'khansam@sonoma.edu',
      url: 'mailto:khansam@sonoma.edu'
    },
    {
      id: 3,
      title: 'Website',
      detail: 'sameerkhan.me',
      url: 'https://sameerkhan.me'
    },
    {
      id: 4,
      title: 'LinkedIn',
      detail: '/in/sameerkhansf',
      url: 'https://www.linkedin.com/in/sameerkhansf'
    },
    {
      id: 5,
      title: 'GitHub',
      detail: '/sameerkhansf',
      url: 'https://github.com/sameerkhansf'
    },
    {
      id: 6,
      title: 'X (Twitter)',
      detail: '@sameerkhan_sf',
      url: 'https://x.com/sameerkhan_sf'
    }
  ];

  return (
    <AnimatedSection id="contact" className="section-container">
      <h2 className="section-title">CONTACT</h2>
      <div className="space-y-0 group/container">
        {contactMethods.map((contact, index) => (
          <div key={contact.id}>
            <a
              href={contact.url}
              target={contact.url.startsWith('http') ? '_blank' : '_self'}
              rel={contact.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center justify-between py-6 group hover:bg-secondary/50 transition-all duration-300 relative overflow-hidden group-hover/container:opacity-40 hover:!opacity-100 hover:!scale-100 group-hover/container:scale-95"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 w-32">
                <h3 className="framer-heading transition-all duration-300 text-sm group-hover/container:text-xs group-hover:!text-sm">
                  {contact.title}
                </h3>
              </div>
              <p className="transition-all duration-300 text-sm text-muted-foreground group-hover/container:text-xs group-hover:!text-sm group-hover:!text-foreground">
                {contact.detail}
              </p>
            </a>
            {index < contactMethods.length - 1 && (
              <div className="h-px bg-border"></div>
            )}
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Contact;