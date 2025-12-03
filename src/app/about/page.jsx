import TeamGrid from "@/components/TeamGrid";


export default function AboutPage() {
return (
<div className="w-full">
{/* Full-screen intro section */}
<section className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-purple-200 to-purple-50 text-center">
<h1 className="text-5xl font-bold mb-6">About 2Remember</h1>
<p className="max-w-3xl text-lg text-gray-700 leading-relaxed">
2Remember is a Calgary-based non-profit dedicated to raising awareness about
dementia and Alzheimer’s. We strive to educate, support, and empower
families affected by memory-related conditions while bringing the
community together in meaningful ways.
</p>
<p className="max-w-3xl text-lg text-gray-700 mt-4 leading-relaxed">
Our mission is to create a future where no one faces dementia alone.
</p>
</section>


{/* Team section */}
<section className="py-20 bg-white">
<h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
<TeamGrid />
</section>
</div>
);
}
