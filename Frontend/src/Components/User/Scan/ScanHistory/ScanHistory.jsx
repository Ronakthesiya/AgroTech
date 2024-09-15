// import { IoMdAdd } from "react-icons/io";
// import { Link } from "react-router-dom";
// import MyPostCard from "../../../Layout/Card/MyScanCard/MyScanCard";
// import MyScanCard from "../../../Layout/Card/MyScanCard/MyScanCard";
// import { useEffect, useState } from "react";
// import axios from "axios";


// const ScanHistory = () => {
//   const id = localStorage.getItem("UserID");
//   const [scan, setScan] = useState([]);
 
//   useEffect(
//     axios.get("http://localhost:3000/api/v1/scan/all-disease/"+id).then(res => setScan[res.data]).catch(err => console.log(err))
//   ,[])

//   const handleDelete = (index) => {
//     const newScan = scan.filter((_, i) => i !== index);
//     setScan(newScan);
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-3xl font-semibold">Scan History</h2>
//         <Link
//           className="flex items-center justify-center p-2 bg-[#235347] text-white rounded-lg shadow-lg hover:bg-[#1b3b33] cursor-pointer"
//           to={"/User/NewScan"}
//         >
//           <IoMdAdd />
//           <div className="ml-2">New Scan</div>
//         </Link>
//       </div>
//       <div className="bg-[#235347] h-[3px] w-full mb-4"></div>


//       <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
//       {scan.map((scan, index) => (
//           <MyScanCard 
//             key={index} 
//             scan={scan} 
//             onDelete={() => handleDelete(index)} 
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ScanHistory;



import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import MyScanCard from "../../../Layout/Card/MyScanCard/MyScanCard";
import { useEffect, useState } from "react";
import axios from "axios";

const ScanHistory = () => {
  const id = localStorage.getItem("UserID");
  const [scan, setScan] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/v1/scan/all-disease/${id}`);
        setScan(res.data.data);
        console.log(res.data) // Correct way to set state
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async (index) => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/v1/scan/delete/${index}`);
      
      if (res.status === 200) { 
        window.location.reload();
        console.log("Deleted successfully:", res.data);
      } else {
        console.error("Failed to delete:", res.data);
      }
    } catch (err) {
      console.error("Error during deletion:", err);
    }
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold">Scan History</h2>
        <Link
          className="flex items-center justify-center p-2 bg-[#235347] text-white rounded-lg shadow-lg hover:bg-[#1b3b33] cursor-pointer"
          to={"/User/NewScan"}
        >
          <IoMdAdd />
          <div className="ml-2">New Scan</div>
        </Link>
      </div>
      <div className="bg-[#235347] h-[3px] w-full mb-4"></div>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {scan.map((scanItem, index) => (
          <MyScanCard 
            key={index} 
            scan={scanItem} 
            onDelete={() => handleDelete(scanItem._id)} 
          />
        ))}
      </div>
    </div>
  );
};

export default ScanHistory;
