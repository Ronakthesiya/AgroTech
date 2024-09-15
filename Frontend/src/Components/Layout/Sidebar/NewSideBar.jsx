// import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
// import { useContext, createContext, useState } from "react";

// const SidebarContext = createContext();


// export default function NewSidebar({ children }) {
//     const [expanded, setExpanded] = useState(true);
  
//     return (
//       <aside className="h-screen">
//         <nav className="h-full flex flex-col bg-green-300 border-r shadow-sm">
//           <div className="p-4 pb-2 flex justify-end">
//             <button
//               onClick={() => setExpanded((curr) => !curr)}
//               className="p-1.5 rounded-lg bg-white hover:bg-gray-100"
//               aria-label={expanded ? "Collapse Sidebar" : "Expand Sidebar"}
//             >
//               {expanded ? <ChevronFirst className="text-black" /> : <ChevronLast className="text-black" />}
//             </button>
//           </div>
  
//           <SidebarContext.Provider value={{ expanded }}>
//             <ul className="flex-1 px-3">{children}</ul>
//           </SidebarContext.Provider>
//         </nav>
//       </aside>
//     );
//   }
  
//   export function SidebarItem({ icon, text, active }) {
//     const { expanded } = useContext(SidebarContext);
  
//     return (
//       <li
//         className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
//           active
//             ? "bg-gradient-to-tr from-green-200 to-green-100 text-indigo-800"
//             : "hover:bg-white text-gray-950"
//         }`}
//       >
//         {icon}
//         <span
//           className={`overflow-hidden transition-all text-black ${
//             expanded ? "w-40 ml-3" : "w-0"
//           }`}
//         >
//           {text}
//         </span>
  
//         {!expanded && (
//           <div
//             className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-green-100 text-green-800 text-sm invisible opacity-0 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
//           >
//             {text}
//           </div>
//         )}
//       </li>
//     );
//   }
