// import React, { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import { FaHistory } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const NewScan = () => {
//   const [image, setImage] = useState(null); // State to store the uploaded image

//   const onDrop = useCallback((acceptedFiles) => {
//     const file = acceptedFiles[0];
//     const imageUrl = URL.createObjectURL(file);
//     setImage(imageUrl);
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-3xl font-semibold">Scan</h2>

//         <Link
//           className="flex items-center justify-center p-2 bg-[#235347] text-white rounded-lg shadow-lg hover:bg-[#1b3b33] cursor-pointer"
//           to={"/User/ScanHistory"}
//         >
//           <FaHistory />
//           <div className="ml-2">History</div>
//         </Link>
//       </div>

//       <div className="bg-[#235347] h-[3px] w-full mb-4"></div>

//       {!image && (
//         <div
//           {...getRootProps()}
//           className={`border-2 border-dashed ${
//             isDragActive ? "border-[#f0f8ff]" : "border-[#007bff]"
//           } rounded-lg p-4 text-center mx-auto max-w-[450px] h-[150px] text-lg font-bold text-gray-600 cursor-pointer mb-4 bg-white text-middle`}
//         >
//           <input {...getInputProps()} />
//           {isDragActive ? (
//             <p>Drop the files here...</p>
//           ) : (
//             <p>Drag & drop an image here, or click to select one</p>
//           )}
//         </div>
//       )}

//       {image && (
//         <div className="text-center mb-4">
//           <img
//             src={image}
//             alt="Uploaded"
//             className="max-w-[400px] h-auto rounded-lg"
//           />
//         </div>
//       )}


//       <div className="flex justify-center mb-4">
//         <div className="w-[90%]">          
//           <h4 className="text-xl font-semibold mb-2">Description :</h4>
//           <textarea
//             placeholder="Write description of image, if you want ..."
//             className="w-[100%] h-[100px] p-2 text-lg font-normal border rounded-lg"
//           ></textarea>
          
//         </div>
//       </div>

//       <div className="flex justify-center">
//         <div className="text-center p-2 bg-[#235347] text-white rounded-lg shadow-lg cursor-pointer hover:bg-[#1b3b33]">
//           Search
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewScan;











// // import React, { useCallback, useState } from "react";
// // import { useDropzone } from "react-dropzone";
// // import { FaHistory } from "react-icons/fa";
// // import { Link } from "react-router-dom";
// // import axios from "axios";

// // const NewScan = () => {
// //   const [image, setImage] = useState(null);
// //   const [description, setDescription] = useState("");
// //   const [result, setResult] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const onDrop = useCallback((acceptedFiles) => {
// //     const file = acceptedFiles[0];
// //     setImage(file);
// //   }, []);

// //   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

// //   const handleDescriptionChange = (e) => {
// //     setDescription(e.target.value);
// //   };

// //   const handleSearchClick = async () => {
// //     setLoading(true);
// //     if (!image || !description) {
// //       alert("Please upload an image and enter a description.");
// //       setLoading(false);
// //       return;
// //     }

// //     const reader = new FileReader();
// //     reader.readAsDataURL(image);
// //     reader.onloadend = async () => {
// //       const base64Image = reader.result.split(",")[1]; // Get base64 image data

// //       try {
// //         const response = await axios.post(
// //           `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=YOUR_API_KEY`,
// //           {
// //             requests: [
// //               {
// //                 image: {
// //                   content: base64Image,
// //                 },
// //                 features: [
// //                   {
// //                     type: "LABEL_DETECTION",
// //                     maxResults: 10,
// //                   },
// //                 ],
// //               },
// //             ],
// //           }
// //         );
// //         setResult(response.data.responses[0].labelAnnotations); // Display the AI result
// //       } catch (error) {
// //         console.error("Error uploading image and description:", error);
// //       }
// //     };

// //     setLoading(false);
// //   };

// //   return (
// //     <div>
// //       <div className="flex justify-between items-center mb-4">
// //         <h2 className="text-3xl font-semibold">Scan</h2>

// //         <Link
// //           className="flex items-center justify-center p-2 bg-[#235347] text-white rounded-lg shadow-lg hover:bg-[#1b3b33] cursor-pointer"
// //           to={"/User/ScanHistory"}
// //         >
// //           <FaHistory />
// //           <div className="ml-2">History</div>
// //         </Link>
// //       </div>

// //       <div className="bg-[#235347] h-[3px] w-full mb-4"></div>

// //       {!image && (
// //         <div
// //           {...getRootProps()}
// //           className={`border-2 border-dashed ${
// //             isDragActive ? "border-[#f0f8ff]" : "border-[#007bff]"
// //           } rounded-lg p-4 text-center mx-auto max-w-[450px] h-[150px] text-lg font-bold text-gray-600 cursor-pointer mb-4 bg-white text-middle`}
// //         >
// //           <input {...getInputProps()} />
// //           {isDragActive ? (
// //             <p>Drop the files here...</p>
// //           ) : (
// //             <p>Drag & drop an image here, or click to select one</p>
// //           )}
// //         </div>
// //       )}

// //       {image && (
// //         <div className="text-center mb-4">
// //           <img
// //             src={URL.createObjectURL(image)}
// //             alt="Uploaded"
// //             className="max-w-[400px] h-auto rounded-lg"
// //           />
// //         </div>
// //       )}

// //       <div className="flex justify-center mb-4">
// //         <div className="w-[90%]">
// //           <h4 className="text-xl font-semibold mb-2">Description :</h4>
// //           <textarea
// //             placeholder="Write description of image, if you want ..."
// //             className="w-[100%] h-[100px] p-2 text-lg font-normal border rounded-lg"
// //             value={description}
// //             onChange={handleDescriptionChange}
// //           ></textarea>
// //         </div>
// //       </div>

// //       <div className="flex justify-center">
// //         <div
// //           onClick={handleSearchClick}
// //           className="text-center p-2 bg-[#235347] text-white rounded-lg shadow-lg cursor-pointer hover:bg-[#1b3b33]"
// //         >
// //           {loading ? "Loading..." : "Search"}
// //         </div>
// //       </div>

// //       {result && (
// //         <div className="mt-4">
// //           <h3 className="text-xl font-semibold">AI Result:</h3>
// //           <pre className="bg-gray-100 p-4 rounded-lg">{JSON.stringify(result, null, 2)}</pre>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default NewScan;






















// import React, { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import { FaHistory } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const NewScan = () => {
//   const [image, setImage] = useState(null); // State to store the uploaded image
//   const [description, setDescription] = useState(""); // State to store the description
//   const [apiResponse, setApiResponse] = useState(null); // State to store API response
//   const [loading, setLoading] = useState(false); // State to manage loading state

//   const onDrop = useCallback((acceptedFiles) => {
//     const file = acceptedFiles[0];
//     const imageUrl = URL.createObjectURL(file);
//     setImage({ file, imageUrl }); // Store the file and imageUrl
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleSearchClick = async () => {
//     if (!description) {
//       alert("Please provide a description.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch(
//         "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=",
//         {
//           method: "POST",
//           body: JSON.stringify({
//             contents: [
//               {
//                 parts: [
//                   {
//                     text: description+"image :"+image
//                   }
//                 ]
//               }
//             ]
//           }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const data = await response.json();
//       setApiResponse(data);
//       console.log("Response from API:", data);
//     } catch (error) {
//       console.error("Error uploading data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-3xl font-semibold">Scan</h2>

//         <Link
//           className="flex items-center justify-center p-2 bg-[#235347] text-white rounded-lg shadow-lg hover:bg-[#1b3b33] cursor-pointer"
//           to={"/User/ScanHistory"}
//         >
//           <FaHistory />
//           <div className="ml-2">History</div>
//         </Link>
//       </div>

//       <div className="bg-[#235347] h-[3px] w-full mb-4"></div>

//       {!image && (
//         <div
//           {...getRootProps()}
//           className={`border-2 border-dashed ${
//             isDragActive ? "border-[#f0f8ff]" : "border-[#007bff]"
//           } rounded-lg p-4 text-center mx-auto max-w-[450px] h-[150px] text-lg font-bold text-gray-600 cursor-pointer mb-4 bg-white text-middle`}
//         >
//           <input {...getInputProps()} />
//           {isDragActive ? (
//             <p>Drop the files here...</p>
//           ) : (
//             <p>Drag & drop an image here, or click to select one</p>
//           )}
//         </div>
//       )}

//       {image && (
//         <div className="text-center mb-4">
//           <img
//             src={image.imageUrl}
//             alt="Uploaded"
//             className="max-w-[400px] h-auto rounded-lg"
//           />
//         </div>
//       )}

//       <div className="flex justify-center mb-4">
//         <div className="w-[90%]">          
//           <h4 className="text-xl font-semibold mb-2">Description :</h4>
//           <textarea
//             placeholder="Write description of image, if you want ..."
//             className="w-[100%] h-[100px] p-2 text-lg font-normal border rounded-lg"
//             value={description}
//             onChange={handleDescriptionChange}
//           ></textarea>
//         </div>
//       </div>

//       <div className="flex justify-center">
//         <div
//           onClick={handleSearchClick}
//           className={`text-center p-2 rounded-lg shadow-lg cursor-pointer ${loading ? 'bg-gray-400' : 'bg-[#235347] text-white hover:bg-[#1b3b33]'}`}
//         >
//           {loading ? 'Searching...' : 'Search'}
//         </div>
//       </div>

//       {apiResponse && (
//         <div className="mt-4 p-4 border border-gray-300 rounded-lg">
//           <h3 className="text-2xl font-semibold">API Response:</h3>
//           <pre className="text-gray-700">{JSON.stringify(apiResponse, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NewScan;










// import React, { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import { FaHistory } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import axios from 'axios';

// const NewScan = () => {
//   const [image, setImage] = useState(null); 
//   const [description, setDescription] = useState(""); 
//   const [apiResponse, setApiResponse] = useState(null); 
//   const [loading, setLoading] = useState(false); 

//   const onDrop = useCallback((acceptedFiles) => {
//     const file = acceptedFiles[0];
//     convertToBase64(file).then((base64) => {
//       setImage({ file, base64 });
//     });
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleSearchClick = async () => {
//     if (!description || !image) {
//       alert("Please provide a description and upload an image.");
//       return;
//     }

//     setLoading(true);

//     var res = "";
//     try{
//        res = await axios.post(
//         "http://127.0.0.1:5000/predict",
//         {
//           "file_path": "abc.JPG" // i want Image path from local
//         },
//         {
//           headers: {
//             "Content-Type": "application/json"
//           }
//         }
//       )
//     }catch (error) {
//       console.error("Error generating content 1:", error);
//       return;
//     } 

    
//     try {
//       const response = await axios.post(
//         "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=",
//         {
//           contents: [
//             {
//               parts: [
//                 {
//                   text: `Description: ${res}`
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           headers: {
//             "Content-Type": "application/json"
//           }
//         }
//       );

//       setApiResponse(response.data);
//     } catch (error) {
//       console.error("Error generating content 2:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Function to convert file to base64
//   const convertToBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = (error) => reject(error);
//     });
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-3xl font-semibold">Scan</h2>

//         <Link
//           className="flex items-center justify-center p-2 bg-[#235347] text-white rounded-lg shadow-lg hover:bg-[#1b3b33] cursor-pointer"
//           to={"/User/ScanHistory"}
//         >
//           <FaHistory />
//           <div className="ml-2">History</div>
//         </Link>
//       </div>

//       <div className="bg-[#235347] h-[3px] w-full mb-4"></div>

//       {!image && (
//         <div
//           {...getRootProps()}
//           className={`border-2 border-dashed ${
//             isDragActive ? "border-[#f0f8ff]" : "border-[#007bff]"
//           } rounded-lg p-4 text-center mx-auto max-w-[450px] h-[150px] text-lg font-bold text-gray-600 cursor-pointer mb-4 bg-white text-middle`}
//         >
//           <input {...getInputProps()} />
//           {isDragActive ? (
//             <p>Drop the files here...</p>
//           ) : (
//             <p>Drag & drop an image here, or click to select one</p>
//           )}
//         </div>
//       )}

//       {image && (
//         <div className="text-center mb-4">
//           <img
//             src={image.base64}
//             alt="Uploaded"
//             className="max-w-[400px] h-auto rounded-lg"
//           />
//         </div>
//       )}

//       <div className="flex justify-center mb-4">
//         <div className="w-[90%]">          
//           <h4 className="text-xl font-semibold mb-2">Description :</h4>
//           <textarea
//             placeholder="Write description of image, if you want ..."
//             className="w-[100%] h-[100px] p-2 text-lg font-normal border rounded-lg"
//             value={description}
//             onChange={handleDescriptionChange}
//           ></textarea>
//         </div>
//       </div>

//       <div className="flex justify-center">
//         <div
//           onClick={handleSearchClick}
//           className={`text-center p-2 rounded-lg shadow-lg cursor-pointer ${loading ? 'bg-gray-400' : 'bg-[#235347] text-white hover:bg-[#1b3b33]'}`}
//         >
//           {loading ? 'Searching...' : 'Search'}
//         </div>
//       </div>

//       {apiResponse && (
//         <div className="mt-4 p-4 border border-gray-300 rounded-lg">
//           <h3 className="text-2xl font-semibold">API Response:</h3>
//           <pre className="text-gray-700">{JSON.stringify(apiResponse, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NewScan;






// import React, { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import { FaHistory } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import axios from 'axios';

// const NewScan = () => {
//   const [image, setImage] = useState(null); 
//   const [description, setDescription] = useState(""); 
//   const [apiResponse, setApiResponse] = useState(null); 
//   const [loading, setLoading] = useState(false); 

//   const onDrop = useCallback((acceptedFiles) => {
//     const file = acceptedFiles[0];
//     convertToBase64(file).then((base64) => {
//       setImage({ file, base64 });
//     });
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleSearchClick = async () => {
//     if (!description || !image) {
//       alert("Please provide a description and upload an image.");
//       return;
//     }
  
//     setLoading(true);
  
//     const formData = new FormData();
//     formData.append('image', image.file);
  
//     try {
//       console.log("111111");
//       const res = await axios.post("http://127.0.0.1:5000/predict", formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
  
//       console.log("111111")

//       const diseaseDescription = `Disease: ${res.data.disease}. Description: ${description}. find a proper solution for this.`;
      
//       const response = await axios.post(
//         "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=",
//         {
//           contents: [
//             {
//               parts: [
//                 {
//                   text: diseaseDescription,
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
  
//       console.log("111111")

//       setApiResponse(response.data);


//       const finalres = axios.post("http://localhost:3000/api/v1/scan/add",
//         image="",
//         response=apiResponse.candidates[0].content.parts[0].text
//         .replace(/\*\*/g, "")
//         .replace(/#/g,"")
//         .replace(/\n/g, "\n")
//         .replace(/\*/g,""),
//         question=description
//       )
//     } catch (error) {
//       console.error("Error generating content:", error);
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   // Function to convert file to base64
//   const convertToBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = (error) => reject(error);
//     });
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-3xl font-semibold">Scan</h2>

//         <Link
//           className="flex items-center justify-center p-2 bg-[#235347] text-white rounded-lg shadow-lg hover:bg-[#1b3b33] cursor-pointer"
//           to={"/User/ScanHistory"}
//         >
//           <FaHistory />
//           <div className="ml-2">History</div>
//         </Link>
//       </div>

//       <div className="bg-[#235347] h-[3px] w-full mb-4"></div>

//       {!image && (
//         <div
//           {...getRootProps()}
//           className={`border-2 border-dashed ${
//             isDragActive ? "border-[#f0f8ff]" : "border-[#007bff]"
//           } rounded-lg p-4 text-center mx-auto max-w-[450px] h-[150px] text-lg font-bold text-gray-600 cursor-pointer mb-4 bg-white text-middle`}
//         >
//           <input {...getInputProps()} />
//           {isDragActive ? (
//             <p>Drop the files here...</p>
//           ) : (
//             <p>Drag & drop an image here, or click to select one</p>
//           )}
//         </div>
//       )}

//       {image && (
//         <div className="text-center mb-4">
//           <img
//             src={image.base64}
//             alt="Uploaded"
//             className="max-w-[400px] h-auto rounded-lg"
//           />
//         </div>
//       )}

//       <div className="flex justify-center mb-4">
//         <div className="w-[90%]">          
//           <h4 className="text-xl font-semibold mb-2">Description :</h4>
//           <textarea
//             placeholder="Write description of image, if you want ..."
//             className="w-[100%] h-[100px] p-2 text-lg font-normal border rounded-lg"
//             value={description}
//             onChange={handleDescriptionChange}
//           ></textarea>
//         </div>
//       </div>

//       <div className="flex justify-center">
//         <div
//           onClick={handleSearchClick}
//           className={`text-center p-2 rounded-lg shadow-lg cursor-pointer ${loading ? 'bg-gray-400' : 'bg-[#235347] text-white hover:bg-[#1b3b33]'}`}
//         >
//           {loading ? 'Searching...' : 'Search'}
//         </div>
//       </div>

      
//       {apiResponse && (
//   <div className="mt-4 p-4 border border-gray-300 rounded-lg">
//     <h3 className="text-2xl font-semibold">API Response:</h3>
//     <div className="text-gray-700 w-[100%] whitespace-pre-wrap">
//       {apiResponse.candidates[0].content.parts[0].text
//         .replace(/\*\*/g, "")
//         .replace(/#/g,"")
//         .replace(/\n/g, "\n")
//         .replace(/\*/g,"")
//         }
        
//     </div>
//   </div>
// )}



//     </div>
//   );
// };

// export default NewScan;



// import React, { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import { FaHistory } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import axios from 'axios';

// const NewScan = () => {
//   const [image, setImage] = useState(null); 
//   const [description, setDescription] = useState(""); 
//   const [apiResponse, setApiResponse] = useState(null); 
//   const [loading, setLoading] = useState(false); 
//   const [error, setError] = useState(null);

//   const onDrop = useCallback((acceptedFiles) => {
//     const file = acceptedFiles[0];
//     convertToBase64(file).then((base64) => {
//       setImage({ file, base64 });
//     });
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleSearchClick = async () => {
//     if (!description || !image) {
//       alert("Please provide a description and upload an image.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     const formData = new FormData();
//     formData.append('image', image.file);

//     try {
//       const res = await axios.post("http://127.0.0.1:5000/predict", formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       const diseaseDescription = `Disease: ${res.data.disease}. Description: ${description}. Find a proper solution for this.`;
      
//       const response = await axios.post(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=`,
//         {
//           contents: [
//             {
//               parts: [
//                 {
//                   text: diseaseDescription,
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       setApiResponse(response.data.candidates[0].content.parts[0].text
//         .replace(/\*\*/g, "")
//         .replace(/#/g, "")
//         .replace(/\n/g, "\n")
//         .replace(/\*/g, ""));
//       console.log(response.data)

//       const id = localStorage.getItem("UserID")
//       const formData = new FormData();
//       formData.append('image', image.base64); // Append the selected file
//       formData.append('response', apiResponse);
//       formData.append('question', description);

//       const finalres = await fetch('http://localhost:3000/api/v1/posts/add-post/'+id, {
//         method: 'POST',
//         body: formData,
//       });

//       console.log("done")


//     } catch (error) {
//       setError("An error occurred while processing your request.");
//       console.error("Error generating content:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Function to convert file to base64
//   const convertToBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = (error) => reject(error);
//     });
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-3xl font-semibold">Scan</h2>

//         <Link
//           className="flex items-center justify-center p-2 bg-[#235347] text-white rounded-lg shadow-lg hover:bg-[#1b3b33] cursor-pointer"
//           to={"/User/ScanHistory"}
//         >
//           <FaHistory />
//           <div className="ml-2">History</div>
//         </Link>
//       </div>

//       <div className="bg-[#235347] h-[3px] w-full mb-4"></div>

//       {!image && (
//         <div
//           {...getRootProps()}
//           className={`border-2 border-dashed ${
//             isDragActive ? "border-[#f0f8ff]" : "border-[#007bff]"
//           } rounded-lg p-4 text-center mx-auto max-w-[450px] h-[150px] text-lg font-bold text-gray-600 cursor-pointer mb-4 bg-white text-middle`}
//         >
//           <input {...getInputProps()} />
//           {isDragActive ? (
//             <p>Drop the files here...</p>
//           ) : (
//             <p>Drag & drop an image here, or click to select one</p>
//           )}
//         </div>
//       )}

//       {image && (
//         <div className="text-center mb-4">
//           <img
//             src={image.base64}
//             alt="Uploaded"
//             className="max-w-[400px] h-auto rounded-lg"
//           />
//         </div>
//       )}

//       <div className="flex justify-center mb-4">
//         <div className="w-[90%]">          
//           <h4 className="text-xl font-semibold mb-2">Description :</h4>
//           <textarea
//             placeholder="Write description of image, if you want ..."
//             className="w-[100%] h-[100px] p-2 text-lg font-normal border rounded-lg"
//             value={description}
//             onChange={handleDescriptionChange}
//           ></textarea>
//         </div>
//       </div>

//       <div className="flex justify-center">
//         <div
//           onClick={handleSearchClick}
//           className={`text-center p-2 rounded-lg shadow-lg cursor-pointer ${loading ? 'bg-gray-400' : 'bg-[#235347] text-white hover:bg-[#1b3b33]'}`}
//         >
//           {loading ? 'Searching...' : 'Search'}
//         </div>
//       </div>

//       {error && (
//         <div className="mt-4 p-4 border border-red-300 text-red-700 rounded-lg">
//           {error}
//         </div>
//       )}

//       {apiResponse && (
//         <div className="mt-4 p-4 border border-gray-300 rounded-lg">
//           <h3 className="text-2xl font-semibold">API Response:</h3>
//           <div className="text-gray-700 w-[100%] whitespace-pre-wrap">
//             {apiResponse.candidates[0].content.parts[0].text
//               .replace(/\*\*/g, "")
//               .replace(/#/g, "")
//               .replace(/\n/g, "\n")
//               .replace(/\*/g, "")
//             }
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NewScan;


// import React, { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import { FaHistory } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import axios from 'axios';

// const NewScan = () => {
//   const [image, setImage] = useState(null); 
//   const [description, setDescription] = useState(""); 
//   const [apiResponse, setApiResponse] = useState(""); 
//   const [loading, setLoading] = useState(false); 
//   const [error, setError] = useState(null);

//   const onDrop = useCallback((acceptedFiles) => {
//     const file = acceptedFiles[0];
//     convertToBase64(file).then((base64) => {
//       setImage({ file, base64 });
//     });
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleSearchClick = async () => {
//     if (!description || !image) {
//       alert("Please provide a description and upload an image.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     const formData = new FormData();
//     formData.append('image', image.file);

//     try {
//       const res = await axios.post("http://127.0.0.1:5000/predict", formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       const diseaseDescription = `Disease: ${res.data.disease}. Description: ${description}. Find a proper solution for this.`;
      
//       const response = await axios.post(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=`,
//         {
//           contents: [
//             {
//               parts: [
//                 {
//                   text: diseaseDescription,
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const generatedContent = response.data.candidates[0]?.content.parts[0]?.text
//         ?.replace(/\*\*/g, "")
//         ?.replace(/#/g, "")
//         ?.replace(/\n/g, "\n")
//         ?.replace(/\*/g, "");

//       setApiResponse(generatedContent);

//       const id = localStorage.getItem("UserID");
//       const uploadData = new FormData();
//       uploadData.append('image', image);
//       uploadData.append('response', generatedContent);
//       uploadData.append('question', description);

//       var resp = await fetch('http://localhost:3000/api/v1/scan/add/'+id, {
//         method: 'POST',
//         body: uploadData,
//       });
//       console.log(resp)

//       console.log("done");

//     } catch (error) {
//       setError("An error occurred while processing your request.");
//       console.error("Error generating content:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Function to convert file to base64
//   const convertToBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = (error) => reject(error);
//     });
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-3xl font-semibold">Scan</h2>

//         <Link
//           className="flex items-center justify-center p-2 bg-[#235347] text-white rounded-lg shadow-lg hover:bg-[#1b3b33] cursor-pointer"
//           to={"/User/ScanHistory"}
//         >
//           <FaHistory />
//           <div className="ml-2">History</div>
//         </Link>
//       </div>

//       <div className="bg-[#235347] h-[3px] w-full mb-4"></div>

//       {!image && (
//         <div
//           {...getRootProps()}
//           className={`border-2 border-dashed ${
//             isDragActive ? "border-[#f0f8ff]" : "border-[#007bff]"
//           } rounded-lg p-4 text-center mx-auto max-w-[450px] h-[150px] text-lg font-bold text-gray-600 cursor-pointer mb-4 bg-white text-middle`}
//         >
//           <input {...getInputProps()} />
//           {isDragActive ? (
//             <p>Drop the files here...</p>
//           ) : (
//             <p>Drag & drop an image here, or click to select one</p>
//           )}
//         </div>
//       )}

//       {image && (
//         <div className="text-center mb-4">
//           <img
//             src={image.base64}
//             alt="Uploaded"
//             className="max-w-[400px] h-auto rounded-lg"
//           />
//         </div>
//       )}

//       <div className="flex justify-center mb-4">
//         <div className="w-[90%]">          
//           <h4 className="text-xl font-semibold mb-2">Description :</h4>
//           <textarea
//             placeholder="Write description of image, if you want ..."
//             className="w-[100%] h-[100px] p-2 text-lg font-normal border rounded-lg"
//             value={description}
//             onChange={handleDescriptionChange}
//           ></textarea>
//         </div>
//       </div>

//       <div className="flex justify-center">
//         <div
//           onClick={handleSearchClick}
//           className={`text-center p-2 rounded-lg shadow-lg cursor-pointer ${loading ? 'bg-gray-400' : 'bg-[#235347] text-white hover:bg-[#1b3b33]'}`}
//         >
//           {loading ? 'Searching...' : 'Search'}
//         </div>
//       </div>

//       {error && (
//         <div className="mt-4 p-4 border border-red-300 text-red-700 rounded-lg">
//           {error}
//         </div>
//       )}

//       {apiResponse && (
//         <div className="mt-4 p-4 border border-gray-300 rounded-lg">
//           <h3 className="text-2xl font-semibold">API Response:</h3>
//           <div className="text-gray-700 w-[100%] whitespace-pre-wrap">
//             {apiResponse}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NewScan;





import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from 'axios';

const NewScan = () => {
  const [image, setImage] = useState(null); 
  const [description, setDescription] = useState(""); 
  const [apiResponse, setApiResponse] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    convertToBase64(file).then((base64) => {
      setImage({ file, base64 });
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSearchClick = async () => {
    if (!description || !image) {
      alert("Please provide a description and upload an image.");
      return;
    }

    setLoading(true);
    setError(null);

    // Convert base64 to file
    const base64ToFile = (base64Data, fileName) => {
      const arr = base64Data.split(',');
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], fileName, { type: mime });
    };

    const fileFromBase64 = base64ToFile(image.base64, image.file.name);

    const formData = new FormData();
    formData.append('image', fileFromBase64);

    try {
      const res = await axios.post("http://127.0.0.1:5000/predict", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const diseaseDescription = `Disease: ${res.data.disease}. Description: ${description}. Find a proper solution for this.`;
      
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=`,
        {
          contents: [
            {
              parts: [
                {
                  text: diseaseDescription,
                },
              ],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const generatedContent = response.data.candidates[0]?.content.parts[0]?.text
        ?.replace(/\*\*/g, "")
        ?.replace(/#/g, "")
        ?.replace(/\n/g, "\n")
        ?.replace(/\*/g, "");

      setApiResponse(generatedContent);

      const id = localStorage.getItem("UserID");
      const uploadData = new FormData();
      uploadData.append('image', fileFromBase64); // Append the file object instead of base64 string
      uploadData.append('response', generatedContent);
      uploadData.append('question', description);

      const res1 = await fetch('http://localhost:3000/api/v1/scan/add/'+id, {
        method: 'POST',
        body: uploadData,
      });

      console.log(res1)

      console.log("done");

    } catch (error) {
      setError("An error occurred while processing your request.");
      console.error("Error generating content:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to convert file to base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-4xl font-bold mx-10">Scan</h2>

        <Link
          className="flex items-center justify-center p-2 bg-[#235347] text-white rounded-lg shadow-lg hover:bg-[#1b3b33] cursor-pointer"
          to={"/User/ScanHistory"}
        >
          <FaHistory />
          <div className="ml-2">History</div>
        </Link>
      </div>

      <div className="bg-[#235347] h-[3px] w-full mb-4"></div>

      {!image && (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed ${
            isDragActive ? "border-[#f0f8ff]" : "border-[#007bff]"
          } rounded-lg p-4 text-center mx-auto max-w-[450px] h-[150px] text-lg font-bold text-gray-600 cursor-pointer mb-4 bg-white text-middle`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here...</p>
          ) : (
            <p>Drag & drop an image here, or click to select one</p>
          )}
        </div>
      )}

      {image && (
        <div className="text-center mb-4">
          <img
            src={image.base64}
            alt="Uploaded"
            className="max-w-[400px] h-auto rounded-lg"
          />
        </div>
      )}

      <div className="flex justify-center mb-4">
        <div className="w-[90%]">          
          <h4 className="text-xl font-semibold mb-2">Description :</h4>
          <textarea
            placeholder="Write description of image, if you want ..."
            className="w-[100%] h-[100px] p-2 text-lg font-normal border rounded-lg"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
      </div>

      <div className="flex justify-center">
        <div
          onClick={handleSearchClick}
          className={`text-center p-2 rounded-lg shadow-lg cursor-pointer ${loading ? 'bg-gray-400' : 'bg-[#235347] text-white hover:bg-[#1b3b33]'}`}
        >
          {loading ? 'Searching...' : 'Search'}
        </div>
      </div>

      {error && (
        <div className="mt-4 p-4 border border-red-300 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {apiResponse && (
        <div className="mt-4 p-4 border border-gray-300 rounded-lg">
          <h3 className="text-3xl font-bold">Solution :</h3>
          <div className="text-gray-900 w-[100%] whitespace-pre-wrap">
            {apiResponse}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewScan;
