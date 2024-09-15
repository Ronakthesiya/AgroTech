import React from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { Link, Outlet, useLocation } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#051F20] text-white p-4 shadow-md fixed top-0 left-0 w-full z-50 flex justify-between items-center">
      <h1 className="text-3xl font-bold">Crop Guard</h1>
      <div className="mr-12">
        <Link to="/User/MyProfile" className="text-white text-xl mr-4 hover:underline">
          My Profile
        </Link>
        <Link to="/User" className="text-white text-xl hover:underline">
          logout
        </Link>
      </div>
    </nav>
  );
};

const Sidebar1 = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar
          rootStyles={{
            [`.${sidebarClasses.container}`]: {
              backgroundColor: "#235347",
              color: "#435739",
              height: "100%",
              boxShadow: "2px 0 8px rgba(0, 0, 0, 0.5)",
              position: "fixed",
              top: "68px",
              left: 0,
              zIndex: 40,
              width: "250px",
              margin: 0
            },
          }}
        >
          <Menu
            menuItemStyles={{
              button: ({ level, active, disabled }) => ({
                color: active || location.pathname === "/documentatoin" ? "black" : "white",
                backgroundColor: active || location.pathname === "/documentatoin" ? "#DAF1DE" : "transparent",
                fontSize: "18px",
                padding: "10px 20px",
                borderRadius: "8px",
                margin: "5px 10px",
                transition: "background-color 0.3s ease",
                '&:hover': {
                  color: "black",
                },
              }),
            }}
          >
            <MenuItem component={<Link to="/User/Community" />} active={location.pathname === "/User/Community" || location.pathname.includes("/User/Post/")}>Community</MenuItem>
            
            <MenuItem component={<Link to="/User/NewScan" />} active={location.pathname === "/User/NewScan"}>Scan</MenuItem>
            <MenuItem component={<Link to="/User/ScanHistory" />} active={location.pathname === "/User/ScanHistory"}>Scan History</MenuItem>
            <MenuItem component={<Link to="/User/Disease" />} active={location.pathname === "/User/Disease"}>All Disease</MenuItem>
            <MenuItem component={<Link to="/User/AddPost" />} active={location.pathname === "/User/AddPost"}>Add New Post</MenuItem>
            <MenuItem component={<Link to="/User/MyPost" />} active={location.pathname === "/User/MyPost"}>My Post</MenuItem>
            <MenuItem component={<Link to="/User/SearchProfile" />} active={location.pathname === "/User/SearchProfile" || location.pathname.includes("/User/UserDetails/")}>Search Profile</MenuItem>
          </Menu>
        </Sidebar>

        <div className="pb-32 flex-1 mt-[63px] p-5 bg-[#DAF1DE]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar1;



// import React, { useState, createContext, useContext } from 'react';
// import { LayoutDashboard, BarChart3, UserCircle, Boxes, Package, Receipt, Settings, LifeBuoy, ChevronFirst, ChevronLast } from 'lucide-react';
// import { Outlet, Link } from 'react-router-dom';

// const SidebarContext = createContext();

// function NewSidebar({ children, expanded }) {
//   return (
//     <aside className="h-screen">
//       <nav className="h-full flex flex-col bg-green-300 border-r shadow-sm">
//         <SidebarContext.Provider value={{ expanded }}>
//           <ul className="flex-1 px-3">{children}</ul>
//         </SidebarContext.Provider>
//       </nav>
//     </aside>
//   );
// }

// function SidebarItem({ icon, text, active }) {
//   const { expanded } = useContext(SidebarContext);

//   return (
//     <li
//       className={`relative flex items-center py-2 px-3 my-1 h-12 font-medium rounded-md cursor-pointer transition-colors group ${
//         active
//           ? "bg-gradient-to-tr from-green-200 to-green-100 text-indigo-800"
//           : "hover:bg-white text-gray-950"
//       }`}
//     >
//       {icon}
//       <span
//         className={`overflow-hidden transition-all text-black ${
//           expanded ? "w-40 ml-3" : "w-0"
//         }`}
//       >
//         {text}
//       </span>

//       {!expanded && (
//         <div
//           className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-green-100 text-green-800 text-sm invisible opacity-0 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
//         >
//           {text}
//         </div>
//       )}
//     </li>
//   );
// }

// function Navbar({ expanded, setExpanded }) {
//   return (
//     <nav className="bg-[#051F20] text-white p-4 shadow-md flex justify-between items-center h-full">
//       <div className='flex flex-row'>
//         <button
//           onClick={() => setExpanded(curr => !curr)}
//           className="p-1.5 rounded-lg bg-white hover:bg-gray-100"
//           aria-label={expanded ? "Collapse Sidebar" : "Expand Sidebar"}
//         >
//           {expanded ? <ChevronFirst className="text-black" /> : <ChevronLast className="text-black" />}
//         </button>
//         <h1 className="text-2xl ml-12">AgriTech</h1>
//       </div>
//       <div className="mr-12">
//         <Link to="/User/MyProfile" className="text-white mr-4 hover:underline">
//           My Profile
//         </Link>
//         <Link to="/User" className="text-white hover:underline">
//           About
//         </Link>
//       </div>
//     </nav>
//   );
// }

// const Sidebar1 = () => {
//   const [expanded, setExpanded] = useState(true);

//   return (
//     <div className="h-screen flex flex-col">
//       <div className="w-full bg-[#051F20] fixed top-0 left-0">
//         <Navbar expanded={expanded} setExpanded={setExpanded} />
//       </div>
//       <div className="flex flex-1">
//         <div className='fixed top-24 left-0'>
//         <NewSidebar expanded={expanded} className="h-full w-1/5">
//           <SidebarItem icon={<LayoutDashboard size={20} />} text="Community" alert />
//           <SidebarItem icon={<BarChart3 size={20} />} text="Scan" alert />
//           <SidebarItem icon={<UserCircle size={20} />} text="Scan History" alert />
//           <SidebarItem icon={<Boxes size={20} />} text="All Disease" alert />
//           <SidebarItem icon={<Package size={20} />} text="Add New Post" alert />
//           <SidebarItem icon={<Receipt size={20} />} text="My Post" alert />
//           <hr className='my-3' />
//           <SidebarItem icon={<Settings size={20} />} text="Search Profile" alert />
//           <SidebarItem icon={<LifeBuoy size={20} />} text="Help" alert />
//         </NewSidebar>
//         </div>
//         <div className="flex-1 flex">
//           <div className="flex-1 p-5 bg-[#DAF1DE] overflow-y-auto">
//             <Outlet />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar1;










// import React, { useState, createContext, useContext } from 'react';
// import { LayoutDashboard, BarChart3, UserCircle, Boxes, Package, Receipt, Settings, LifeBuoy, ChevronFirst, ChevronLast } from 'lucide-react';
// import { Outlet, Link } from 'react-router-dom';

// const SidebarContext = createContext();

// function NewSidebar({ children, expanded }) {
//   return (
//     <aside className="fixed top-[70px] left-0 h-screen bg-green-300 border-r shadow-sm">
//       <nav className="h-full flex flex-col">
//         <SidebarContext.Provider value={{ expanded }}>
//           <ul className="flex-1 px-3">{children}</ul>
//         </SidebarContext.Provider>
//       </nav>
//     </aside>
//   );
// }

// function SidebarItem({ icon, text, active }) {
//   const { expanded } = useContext(SidebarContext);

//   return (
//     <li
//       className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
//         active
//           ? "bg-gradient-to-tr from-green-200 to-green-100 text-indigo-800"
//           : "hover:bg-white text-gray-950"
//       }`}
//     >
//       {icon}
//       <span
//         className={`overflow-hidden transition-all text-black ${
//           expanded ? "w-40 ml-3" : "w-0"
//         }`}
//       >
//         {text}
//       </span>

//       {!expanded && (
//         <div
//           className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-green-100 text-green-800 text-sm invisible opacity-0 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
//         >
//           {text}
//         </div>
//       )}
//     </li>
//   );
// }

// function Navbar({ expanded, setExpanded }) {
//   return (
//     <nav className="fixed top-0 w-[calc(100%)] bg-[#051F20] text-white p-4 shadow-md flex justify-between items-center">
//       <div className='flex flex-row'>
//         <button
//           onClick={() => setExpanded(curr => !curr)}
//           className="p-1.5 rounded-lg bg-white hover:bg-gray-100"
//           aria-label={expanded ? "Collapse Sidebar" : "Expand Sidebar"}
//         >
//           {expanded ? <ChevronFirst className="text-black" /> : <ChevronLast className="text-black" />}
//         </button>
//         <h1 className="text-2xl ml-12">AgriTech</h1>
//       </div>
//       <div className="mr-12">
//         <Link to="/User/MyProfile" className="text-white mr-4 hover:underline">
//           My Profile
//         </Link>
//         <Link to="/User" className="text-white hover:underline">
//           About
//         </Link>
//       </div>
//     </nav>
//   );
// }

// const Sidebar1 = () => {
//   const [expanded, setExpanded] = useState(true);

//   return (
//     <div className="h-screen flex flex-col">
//       <Navbar expanded={expanded} setExpanded={setExpanded} />
//       <div className="flex pt-16 justify-end"> {/* Add padding to prevent content overlap */}
//         <NewSidebar expanded={expanded}>
//           <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" alert />
//           <SidebarItem icon={<BarChart3 size={20} />} text="Statistics" alert />
//           <SidebarItem icon={<UserCircle size={20} />} text="Users" alert />
//           <SidebarItem icon={<Boxes size={20} />} text="Inventory" alert />
//           <SidebarItem icon={<Package size={20} />} text="Orders" alert />
//           <SidebarItem icon={<Receipt size={20} />} text="Billings" alert />
//           <hr className='my-3' />
//           <SidebarItem icon={<Settings size={20} />} text="Settings" alert />
//           <SidebarItem icon={<LifeBuoy size={20} />} text="Help" alert />
//         </NewSidebar>
//         <div className="p-5 ml-[250] bg-[#DAF1DE] overflow-y-auto"> {/* Add margin-left to offset the sidebar */}
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar1;

// import React, { useState, createContext, useContext } from 'react';
// import { LayoutDashboard, BarChart3, UserCircle, Boxes, Package, Receipt, Settings, LifeBuoy, ChevronFirst, ChevronLast } from 'lucide-react';
// import { Outlet, Link } from 'react-router-dom';

// const SidebarContext = createContext();

// function NewSidebar({ children, expanded, className }) {
//   return (
//     <aside className={className}>
//       <nav className="h-full flex flex-col bg-green-300 border-r shadow-sm">
//         <SidebarContext.Provider value={{ expanded }}>
//           <ul className="flex-1 px-3">{children}</ul>
//         </SidebarContext.Provider>
//       </nav>
//     </aside>
//   );
// }

// function SidebarItem({ icon, text, active }) {
//   const { expanded } = useContext(SidebarContext);

//   return (
//     <li
//       className={`relative flex items-center py-2 px-3 my-1 h-12 font-medium rounded-md cursor-pointer transition-colors group ${
//         active
//           ? "bg-gradient-to-tr from-green-200 to-green-100 text-indigo-800"
//           : "hover:bg-white text-gray-950"
//       }`}
//     >
//       {icon}
//       <span
//         className={`overflow-hidden transition-all text-black ${
//           expanded ? "w-40 ml-3" : "w-0"
//         }`}
//       >
//         {text}
//       </span>

//       {!expanded && (
//         <div
//           className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-green-100 text-green-800 text-sm invisible opacity-0 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
//         >
//           {text}
//         </div>
//       )}
//     </li>
//   );
// }

// function Navbar({ expanded, setExpanded }) {
//   return (
//     <nav className="bg-[#051F20] text-white p-4 shadow-md flex justify-between items-center h-full">
//       <div className='flex flex-row'>
//         <button
//           onClick={() => setExpanded(curr => !curr)}
//           className="p-1.5 rounded-lg bg-white hover:bg-gray-100"
//           aria-label={expanded ? "Collapse Sidebar" : "Expand Sidebar"}
//         >
//           {expanded ? <ChevronFirst className="text-black" /> : <ChevronLast className="text-black" />}
//         </button>
//         <h1 className="text-2xl ml-12">AgriTech</h1>
//       </div>
//       <div className="mr-12">
//         <Link to="/User/MyProfile" className="text-white mr-4 hover:underline">
//           My Profile
//         </Link>
//         <Link to="/User" className="text-white hover:underline">
//           About
//         </Link>
//       </div>
//     </nav>
//   );
// }

// const Sidebar1 = () => {
//   const [expanded, setExpanded] = useState(true);

//   return (
//     <div className="h-screen flex flex-col">
//       <div className="w-full bg-[#051F20] fixed top-0 left-0">
//         <Navbar expanded={expanded} setExpanded={setExpanded} />
//       </div>
//       <div className="flex flex-1 mt-16"> {/* Adjusted to account for navbar height */}
//         <NewSidebar expanded={expanded} className="fixed top-16 left-0 h-full"> {/* Adjusted top position */}
//           <SidebarItem icon={<LayoutDashboard size={20} />} text="Community" />
//           <SidebarItem icon={<BarChart3 size={20} />} text="Scan" />
//           <SidebarItem icon={<UserCircle size={20} />} text="Scan History" />
//           <SidebarItem icon={<Boxes size={20} />} text="All Disease" />
//           <SidebarItem icon={<Package size={20} />} text="Add New Post" />
//           <SidebarItem icon={<Receipt size={20} />} text="My Post" />
//           <hr className='my-3' />
//           <SidebarItem icon={<Settings size={20} />} text="Search Profile" />
//           <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
//         </NewSidebar>
//         <div className="flex-1 ml-[240px] p-5 bg-[#DAF1DE] overflow-y-auto"> {/* Adjusted margin-left to match sidebar width */}
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar1;




// import React, { useState, createContext, useContext } from "react";
// import {
//   LayoutDashboard,
//   BarChart3,
//   UserCircle,
//   Boxes,
//   Package,
//   Receipt,
//   Settings,
//   LifeBuoy,
//   ChevronFirst,
//   ChevronLast,
// } from "lucide-react";
// import { Outlet, Link } from "react-router-dom";

// const SidebarContext = createContext();

// function NewSidebar({ children, expanded }) {
//   return (
//     <aside
//       className={`fixed top-16 left-0 h-screen bg-green-300 border-r shadow-sm transition-transform ${
//         expanded ? "w-64" : "w-16"
//       }`}
//     >
//       <nav className="h-full flex flex-col">
//         <SidebarContext.Provider value={{ expanded }}>
//           <ul className="flex-1 px-3">{children}</ul>
//         </SidebarContext.Provider>
//       </nav>
//     </aside>
//   );
// }

// function SidebarItem({ icon, text, active }) {
//   const { expanded } = useContext(SidebarContext);

//   return (
//     <li
//       className={`relative flex items-center h-12 py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
//         active
//           ? "bg-gradient-to-tr from-green-200 to-green-100 text-indigo-800"
//           : "hover:bg-white text-gray-950"
//       }`}
//     >
//       {icon}
//       <span
//         className={`overflow-hidden transition-all text-black ${
//           expanded ? "w-40 ml-3" : "w-0"
//         }`}
//       >
//         {text}
//       </span>

//       {!expanded && (
//         <div
//           className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-green-100 text-green-800 text-sm invisible opacity-0 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
//         >
//           {text}
//         </div>
//       )}
//     </li>
//   );
// }

// function Navbar({ expanded, setExpanded }) {
//   return (
//     <nav className="fixed top-0 left-0 w-full bg-[#051F20] text-white p-4 shadow-md flex justify-between items-center z-10">
//       <div className="flex flex-row">
//         <button
//           onClick={() => setExpanded((curr) => !curr)}
//           className="p-1.5 rounded-lg bg-white hover:bg-gray-100"
//           aria-label={expanded ? "Collapse Sidebar" : "Expand Sidebar"}
//         >
//           {expanded ? (
//             <ChevronFirst className="text-black" />
//           ) : (
//             <ChevronLast className="text-black" />
//           )}
//         </button>
//         <h1 className="text-2xl ml-12">AgriTech</h1>
//       </div>
//       <div className="mr-12">
//         <Link to="/User/MyProfile" className="text-white mr-4 hover:underline">
//           My Profile
//         </Link>
//         <Link to="/User" className="text-white hover:underline">
//           About
//         </Link>
//       </div>
//     </nav>
//   );
// }

// const Sidebar1 = () => {
//   const [expanded, setExpanded] = useState(true);

//   return (
//     <div className="h-screen flex">
//       <NewSidebar expanded={expanded} className="fixed top-16 left-0 h-full">
//         {" "}
//         {/* Adjusted top position */}
//         <Link to="/User/Community">
//           <SidebarItem icon={<LayoutDashboard size={20} />} text="Community" />
//         </Link>
//         <Link to="/User/NewScan">
//           <SidebarItem icon={<BarChart3 size={20} />} text="Scan" />
//         </Link>
//         <Link to="/User/ScanHistory">
//           <SidebarItem icon={<UserCircle size={20} />} text="Scan History" />
//         </Link>
//         <Link to="/User/Disease">
//           <SidebarItem icon={<Boxes size={20} />} text="All Disease" />
//         </Link>
//         <Link to="/User/AddPost">
//           <SidebarItem icon={<Package size={20} />} text="Add New Post" />
//         </Link>
//         <Link to="/User/MyPost">
//           <SidebarItem icon={<Receipt size={20} />} text="My Post" />
//         </Link>
//         <hr className="my-3" />
//         <Link to="/User/SearchProfile">
//           <SidebarItem icon={<Settings size={20} />} text="Search Profile" />
//         </Link>
//         <Link>
//           <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
//         </Link>
//       </NewSidebar>
//       <div className="flex-1 flex flex-col mt-16 ml-[16rem]">
//         {" "}
//         {/* Adjust margin-left to sidebar width */}
//         <Navbar expanded={expanded} setExpanded={setExpanded} />
//         <div className="p-5 bg-[#DAF1DE] overflow-y-auto">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar1;
