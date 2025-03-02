import { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "CreateWalls has transformed our BIM workflow. What used to take our team hours now takes minutes. The ROI was evident within the first week of deployment.",
    author: "Sarah Johnson",
    title: "BIM Manager",
    company: "HOK",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80"
  },
  {
    quote: "As the head of a large architecture department, I needed a solution that would scale. CreateWalls not only improved our efficiency but also standardized our wall creation process across all projects.",
    author: "Michael Chen",
    title: "Director of Architecture",
    company: "Gensler",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80"
  },
  {
    quote: "The enterprise deployment was seamless. The training and support team ensured our entire staff was proficient with the tool within days. Now we can't imagine working without it.",
    author: "Emily Rodriguez",
    title: "BIM Coordinator",
    company: "AECOM",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80"
  },
  {
    quote: "For large healthcare projects with thousands of walls, this tool is a game-changer. We've calculated over 200 hours saved on our current hospital project alone.",
    author: "David Wilson",
    title: "Senior Project Manager",
    company: "HKS Architects",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80"
  },
  {
    quote: "The custom integration with our firm's Revit templates has made CreateWalls an essential part of our BIM ecosystem. The support team went above and beyond to meet our specific needs.",
    author: "Jennifer Park",
    title: "Technology Director",
    company: "SOM",
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">What Our Enterprise Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by the world's leading architecture and engineering firms
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 z-10 hidden md:block">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-blue-700 hover:bg-blue-50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
          </div>
          
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 z-10 hidden md:block">
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-blue-700 hover:bg-blue-50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
          
          <motion.div 
            className="bg-white rounded-xl shadow-xl p-8 md:p-10"
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 text-blue-200 mb-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <p className="text-xl text-gray-700 text-center mb-8">
                {testimonials[activeIndex].quote}
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].author}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-bold text-gray-800">{testimonials[activeIndex].author}</p>
                  <p className="text-gray-600">{testimonials[activeIndex].title}</p>
                  <p className="text-blue-600">{testimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {['HOK', 'Gensler', 'AECOM', 'HKS', 'SOM', 'Perkins+Will'].map((company, index) => (
            <motion.div
              key={index}
              className="text-gray-400 font-bold text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;