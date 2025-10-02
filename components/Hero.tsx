import { Mail, Phone, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
      <div className="container-max section-padding">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Christian M. Miclat
          </h1>
          <h2 className="text-xl md:text-2xl text-primary-600 font-semibold mb-6">
            Virtual Assistant & Tech Operations Specialist
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            IT Graduate specializing in backend administration, SEO optimization, 
            and ecommerce solutions. Expert in Shopify, WordPress/WooCommerce, 
            data management, and digital marketing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a href="/resume.pdf" className="btn-secondary flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-600">
            <a 
              href="tel:09162176966" 
              className="flex items-center gap-2 hover:text-primary-600 transition-colors"
            >
              <Phone size={20} />
              09162176966
            </a>
            <a 
              href="mailto:cmiclat14@gmail.com" 
              className="flex items-center gap-2 hover:text-primary-600 transition-colors"
            >
              <Mail size={20} />
              cmiclat14@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}