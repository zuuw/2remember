import DonateButton from "@/components/DonateButton";



export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Remember. Support. Inspire.
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-6">
          2Remember is a non-profit dedicated to raising awareness about dementia and Alzheimer’s through education, support, and community initiatives.
        </p>
        <DonateButton/>
      </section>
    </main>
  );
}
