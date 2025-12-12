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
      detail: '@sameerkhansf',
      url: 'https://x.com/sameerkhansf'
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
              className="flex items-center justify-between py-6 group hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-all duration-300 relative overflow-hidden group-hover/container:opacity-40 hover:!opacity-100 hover:!scale-100 group-hover/container:scale-95"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 w-32">
                <h3 className="framer-heading transition-all duration-300 text-sm group-hover/container:text-xs group-hover:!text-sm">
                  {contact.title}
                </h3>
              </div>
              <p className="transition-all duration-300 text-sm group-hover/container:text-xs group-hover:!text-sm group-hover:!text-[rgb(41,41,41)] dark:group-hover:!text-gray-200" style={{color: "var(--extracted-r6o4lv, var(--token-4ed8c69a-230d-4c07-af1f-2e5cbb244f43, rgb(126, 126, 126))"}}>
                {contact.detail}
              </p>
            </a>
            {index < contactMethods.length - 1 && (
              <div className="h-px bg-gray-100 dark:bg-gray-700"></div>
            )}
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Contact;