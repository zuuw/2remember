export default function ValuesSection() {
  const values = [
    {
      title: "Compassion",
      text: "We believe empathy is the foundation of a strong and caring community.",
    },
    {
      title: "Awareness",
      text: "Education helps remove stigma and encourages better understanding.",
    },
    {
      title: "Support",
      text: "We stand with families dealing with memory-related challenges.",
    },
  ];

  return (
    <section className="justify-center items-center min-h-screen w-full max-w-6xl px-6 grid md:grid-cols-3 gap-10 snap-start">
      {values.map((item) => (
        <div
          key={item.title}
          className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100 hover:shadow-xl transition"
        >
          <h3 className="text-xl font-bold text-purple-700 mb-2">{item.title}</h3>
          <p className="text-gray-700">{item.text}</p>
        </div>
      ))}
    </section>
  );
}
