import React, { useEffect, useState } from "react";
import { IoTimerOutline } from "react-icons/io5";
import { TfiCommentAlt } from "react-icons/tfi";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "../../../Layout/Card/PostCard/PostCard";

const UserDetails = () => {
  const [user, setUser] = useState({});
  const [myPost, setMyPost] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fun = async () => {
      axios
        .get("http://localhost:3000/api/v1/users/" + id)
        .then((res) => setUser(res.data.data));

      axios
        .get("http://localhost:3000/api/v1/posts/get-all-post/" + id) // Example API
        .then((response) => {
          console.log(response);
          setMyPost(response.data.data);
          console.log(myPost) // Set the retrieved posts to state
        });

        
    };
    fun();
  }, []);

  return (
    <div className="p-10 mx-2 rounded-3xl">
      <div className="h-[250px] bg-emerald-950 w-100  rounded-t-2xl">
        <div className="flex flex-row  ">
          <div className=" h-48 w-48  m-7">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 " // Replace with profile image URL
              alt="Avatar"
              className="h-48 w-48 rounded-full border-4 border-white "
            />
          </div>
          <div className="flex flex-col mt-20 ">
            <h1 className="text-4xl text-white font-semibold text-start">
              {user.username}
            </h1>
            <p className="text-white text-md ">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-white text-xl text-start">{user.email}</p>
            <p className="text-white text-md ">Post : {myPost.length}</p>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col p-10 gap-3 rounded-b-2xl">
        <h1 className="text-4xl font-semibold self-center pb-8">Posts</h1>
        {/* <p className="text-gray-400 text-xl self-center">user@gmail.com</p> */}

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* <div class="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#"></a>
            <div class="relative"><a href="#">
                    <img class="w-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ngnJrmv1U7SqUhAQGqNg7QCFNxnCXT-4CAR0SzxyvO7ueGGtSRAqsxe7CypKXoQ1rRA&usqp=CAU"
                        alt="Sunset in the mountains"/>
                    <div
                        class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a>
                <a href="#!">
                    <div
                        class="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        Cooking
                    </div>
                </a>
            </div>
            <div class="px-6 py-4 mb-auto bg-white">
                <a href="#"
                    class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2">
                    Title</a>
                <p class="text-gray-500 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
            <div class="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                <span href="#" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
     
                    <IoTimerOutline />
                    <span class="ml-1">6 mins ago</span>
                </span>

                <span href="#" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <TfiCommentAlt />

                    <span class="ml-1">39 Comments</span>
                </span>
            </div>
        </div> */}
          {myPost.map((card, index) => (
            <Card key={index} Post={card} />
          ))}
        </div>

        {/* 
          <div className="flex gap-5 mt-10 justify-around">
            <div className="flex flex-col items-center justify-center gap-4 p-6 bg-emerald-100 px-20 rounded-lg">
              <h1 className="text-4xl font-bold">123</h1>
              <p className="text-xl">Total Post</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-6 bg-emerald-100 px-20 rounded-lg">
              <h1 className="text-4xl font-bold">123</h1>
              <p className="text-xl">Total Post</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-6 bg-emerald-100 px-20 rounded-lg">
              <h1 className="text-4xl font-bold">123</h1>
              <p className="text-xl">Total Post</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-6 bg-emerald-100 px-20 rounded-lg">
              <h1 className="text-4xl font-bold">123</h1>
              <p className="text-xl">Total Post</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 mt-12 px-28 ">
            <div className="text-left p-7 flex flex-col gap-5 text-xl ">
              <p>
                <strong>First Name:</strong> Meet
              </p>
              <p>
                <strong>Last Name:</strong> Turpara
              </p>
              <p>
                <strong>Gender:</strong> Male
              </p>
              <p>
                <strong>Occupation:</strong> XYZ
              </p>
            </div>

            <div className="text-left p-7 flex flex-col gap-5 text-xl ">
              <p>
                <strong>Date of Birth:</strong> 15 June
              </p>
              <p>
                <strong>Village:</strong> XYZ
              </p>
              <p>
                <strong>City:</strong> XYZ
              </p>
              <p>
                <strong>State:</strong> XYZ
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-20 mt-10">
            <Link to="/User/EditProfile" className="bg-emerald-800 px-20 py-2 text-white font-semibold text-xl rounded-lg">
              Edit Profile
            </Link>
            <button className="bg-emerald-800 px-20 py-2 text-white font-semibold text-xl rounded-lg">
              My Post
            </button>
            <button className="bg-emerald-800 px-20 py-2 text-white font-semibold text-xl rounded-lg">
              My Post
            </button>
          </div> */}
      </div>
    </div>
  );
};

export default UserDetails;
