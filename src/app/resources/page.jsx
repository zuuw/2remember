'use client';

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";


export default function ResourcesPage() {
const [search, setSearch] = useState("");
const resources = [
{ title: "Memory Journal Template", slug: "memory-journal" },
{ title: "Caregiver Daily Checklist", slug: "daily-checklist" },
{ title: "Communication Tips Guide", slug: "communication-tips" },
];


const filtered = resources.filter((res) =>
res.title.toLowerCase().includes(search.toLowerCase())
);


return (
<div className="min-h-screen w-full p-6 pt-24">
{/* Banner */}
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
className="w-full bg-purple-600 text-white rounded-2xl p-8 shadow-lg text-center max-w-3xl mx-auto mb-10"
>
<h1 className="text-3xl font-bold mb-2">Free Resources for Caregivers & Families</h1>
<p className="text-lg opacity-90">
These resources are designed to support caretakers and those living with or loving
someone with Alzheimer’s or dementia. Your support helps 2Remember continue creating
meaningful tools.
</p>
</motion.div>


{/* Search */}
<div className="max-w-xl mx-auto mb-8">
<input
type="text"
placeholder="Search resources..."
value={search}
onChange={(e) => setSearch(e.target.value)}
className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
/>
</div>


{/* Resource Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
{filtered.map((res, i) => (
<motion.div
key={res.slug}
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: i * 0.1 }}
className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer border border-gray-100"
>
<Link href={`/resources/${res.slug}`}>
<div>
<h2 className="text-xl font-semibold mb-2 text-purple-700">{res.title}</h2>
<p className="text-gray-600 text-sm">Click to view and download</p>
</div>
</Link>
</motion.div>
))}
</div>
</div>
);
}