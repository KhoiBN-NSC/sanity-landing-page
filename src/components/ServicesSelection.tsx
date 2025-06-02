export function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Know more about us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {['About Us', 'Services', 'Our Works'].map((title, idx) => (
          <div key={idx} className="p-6 border rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">Brief description of {title.toLowerCase()}.</p>
          </div>
        ))}
      </div>
    </section>
  );
}