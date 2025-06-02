export function FAQSection() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {[1, 2, 3].map((n) => (
          <details key={n} className="bg-white p-4 rounded shadow">
            <summary className="font-semibold cursor-pointer">What is question {n}?</summary>
            <p className="mt-2 text-left text-gray-600">This is the answer to question {n}.</p>
          </details>
        ))}
      </div>
    </section>
  );
}