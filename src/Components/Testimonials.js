function Testimonials() {
  return (
    <section className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-6">What Parents Say</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow p-6 rounded-xl">
          "Great learning environment and discipline."
        </div>

        <div className="bg-white shadow p-6 rounded-xl">
          "My child has improved academically and spiritually."
        </div>
      </div>
    </section>
  );
}

export default Testimonials;