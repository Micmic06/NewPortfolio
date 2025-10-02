export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary-600">
                Professional Virtual Assistant
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As an IT graduate with extensive experience in virtual assistance and 
                tech operations, I specialize in helping businesses streamline their 
                digital processes and grow their online presence.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My expertise spans across multiple domains including SEO optimization, 
                ecommerce management with Shopify and WordPress/WooCommerce, data 
                management, lead generation, and administrative support.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I'm passionate about leveraging technology to solve business challenges 
                and deliver measurable results for my clients.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="card">
                <h4 className="font-semibold text-lg mb-2">Experience</h4>
                <p className="text-gray-600">2+ years in virtual assistance and tech operations</p>
              </div>
              
              <div className="card">
                <h4 className="font-semibold text-lg mb-2">Education</h4>
                <p className="text-gray-600">IT Graduate with strong technical foundation</p>
              </div>
              
              <div className="card">
                <h4 className="font-semibold text-lg mb-2">Specialization</h4>
                <p className="text-gray-600">Ecommerce, SEO, Data Management, Admin Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}