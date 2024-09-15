// import React, { useState } from 'react';
// import { FaThumbsUp, FaRegThumbsUp } from 'react-icons/fa';
// import './PostCard.css';

// const Card = ({ image, title, description, likedCount }) => {
//   const [liked, setLiked] = useState(false);

//   const handleLike = () => {
//     //add like in api likedcount
//     setLiked(!liked);
//   };

//   return (
//     <div className="card">
//       <img src={image} alt={title} className="card-image" />
//       <div className="card-content">
//         <h2 className="card-title">{title}</h2>
//         <p className="card-description line-clamp-3">{description}</p>
//         <div className="card-buttons">
//           <button
//             className="like-button"
//             onClick={handleLike}
//           >
//             {liked ? <FaThumbsUp /> : <FaRegThumbsUp />}
//             {liked ? likedCount+1 : likedCount}
//           </button>
//           <button className="view-button">
//             View Details
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import { TfiCommentAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Card = ( {Post} ) => {

  useEffect(()=>{
    var id = localStorage.getItem("UserID");
     axios.post('http://localhost:3000/api/v1/likes/toggle-like/'+id+'/'+Post._id).then(res => setLiked(res.data.data)).catch(err => console.log(err));
     axios.post('http://localhost:3000/api/v1/likes/toggle-like/'+id+'/'+Post._id).then(res => res.data.data).catch(err => console.log(err));
    },[]);

  const [liked, setLiked] = useState(true);

 

  const handleLike =async () => {
  
    

    const id = localStorage.getItem("UserID");

    // add like in API liked count
    await axios.post('http://localhost:3000/api/v1/likes/toggle-like/'+id+'/'+Post._id).then(res => setLiked(res.data.data)).catch(err => console.log(err));
    console.log("efasdf");
    
  };

  return (
    <>
        <div class="rounded overflow-hidden shadow-lg flex flex-col">
          <a href="#"></a>
          <div class="relative">
            <a href="#">
              <img
                class="w-full min-h-50"
                src={Post.image}
                alt="Sunset in the mountains"
              />
              <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>
            
              <button class="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3" onClick={handleLike}>
                
                {liked ? <FaRegThumbsUp/> : <FaThumbsUp/> }
              </button>
            
          </div>
          <Link to={`/User/Post/${Post._id}`}>
          <div class="px-6 py-4 mb-auto bg-white">
            <a
              href="#"
              class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
            >
              {Post.title}
            </a>
            <p class="text-gray-500 text-sm">
              {Post.description}
            </p>
          </div>
          <div class="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
            <span
              href="#"
              class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
            >
              <FaRegThumbsUp />
              <span class="ml-1">{Post.likesCount} Likes</span>
            </span>

            <span
              href="#"
              class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
            >
              <TfiCommentAlt />
              <span class="ml-1">{Post.commentCount} Comments</span>
            </span>
          </div>
          </Link>
        </div>
    </>
  );
};

export default Card;
