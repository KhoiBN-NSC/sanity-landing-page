export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">Featured Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {[1, 2].map((n) => (
          <div key={n} className="rounded-xl overflow-hidden shadow-md">
            <img src="https://placehold.co/600x400" alt={`Work ${n}`} />
            <p className="p-4">Project {n} description here.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
