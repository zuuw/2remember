import Footer from "@/components/Footer";

const resourcesData = {
  "memory-journal": {
    title: "Memory Journal Template",
    description: "A printable template to help track memories and daily events for loved ones.",
    pdfUrl: "/resources/DailyMemoryJournal2R.pdf",
  },
  "daily-checklist": {
    title: "Caregiver Daily Checklist",
    description: "A checklist for daily tasks to support your loved ones and manage caregiving effectively.",
    pdfUrl: "/pdfs/daily-checklist.pdf",
  },
  "communication-tips": {
    title: "Communication Tips Guide",
    description: "Tips to communicate effectively with someone living with dementia or Alzheimer’s.",
    pdfUrl: "/pdfs/communication-tips.pdf",
  },
};

// 1. Make the component async
export default async function ResourcePage({ params }) {
  // 2. Await the params object before using it
  const { slug } = await params;
  
  // 3. Use the awaited slug
  const resource = resourcesData[slug];

  if (!resource) {
    return <div className="p-6">Resource not found: {slug}</div>;
  }

  const { title, description, pdfUrl } = resource;

  return (
    <div className="min-h-screen w-full p-6 pt-24 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">{title}</h1>
      <p className="text-gray-700 mb-6 max-w-2xl">{description}</p>

      {/* PDF Viewer */}
      <div className="w-full h-[80vh] border rounded-xl overflow-hidden shadow-lg mb-6">
        <iframe src={pdfUrl} className="w-full h-full" />
      </div>

      {/* Download */}
      <a
        href={pdfUrl}
        download
        className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 transition"
      >
        Download PDF
      </a>
      <Footer />
    </div>
  );
}