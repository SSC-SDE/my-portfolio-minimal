const services = [
  {
    id: "01",
    title: "Full-Stack Web Development",
    description:
      "Building scalable, high-performance web applications using modern frameworks like React, Next.js, and .NET, tailored to your business needs.",
  },
  {
    id: "02",
    title: "ETRM/CTRM Solutions",
    description:
      "Providing expert consulting and development for ETRM/CTRM platforms like Endur, optimizing trade lifecycle management and risk assessment.",
  },
  {
    id: "03",
    title: "DevOps & Cloud Integration",
    description:
      "Implementing CI/CD pipelines, automating deployments, and integrating cloud solutions (Azure, AWS) to enhance system reliability and efficiency.",
  },
  {
    id: "04",
    title: "Custom Software Development",
    description:
      "Designing and developing tailor-made enterprise solutions, API integrations, and automation tools to streamline business operations.",
  },
  {
    id: "05",
    title: "Data Analytics & Automation",
    description:
      "Leveraging Python and SQL to develop data-driven solutions, automate workflows, and enhance decision-making with real-time analytics.",
  },
  {
    id: "06",
    title: "Technical SEO & Performance Optimization",
    description:
      "Optimizing web applications for speed, security, and SEO, ensuring high search rankings and seamless user experience.",
  },
];

export const Services = () => {
  return (
    <section className="text-white py-20">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
          <h2 className="text-5xl text-purple-300 font-extrabold sticky top-20">
            SERVICES
          </h2>
        </div>
        <div className="md:w-3/4">
          {services.map((service) => (
            <div key={service.id} className="mb-16 flex items-start">
              <div className="text-gray-300 font-bold text-5xl mr-6">
                {service.id}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
