import { 
  ShoppingCart, 
  Search, 
  Database, 
  Mail, 
  BarChart3, 
  Settings,
  Globe,
  Users
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Ecommerce Management",
      description: "Expert setup and management of Shopify stores and WordPress/WooCommerce sites. Product listings, inventory management, and store optimization.",
      features: ["Shopify Store Setup", "WooCommerce Development", "Product Management", "Store Optimization"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO & Digital Marketing",
      description: "Comprehensive SEO strategies to improve search rankings and drive organic traffic. Keyword research, content optimization, and performance tracking.",
      features: ["Keyword Research", "On-Page SEO", "Google Analytics", "Performance Reports"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Management",
      description: "Efficient data entry, validation, and organization. Lead qualification, database management, and system integration.",
      features: ["Data Entry & Validation", "Lead Qualification", "Database Organization", "System Integration"]
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email & Outreach",
      description: "Professional email management and outreach campaigns. Lead generation, follow-up sequences, and client communication.",
      features: ["Email Management", "Lead Generation", "Outreach Campaigns", "Follow-up Automation"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Reporting",
      description: "Comprehensive performance monitoring and detailed reporting. Track KPIs, analyze trends, and provide actionable insights.",
      features: ["Performance Monitoring", "Custom Reports", "Data Analysis", "KPI Tracking"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Administrative Support",
      description: "Complete administrative assistance including document management, scheduling, and project coordination.",
      features: ["Document Management", "Project Coordination", "Scheduling", "Administrative Tasks"]
    }
  ]

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Services I Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive virtual assistance services to help your business grow and succeed online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
              <div className="text-primary-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-500 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}