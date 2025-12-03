export default function TeamGrid() {
return (
<div className="grid gap-8 px-6 max-w-6xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
{teamMembers.map((member, index) => (
<div
key={index}
className="bg-gray-100 p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
>
<img
src={member.img}
alt={member.name}
className="w-32 h-32 object-cover rounded-full mb-4 shadow"
/>
<h3 className="text-xl font-bold">{member.name}</h3>
<p className="text-gray-600">{member.role}</p>
</div>
))}
</div>
);
}

const teamMembers = [
{ name: "Member 1", role: "Role / Title", img: "/team/member1.jpg" },
{ name: "Member 2", role: "Role / Title", img: "/team/member2.jpg" },
{ name: "Member 3", role: "Role / Title", img: "/team/member3.jpg" },
{ name: "Member 4", role: "Role / Title", img: "/team/member4.jpg" },
{ name: "Member 5", role: "Role / Title", img: "/team/member5.jpg" },
{ name: "Member 6", role: "Role / Title", img: "/team/member6.jpg" },
];