"use client";

import AnimatedSection from './AnimatedSection';
import { useState } from 'react';

const Contact = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = async (text: string, id: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

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
            <div className="flex items-center justify-between py-6 group hover:bg-secondary/50 transition-all duration-300 relative overflow-hidden group-hover/container:opacity-40 hover:!opacity-100 hover:!scale-100 group-hover/container:scale-95">
              <a
                href={contact.url}
                target={contact.url.startsWith('http') ? '_blank' : '_self'}
                rel={contact.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-between flex-1"
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
              {contact.title === 'Email' && (
                <button
                  onClick={(e) => handleCopy(contact.detail, contact.id, e)}
                  className="ml-3 p-2 rounded-lg hover:bg-secondary transition-colors duration-200"
                  aria-label={copiedId === contact.id ? 'Copied!' : 'Copy email'}
                  title={copiedId === contact.id ? 'Copied!' : 'Copy email'}
                >
                  {copiedId === contact.id ? (
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-muted-foreground hover:text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
              )}
            </div>
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