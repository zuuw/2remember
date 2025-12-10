export function ResourceSlugPage({ title, description, pdfUrl }) {
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
</div>
);
}