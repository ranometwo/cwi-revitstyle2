import { motion } from 'framer-motion';

const PricingSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Flexible options for teams of all sizes
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div 
            className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Professional</h3>
              <p className="text-gray-600 mb-4">For individual architects and small teams</p>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-blue-700">$299</span>
                <span className="text-gray-500 ml-2">/year per user</span>
              </div>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-md transition-colors">
                Start Free Trial
              </button>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {[
                  "Single user license",
                  "Standard support",
                  "Compatible with Revit 2020-2025",
                  "Basic wall creation tools",
                  "Email support"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl border-2 border-blue-500 shadow-xl overflow-hidden transform md:scale-105 z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-blue-500 text-white text-center py-2 text-sm font-bold">
              MOST POPULAR
            </div>
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Team</h3>
              <p className="text-gray-600 mb-4">For architecture and engineering teams</p>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-blue-700">$499</span>
                <span className="text-gray-500 ml-2">/year per user</span>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors">
                Start Free Trial
              </button>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {[
                  "5+ user licenses",
                  "Team deployment tools",
                  "Advanced wall creation features",
                  "Priority email support",
                  "Centralized license management",
                  "Basic analytics dashboard",
                  "Quarterly training webinars"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-4">For large firms with complex needs</p>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-blue-700">Custom</span>
              </div>
              <button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md transition-colors">
                Contact Sales
              </button>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {[
                  "Unlimited user licenses",
                  "Custom deployment options",
                  "Dedicated account manager",
                  "Custom integration services",
                  "Advanced analytics and reporting",
                  "Phone and email support",
                  "Custom feature development",
                  "On-site training sessions",
                  "SLA guarantees"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-gray-600">
            Need a custom solution? <a href="#" className="text-blue-600 font-medium">Contact our sales team</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;