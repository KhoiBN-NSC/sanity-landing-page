export function ImageTextSection() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
      <img src="https://placehold.co/400x300" alt="Collab" className="rounded-xl shadow-md" />
      <div>
        <h3 className="text-2xl font-bold mb-2">Why Choose Us</h3>
        <p className="text-gray-700">We deliver powerful experiences by combining design, strategy, and scalable architecture to power fictional futures.</p>
      </div>
    </section>
  );
}