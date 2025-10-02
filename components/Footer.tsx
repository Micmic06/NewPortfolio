export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Christian M. Miclat</h3>
            <p className="text-gray-400 leading-relaxed">
              Professional Virtual Assistant specializing in tech operations, 
              ecommerce management, and digital marketing solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Virtual Assistant</li>
              <li>Shopify Management</li>
              <li>WordPress/WooCommerce</li>
              <li>SEO Optimization</li>
              <li>Data Management</li>
              <li>Lead Generation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>cmiclat14@gmail.com</p>
              <p>09162176966</p>
              <p>Philippines</p>
              <p className="text-sm mt-4">
                Available for remote work worldwide
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Christian M. Miclat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}