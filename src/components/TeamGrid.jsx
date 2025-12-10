export default function TeamGrid() {
  return (
    <div className="grid gap-8 px-6 max-w-6xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className=" p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition group relative"
        >
          <div className="rounded-full p-1 transition group-hover:bg-orange-500">
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mb-4 shadow"
            />
          </div>

          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-gray-600">{member.role}</p>

          {/* Absolute overlay bio — appears under the picture without changing layout */}
          <div
            className="absolute left-1/2 top-[110%] -translate-x-1/2 w-[min(90%,18rem)]  backdrop-blur-sm p-3 rounded-lg shadow-lg text-gray-700 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-50"
            aria-hidden="false"
          >
            <p className="text-sm">
              {member.bio}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

const teamMembers = [
  { 
    name: "Bryce Schaab", 
    role: "Stratagist/UX&UI", 
    img: "/team/bryceweb.png",
    bio: "Bryce focuses on user experience and strategic planning for the project."
  },
  { 
    name: "Cody Mcleod", 
    role: "Lead Developer", 
    img: "/team/codyweb.png",
    bio: "Cody leads development and handles all core coding tasks for the team." 
  },
  { 
    name: "Andreas Jamal", 
    role: "Senior Designer", 
    img: "/team/andreasweb.png",
    bio: "Andreas creates visual designs and refines the brand identity." 
  },
  { 
    name: "Rayjim Jimenez", 
    role: "UX&UI", 
    img: "/team/rayjimweb.png",
    bio: "Rayjim helps design user-friendly interfaces and creative layouts." 
  },
  { 
    name: "Ace Nisperos", 
    role: "Manager", 
    img: "/team/aceweb.png",
    bio: "Ace organizes timelines, workflow, and ensures smooth collaboration." 
  },
  { 
    name: "Obaloluwa Yomi-A", 
    role: "Role / Title", 
    img: "/team/member6.jpg",
    bio: "Obaloluwa supports the team's goals with versatile contributions." 
  },
];
