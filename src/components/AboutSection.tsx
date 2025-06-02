import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-blue-400 text-white">
      <div className="py-16 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <Image src="https://placehold.co/300x300" alt="Team Member" className="rounded-full" />
        <div>
          <h2 className="text-3xl font-bold mb-1">Dedicated to help people design needs</h2>
          <p className="font-semibold text-sm text-center italic">We blend design and strategy to build incredible experiences for our clients</p>
        </div>
      </div>
    </section>
  );
}