import DonateButton from "../DonateButton";

export default function HeroSection() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen text-center max-w-3xl px-6 snap-start">
      <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">Remembering Matters</h1>
      <p className="text-lg text-gray-700 mb-8">
        2Remember is dedicated to raising awareness about dementia and Alzheimer's, supporting families, and educating communities.
      </p>
      <div className="mt-6">
        <DonateButton />
      </div>
    </section>
  );
}
