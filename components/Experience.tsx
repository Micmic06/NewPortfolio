import { Calendar, MapPin } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: "Freelance Virtual Assistant",
      company: "Project-Based Clients",
      location: "Remote",
      period: "March 2023 - Present",
      description: "Providing comprehensive virtual assistance services to multiple clients across various industries.",
      achievements: [
        "Processed and validated lead data ensuring quality standards",
        "Managed administrative tasks and organized internal systems",
        "Handled email management and client outreach campaigns",
        "Created content and visuals for social media marketing",
        "Researched and repurposed high-performing content",
        "Specialized in ecommerce support for Shopify and WordPress/WooCommerce stores"
      ]
    },
    {
      title: "SEO/CMS Specialist & Web Developer",
      company: "DialBox Solutions - EmpowerMe Business",
      location: "Remote",
      period: "May 2023 - June 2024",
      description: "Led SEO initiatives and web development projects to improve client online presence and search rankings.",
      achievements: [
        "Conducted comprehensive keyword research and competitor analysis",
        "Analyzed website performance using Google Analytics and Search Console",
        "Generated detailed SEO performance reports with improvement recommendations",
        "Created SEO-friendly URLs and optimized internal linking structures",
        "Developed and maintained client websites focusing on design and functionality",
        "Improved organic search traffic by implementing technical SEO best practices"
      ]
    },
    {
      title: "Marketing Department Intern",
      company: "University of Perpetual Help System - Laguna",
      location: "Laguna, Philippines",
      period: "August 2021 - January 2022",
      description: "Completed 500-hour internship program in the marketing department, focusing on digital marketing and content creation.",
      achievements: [
        "Created visuals and content for social media presence",
        "Collaborated effectively with marketing team and fellow interns",
        "Successfully completed all internship requirements and objectives",
        "Gained hands-on experience in digital marketing strategies"
      ]
    },
    {
      title: "Quality Assurance Trainee",
      company: "CREOTEC Philippines Inc.",
      location: "Laguna, Philippines",
      period: "Senior High School Work Immersion",
      description: "Participated in work immersion program focusing on quality assurance processes in a manufacturing environment.",
      achievements: [
        "Ensured products met standard quality expectations in simulated factory environment",
        "Maintained consistent attendance and punctuality throughout the program",
        "Learned quality control processes and attention to detail",
        "Developed understanding of industrial quality standards"
      ]
    }
  ]

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A track record of delivering results across virtual assistance, SEO, and tech operations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-3 top-8 w-0.5 h-full bg-gray-200"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-sm"></div>
              
              <div className="card ml-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-primary-600 font-medium">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-gray-500 mt-2 md:mt-0">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-gray-600 flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}