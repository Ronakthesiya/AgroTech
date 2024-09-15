// import React from "react";

// const MyScanCard = ({ scan, onDelete }) => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
//       <img
//         className="w-full h-48 object-cover"
//         src={scan.Image}
//         alt={scan.ScanName}
//       />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{scan.ScanName}</div>
//         <p className="text-gray-700 text-base mb-4 line-clamp-2">
//           {scan.Description}
//         </p>
//         <p className="text-gray-700 text-base line-clamp-2">
//           <strong>Solution:</strong> {scan.Solution}
//         </p>
//         <div className="mt-4 flex justify-between">
//           <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">
//             View
//           </button>
//           <button
//             className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
//             onClick={onDelete}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyScanCard;



import React from "react";
import { Link } from "react-router-dom";

const MyScanCard = ({ scan, onDelete }) => {
  return (
    <div className="w-[282px] bg-white border border-gray-300 rounded-lg overflow-hidden shadow-2xl m-5 transition-transform duration-200 ease-in-out hover:scale-105">
      
      <img
        className="w-full h-40 object-cover"
        src={scan.image}
        alt={scan.question}
      />
      
      <div className="p-4">
        <div className="font-bold text-xl mb-2">{scan.question}</div>
        {/* <p className="text-gray-700 text-base mb-4 line-clamp-2">
          {scan.Description}
        </p> */}
        <p className="text-gray-700 text-base line-clamp-3">
          <strong>Solution:</strong> {scan.response}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <button className="bg-blue-500 text-white px-3 py-1 rounded flex items-center hover:bg-blue-600 transition-colors duration-300">
            View
          </button>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors duration-300"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyScanCard;
