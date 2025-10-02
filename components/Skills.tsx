export default function Skills() {
  const skillCategories = [
    {
      title: "Virtual Assistant Skills",
      skills: [
        "Data Entry and Vetting",
        "Email Management",
        "Administrative Tasks",
        "Lead Generation",
        "Customer Support",
        "Project Coordination"
      ]
    },
    {
      title: "Ecommerce Platforms",
      skills: [
        "Shopify Store Management",
        "WordPress/WooCommerce",
        "Product Listings",
        "Inventory Management",
        "Order Processing",
        "Store Optimization"
      ]
    },
    {
      title: "SEO & Analytics",
      skills: [
        "Google Analytics",
        "Google Search Console",
        "Semrush",
        "AHRef",
        "Keyword Research",
        "Performance Reporting"
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        "BrilliantDirectories",
        "GoHighLevel",
        "Asana",
        "Trello",
        "LinkedIn Sales Navigator",
        "Apollo",
        "ZoomInfo"
      ]
    },
    {
      title: "Technical Skills",
      skills: [
        "HTML & CSS",
        "Basic JavaScript",
        "C++ & Java",
        "Network Troubleshooting",
        "Database Management",
        "System Integration"
      ]
    },
    {
      title: "Creative & Design",
      skills: [
        "Canva Design",
        "CapCut Video Editing",
        "Social Media Content",
        "Graphic Design",
        "Content Creation",
        "Brand Guidelines"
      ]
    }
  ]

  const proficiencyLevels = [
    { name: "Microsoft Office Suite", level: 95 },
    { name: "Google Workspace", level: 95 },
    { name: "Shopify Management", level: 90 },
    { name: "WordPress/WooCommerce", level: 85 },
    { name: "SEO Optimization", level: 88 },
    { name: "Data Analysis", level: 85 },
    { name: "Lead Generation", level: 92 },
    { name: "Email Marketing", level: 88 }
  ]

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive skill set covering virtual assistance, ecommerce, and technical operations
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <h3 className="text-lg font-semibold text-primary-600 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Proficiency Levels
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {proficiencyLevels.map((item, index) => (
              <div key={index} className="card">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">{item.name}</span>
                  <span className="text-sm text-gray-500">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}