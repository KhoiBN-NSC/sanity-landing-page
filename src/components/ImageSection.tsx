import Image from 'next/image';

export function ImageSection() {
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <Image src="https://placehold.co/800x400" alt="Sample" className="rounded-xl shadow-md mx-auto" />
    </section>
  );
}