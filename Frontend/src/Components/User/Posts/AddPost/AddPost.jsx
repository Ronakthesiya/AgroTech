// import React, { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { FaAccessibleIcon, FaAddressBook, FaAddressCard, FaBook, FaDochub, FaDocker, FaPlus, FaPodcast, FaRegAddressBook } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const AddPost = () => {
//   const [image, setImage] = useState(null);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [newPost, setNewPost] = useState(null);

//   const onDrop = useCallback((acceptedFiles) => {
//     const file = acceptedFiles[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setImage(imageUrl);
//     }
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: 'image/*',
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Create new post object
//     const post = {
//       image,
//       title,
//       description,
//     };
//     // Update the state with new post
//     setNewPost(post);
//     // Optionally, you can also log or handle the post here
//     console.log(post);
//     // Reset form fields after submission
//     setImage(null);
//     setTitle('');
//     setDescription('');
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-3xl font-semibold">Add New Post</h2>
//         <Link
//           className="flex items-center justify-center p-2 bg-[#235347] text-white rounded-lg shadow-lg hover:bg-[#1b3b33] cursor-pointer"
//           to={"/User/MyPost"}
//         >
//           <FaRegAddressBook/>
//           <div className="ml-2">My Post</div>
//         </Link>
//       </div>
//       <div className="bg-[#235347] h-[3px] w-full mb-4"></div>

//       <div className="p-6 bg-[#DAF1DE] min-h-screen">
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="flex flex-col mb-4">
//             <label className="text-lg font-semibold mb-2">Image</label>
//             <div
//               {...getRootProps()}
//               className={`border-2 border-dashed ${isDragActive ? 'border-[#f0f8ff]' : 'border-[#007bff]'} rounded-lg p-4 text-center cursor-pointer ${image ? 'h-auto' : 'h-32'} w-450 bg-white`}
//             >
//               <input {...getInputProps()} />
//               {image ? (
//                 <img src={image} alt="Preview" className="max-w-44 max-h-60 rounded-lg" />
//               ) : (
//                 <p className={`text-gray-500 ${isDragActive ? 'text-blue-500' : ''}`}>
//                   {isDragActive ? 'Drop the image here...' : 'Drag & drop an image here, or click to select one'}
//                 </p>
//               )}
//             </div>
//           </div>

//           <div className="flex flex-col mb-4">
//             <label htmlFor="title" className="text-lg font-semibold mb-2">Title</label>
//             <input
//               type="text"
//               id="title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder="Enter title"
//               className="border rounded-lg p-2"
//               required
//             />
//           </div>

//           <div className="flex flex-col mb-4">
//             <label htmlFor="description" className="text-lg font-semibold mb-2">Description</label>
//             <textarea
//               id="description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Enter description"
//               className="border rounded-lg p-2"
//               rows="4"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-[#235347] text-white p-2 rounded-lg shadow-lg hover:bg-[#1b3b33] transition duration-300"
//           >
//             Submit
//           </button>
//         </form>

//         {/* Optional: Display new post data */}
//         {newPost && (
//           <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold mb-2">New Post</h3>
//             {newPost.image && <img src={newPost.image} alt="Post Preview" className="max-w-44 max-h-60 rounded-lg mb-2" />}
//             <p className="font-bold">Title:</p>
//             <p>{newPost.title}</p>
//             <p className="font-bold">Description:</p>
//             <p>{newPost.description}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AddPost;

import React, { useState } from 'react';
import { FaRegAddressBook } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const AddPost = () => {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null); // Store the selected file
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [newPost, setNewPost] = useState(null);

  const navigate = useNavigate();
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setImage(imageUrl); // Show image preview
      setFile(selectedFile); // Store the file for backend upload
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !title || !description) {
      alert('All fields are required!');
      return;
    }

    // Prepare form data for file upload
    const formData = new FormData();
    formData.append('image', file); // Append the selected file
    formData.append('title', title);
    formData.append('description', description);

    try {
      const id = localStorage.getItem("UserID")
      // Make a request to the backend API to upload the file using multer and cloudinary
      const response = await fetch('http://localhost:3000/api/v1/posts/add-post/'+id, {
        method: 'POST',
        body: formData,
      });

      console.log(response)
      if (response) {
        const data = await response.json();
        console.log('Post created successfully:', data);

        setNewPost(data.post);
         // Update state with new post data
        navigate("/User/MyPost")
      } else {
        console.log('Failed to create post');
      }
    } catch (error) {
      console.log('Error while creating post:', error);
    }

    // Reset form fields after submission
    setImage(null);
    setFile(null);
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold">Add New Post</h2>
        <Link
          className="flex items-center justify-center p-2 bg-[#235347] text-white rounded-lg shadow-lg hover:bg-[#1b3b33] cursor-pointer"
          to="/User/MyPost"
        >
          <FaRegAddressBook />
          <div className="ml-2">My Post</div>
        </Link>
      </div>
      <div className="bg-[#235347] h-[3px] w-full mb-4"></div>

      <div className="p-6 bg-[#DAF1DE] min-h-screen">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col mb-4">
            <label className="text-lg font-semibold mb-2">Image</label>
            <div className="border-2 border-dashed border-[#007bff] rounded-lg p-4 text-center w-450 bg-white">
              <input
                type="file"
                onChange={handleFileChange}
                className="text-gray-500"
                accept="image/*"
                required
              />
              {image && <img src={image} alt="Preview" className="max-w-44 max-h-60 rounded-lg mt-2" />}
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="title" className="text-lg font-semibold mb-2">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              className="border rounded-lg p-2"
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="description" className="text-lg font-semibold mb-2">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              className="border rounded-lg p-2"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#235347] text-white p-2 rounded-lg shadow-lg hover:bg-[#1b3b33] transition duration-300"
          >
            Submit
          </button>
        </form>

        {/* Optional: Display new post data */}
        {newPost && (
          <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">New Post</h3>
            {newPost.image && <img src={newPost.image} alt="Post Preview" className="max-w-44 max-h-60 rounded-lg mb-2" />}
            <p className="font-bold">Title:</p>
            <p>{newPost.title}</p>
            <p className="font-bold">Description:</p>
            <p>{newPost.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddPost;
