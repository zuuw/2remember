import DonateButton from "@/components/DonateButton";

export default function HomePage() {
  return (
    <main className="pt-32 flex flex-col justify-center-safe items-center w-full">
      {/* Hero Section */}
      <section className="flex snap-y flex-col justify-center items-center min-h-screen text-center max-w-3xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">Remembering Matters</h1>
        <p className="text-lg text-gray-700 mb-8">
          2Remember is dedicated to raising awareness about dementia and Alzheimer's, supporting families, and educating communities.
        </p>
        {/* Placeholder for existing Donate Component */}
        <div className="mt-6">
          {/* <DonateButton /> */}
          <DonateButton />
        </div>
      </section>

      {/* About Section */}
      <section className="flex snap-y flex-col justify-center items-center min-h-screen mt-32 w-full max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">Who We Are</h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          We are a Calgary-based non-profit focused on uplifting loved ones affected by dementia. Through events, donations, and
          community involvement, we aim to bring comfort, awareness, and support to families facing memory-related conditions.
        </p>
      </section>

      {/* Mission Section */}
      <section className="flex snap-y flex-col justify-center items-center min-h-screen mt-32 w-full max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          Our mission is to create a more informed and compassionate society. We host awareness events, fundraise for
          research, and provide helpful resources for families and caregivers.
        </p>
      </section>

      {/* Values Section */}
      <section className="snap-y justify-center items-center min-h-screen mt-32 w-full max-w-6xl px-6 grid md:grid-cols-3 gap-10">
        {[
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
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold text-purple-700 mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.text}</p>
          </div>
        ))}
      </section>

      {/* Call to Action Section */}
      <section className=" flex flex-col justify-center items-center min-h-screen mt-40 mb-32 w-full max-w-4xl text-center px-6">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">Join Our Mission</h2>
        <p className="text-gray-700 text-lg mb-6">
          Whether through volunteering, donations, or simply spreading awareness, you can help make a difference.
        </p>
        <button className="bg-purple-600 text-white py-3 px-6 rounded-xl shadow-lg hover:bg-purple-700 transition">
          Get Involved
        </button>
      </section>
    </main>
  );
}
