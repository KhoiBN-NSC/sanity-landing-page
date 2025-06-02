export function TeamSection() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="text-center">
            <img
              width={120}
              height={120}
              src="https://avatar.iran.liara.run/public"
              alt={`Team ${index}`}
              className="rounded-full mx-auto mb-2 border-blue-500 border-2"
            />
            <p className="font-semibold">Jane Doe</p>
            <p className="text-sm text-gray-500">Designer</p>
          </div>
        ))}
      </div>
    </section>
  );
}
