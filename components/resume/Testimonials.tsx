const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Evelyn Brooks',
      role: 'Lead Engineer at Sigma, managed Henry directly',
      photo: 'https://ext.same-assets.com/3285526825/3327197722.png',
      quote: 'Having worked alongside Henry at Sigma, I\'ve been consistently impressed by his exceptional skills as a frontend engineer. Henry\'s hands-on approach and dedication to building robust web and mobile applications have greatly contributed to our project\'s success.'
    },
    {
      id: 2,
      name: 'Raj Patel',
      role: 'Junior Software Engineer at Omega, worked with Henry on the same team',
      photo: 'https://ext.same-assets.com/3285526825/2582741759.png',
      quote: 'Henry\'s expertise has been crucial in turning our ambitious project ideas into reality at Omega. His proficiency in both front-end and back-end development ensures a seamless integration of features, delivering a user experience that\'s both intuitive and high-performing.'
    }
  ];

  return (
    <section id="testimonials" className="section-container">
      <h2 className="section-title">Testimonials</h2>
      <div className="space-y-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="animate-fade-in bg-[rgb(252,252,252)] rounded-2xl p-4 border border-[rgba(18,18,18,0.07)] hover:shadow-lg transition-shadow duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Desktop Layout */}
            <div className="hidden md:block">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="framer-heading mb-1">{testimonial.name}</h3>
                  <p className="text-sm leading-relaxed" style={{color: "var(--token-c688907e-c440-4ba5-8234-4183c55006d7, rgb(41, 41, 41))"}}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="ml-20">
                <p className="leading-relaxed" style={{color: "var(--token-c688907e-c440-4ba5-8234-4183c55006d7, rgb(41, 41, 41))"}}>
                  {testimonial.quote}
                </p>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{testimonial.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;