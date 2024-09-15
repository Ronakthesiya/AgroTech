// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";

// const SearchProfile = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const UserList = [
//     {
//       Image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIyUPa5mmgGYGk-VW7rk5GGMfL2OO_knedg&s",
//       Name: "User One",
//       Bio: "Bio for user one.",
//       Email: "userone@example.com",
//     },
//     {
//       Image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Z8a9szVGzDmMBJFpcFlG-yt66EBUctXipQ&s",
//       Name: "User Two",
//       Bio: "Bio for user two.",
//       Email: "usertwo@example.com",
//     },
//     {
//       Image:
//         "https://cdn.pixabay.com/photo/2024/04/11/00/15/ai-generated-8688919_1280.jpg",
//       Name: "User Three",
//       Bio: "Bio for user three.",
//       Email: "userthree@example.com",
//     },
//   ];

//   const filteredUsers = UserList.filter((user) =>
//     user.Name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-3xl font-semibold">Find Other Profiles</h2>
//       </div>
//       <div className="bg-[#235347] h-[3px] w-full mb-4"></div>

//       <div className="flex mb-4">
//         <input
//           type="text"
//           placeholder="Search by name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="p-2 border rounded-l-md w-full"
//           aria-label="Search by name"
//         />
//         <button
//           className="p-3 bg-[#235347] text-white rounded-r-md flex items-center"
//           aria-label="Search"
//         >
//           <FaSearch />
//         </button>
//       </div>

//       <div>
//         {filteredUsers.length > 0 ? (
//           filteredUsers.map((user, index) => (
//             <div
//               key={index}
//               className="flex items-center border-b p-4 mb-4 border rounded-lg bg-white hover:bg-gray-100"
//             >
//               <img
//                 src={user.Image}
//                 alt={user.Name}
//                 className="w-16 h-16 rounded-full ml-6 mr-10"
//               />
//               <div className="flex justify-between flex-grow items-center">
//                 <div>
//                   <h3 className="text-xl font-semibold">{user.Name}</h3>
//                   <p>{user.Bio}</p>
//                   <p className="text-gray-500">{user.Email}</p>
//                 </div>
//                 <button className="bg-[#235347] text-white p-3 rounded-md flex items-center h-10">
//                   <span>View More</span>
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center">No users found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchProfile;




// import React, { useEffect, useState } from "react";
// import { FaSearch } from "react-icons/fa";

// const SearchProfile = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading,setLoading] = useState(false)
//   const [UserList, setUserList] = useState([{}]);
//   const [error,setError] = useState("")


//   useEffect(()=>{
//     const id = localStorage.getItem("UserID")
//     console.log(id)
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/v1/users/all-user/"+id);
//         console.log(response);
//         if (!response.ok) {
//           throw new Error("Failed to fetch posts");
//         }
//         const data = await response.json();
//         console.log(data)
//         setUserList(data.data); // Assuming the response is an array of posts
//         console.log(UserList)
//         console.log(data.data)
//         // console.log(typeof data.data)
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };
  
//     fetchPosts();
//   },[])

//   console.log(UserList)

//   const filteredUsers = UserList.filter((user) =>
//     user.Name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-3xl font-semibold">Find Other Profiles</h2>
//       </div>
//       <div className="bg-[#235347] h-[3px] w-full mb-4"></div>

//       <div className="flex mb-4">
//         <input
//           type="text"
//           placeholder="Search by name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="p-2 border rounded-l-md w-full"
//           aria-label="Search by name"
//         />
//         <button
//           className="p-3 bg-[#235347] text-white rounded-r-md flex items-center"
//           aria-label="Search"
//         >
//           <FaSearch />
//         </button>
//       </div>

//       <div>
//         {filteredUsers.length > 0 ? (
//           filteredUsers.map((user, index) => (
//             <div
//               key={index}
//               className="flex items-center border-b p-4 mb-4 border rounded-lg bg-white hover:bg-gray-100"
//             >
//               <img
//                 src={user.image}
//                 alt={user.username}
//                 className="w-16 h-16 rounded-full ml-6 mr-10"
//               />
//               <div className="flex justify-between flex-grow items-center">
//                 <div>
//                   <h3 className="text-xl font-semibold">{user.username}</h3>
//                   <p>${user.firstName + user.lastName}</p>
//                   <p className="text-gray-500">{user.email}</p>
//                 </div>
//                 <button className="bg-[#235347] text-white p-3 rounded-md flex items-center h-10">
//                   <span>View More</span>
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center">No users found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchProfile;





// import React, { useEffect, useState } from "react";
// import { FaSearch } from "react-icons/fa";

// const SearchProfile = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading,setLoading] = useState(false)
//   const [UserList, setUserList] = useState([{}]);
//   const [error,setError] = useState("")


//   useEffect(()=>{
//     const id = localStorage.getItem("UserID")
//     console.log(id)
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/v1/users/all-user/"+id);
//         console.log(response);
//         if (!response.ok) {
//           throw new Error("Failed to fetch posts");
//         }
//         const data = await response.json();
//         console.log(data)
//         setUserList(data.data); // Assuming the response is an array of posts
//         console.log(UserList)
//         console.log(data.data)
//         // console.log(typeof data.data)
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };
  
//     fetchPosts();
//   },[])

//   console.log(UserList)

//   const filteredUsers = UserList.filter((user) =>
//     user.Name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-3xl font-semibold">Find Other Profiles</h2>
//       </div>
//       <div className="bg-[#235347] h-[3px] w-full mb-4"></div>

//       <div className="flex mb-4">
//         <input
//           type="text"
//           placeholder="Search by name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="p-2 border rounded-l-md w-full"
//           aria-label="Search by name"
//         />
//         <button
//           className="p-3 bg-[#235347] text-white rounded-r-md flex items-center"
//           aria-label="Search"
//         >
//           <FaSearch />
//         </button>
//       </div>

//       <div>
//         {filteredUsers.length > 0 ? (
//           filteredUsers.map((user, index) => (
//             <div
//               key={index}
//               className="flex items-center border-b p-4 mb-4 border rounded-lg bg-white hover:bg-gray-100"
//             >
//               <img
//                 src={user.image}
//                 alt={user.username}
//                 className="w-16 h-16 rounded-full ml-6 mr-10"
//               />
//               <div className="flex justify-between flex-grow items-center">
//                 <div>
//                   <h3 className="text-xl font-semibold">{user.username}</h3>
//                   <p>${user.firstName + user.lastName}</p>
//                   <p className="text-gray-500">{user.email}</p>
//                 </div>
//                 <button className="bg-[#235347] text-white p-3 rounded-md flex items-center h-10">
//                   <span>View More</span>
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center">No users found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchProfile;
// import React, { useEffect, useState } from "react";
// import { FaSearch } from "react-icons/fa";

// const SearchProfile = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading,setLoading] = useState(false)
//   const [UserList, setUserList] = useState([{}]);
//   const [error,setError] = useState("")


//   useEffect(()=>{
//     const id = localStorage.getItem("UserID")
//     console.log(id)
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/v1/users/all-user/"+id);
//         console.log(response);
//         if (!response.ok) {
//           throw new Error("Failed to fetch posts");
//         }
//         const data = await response.json();
//         console.log(data)
//         setUserList(data.data); // Assuming the response is an array of posts
//         console.log(UserList)
//         console.log(data.data)
//         // console.log(typeof data.data)
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };
  
//     fetchPosts();
//   },[])

//   console.log(UserList)

//   const filteredUsers = UserList.filter((user) =>
//     user.Name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-3xl font-semibold">Find Other Profiles</h2>
//       </div>
//       <div className="bg-[#235347] h-[3px] w-full mb-4"></div>

//       <div className="flex mb-4">
//         <input
//           type="text"
//           placeholder="Search by name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="p-2 border rounded-l-md w-full"
//           aria-label="Search by name"
//         />
//         <button
//           className="p-3 bg-[#235347] text-white rounded-r-md flex items-center"
//           aria-label="Search"
//         >
//           <FaSearch />
//         </button>
//       </div>

//       <div>
//         {filteredUsers.length > 0 ? (
//           filteredUsers.map((user, index) => (
//             <div
//               key={index}
//               className="flex items-center border-b p-4 mb-4 border rounded-lg bg-white hover:bg-gray-100"
//             >
//               <img
//                 src={user.image}
//                 alt={user.username}
//                 className="w-16 h-16 rounded-full ml-6 mr-10"
//               />
//               <div className="flex justify-between flex-grow items-center">
//                 <div>
//                   <h3 className="text-xl font-semibold">{user.username}</h3>
//                   <p>${user.firstName + user.lastName}</p>
//                   <p className="text-gray-500">{user.email}</p>
//                 </div>
//                 <button className="bg-[#235347] text-white p-3 rounded-md flex items-center h-10">
//                   <span>View More</span>
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center">No users found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchProfile;

import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchProfile = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(""); // Clear previous errors
      try {
        const id = localStorage.getItem("UserID");
        const response = await fetch(`http://localhost:3000/api/v1/users/all-user/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        console.log(response)
        const data = await response.json();
        console.log(data)
        setUserList(data.data); // Handle empty or missing data
        console.log("asdfghjkl",userList)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  console.log("userlist",userList)

  const filteredUsers = userList.filter((user) =>
    user.username?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold">Find Other Profiles</h2>
      </div>
      <div className="bg-[#235347] h-[3px] w-full mb-4"></div>

      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded-l-md w-full"
          aria-label="Search by name"
        />
        <button
          className="p-3 bg-[#235347] text-white rounded-r-md flex items-center"
          aria-label="Search"
        >
          <FaSearch />
        </button>
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <div
              key={index}
              className="flex items-center border-b p-4 mb-4 border rounded-lg bg-white hover:bg-gray-100"
            >
              <img
                src={user.avatar}
                alt={user.username}
                className="w-16 h-16 rounded-full ml-6 mr-10"
              />
              <div className="flex justify-between flex-grow items-center">
                <div>
                  <h3 className="text-xl font-semibold">{user.username}</h3>
                  <p>{user.firstName} {user.lastName}</p>
                  <p className="text-gray-500">{user.email}</p>
                </div>
                <Link to={`/User/UserDetails/${user._id}`} className="bg-[#235347] text-white p-3 rounded-md flex items-center h-10">
                  <span>View More</span>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No users found</p>
        )}
      </div>
    </div>
  );
};

export default SearchProfile;

