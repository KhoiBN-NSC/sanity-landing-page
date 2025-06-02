export function PricingSection() {
  return (
    <section id="pricing" className="py-16 bg-blue-500 text-center text-white">
      <h2 className="text-3xl font-bold mb-10">Pricing Plans</h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {['Basic', 'Pro', 'Enterprise'].map((plan, i) => (
          <div key={i} className="border p-6 rounded-xl shadow-md w-64">
            <h3 className="text-xl font-semibold mb-2">{plan}</h3>
            <p className="text-2xl font-bold mb-4">${i * 40 + 29}/mo</p>
            <ul className="text-left text-sm mb-4">
              <li>✔ Feature 1</li>
              <li>✔ Feature 2</li>
              <li>✔ Feature 3</li>
            </ul>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
}