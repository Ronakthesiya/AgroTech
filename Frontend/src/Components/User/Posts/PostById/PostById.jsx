import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaPlus,
  FaRegThumbsUp,
  FaRegUserCircle,
  FaThumbsUp,
} from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import { TfiCommentAlt } from "react-icons/tfi";
import { Link, useParams } from "react-router-dom";

const PostById = () => {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  var { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const res1 = await axios.get(
        "http://localhost:3000/api/v1/posts/post/" + id
      );
      setPost(res1.data.data);

      const res2 = await axios.get(
        "http://localhost:3000/api/v1/comments/all-comment/" + id
      );
      setComments(res2.data.data);
      console.log(res2.data.data);
    };

    fetch();
  }, [newComment]);

  // console.log(post);
  const postObj = post[0];
  // console.log("hsfdagsjh", postObj);
  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async () => {
    let id = localStorage.getItem("UserID");
    if (newComment.trim()) {
      // setComments([...comments, { user: "NewUser", text: newComment }]);

      const response = await axios.post(
        `http://localhost:3000/api/v1/comments/add-comment/${id}/${postObj._id}`,
        { content: newComment }
      );

      console.log(response);

      setNewComment("");
    }
  };

  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    // add like in API liked count
    setLiked(!liked);
  };

  var likedCount = 12;
  return (
    <>
      {postObj != null ? (
        <div>
          <div className="flex justify-between items-center mb-3 mx-10 pt-6">
            <h2 className="text-5xl font-bold">Post</h2>

            <Link
              className="flex items-center justify-center p-2 bg-[#235347] text-white rounded-lg shadow-lg hover:bg-[#1b3b33] cursor-pointer"
              to={"/User/AddPost"}
            >
              <FaPlus />
              <div className="ml-2">Add Post</div>
            </Link>
          </div>
          <div className="bg-[#235347] h-[3px] w-full mb-2"></div>

          <div className="flex flex-row mt-10 m-12 h-[700px]">
            <div class="rounded overflow-hidden shadow-lg flex flex-col w-3/5">
              <a href="#"></a>
              <div class="relative p-2 bg-white">
                <a href="#">
                  <img
                    class="w-full rounded-sm"
                    src={postObj.image}
                    alt="Sunset in the mountains"
                  />
                  <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                </a>
              </div>
              <div class="px-6 py-4 mb-auto flex-1 bg-white pt-6">
              <p className="text-xl font-bold mb-2">{postObj.username}</p>

                <a
                  href="#"
                  class="font-bold text-2xl inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
                >
                  Title : {postObj.title}
                </a>

                
                <p class="text-gray-500 text-md"><span className="text-md font-semibold">Description : </span>{postObj.description}</p>
              </div>

              <div class="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                <span
                  href="#"
                  class="py-1 text-xl font-regular text-gray-900 mr-1 flex flex-row items-center"
                >
                  <FaRegThumbsUp className="text-xl"/>
                  <span class="ml-1 text-xl">{postObj.likesCount} Likes</span>
                </span>

                <span
                  href="#"
                  class="py-1 textxls font-regular text-gray-900 mr-1 flex flex-row items-center"
                >
                  <TfiCommentAlt className="text-xl"/>
                  <span class="ml-1 text-xl">{postObj.commentCount} Comments</span>
                </span>
              </div>
            </div>

            <div className=" bg-white w-2/5  flex flex-col shadow-lg">
              <h2 className="text-xl font-semibold p-2 py-3 m-2  border-b-4 border-emerald-900">Comments</h2>
              {/* <div className="bg-[#235347] h-[3px] w-full mb-4"></div> */}
              <div className="flex-1 overflow-y-auto bg-white max-h-[calc(100vh-6rem)] overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-100">
                  {comments.map((comment, key) => (
                    <div
                      id={key}
                      className="bg-gray-200 p-4 m-2 rounded-lg shadow-md"
                    >
                      <div className="flex block mb-2">
                        <img
                          className="w-8 h-8 rounded-full object-cover mr-2"
                          src={comment.avatar[0]}
                          alt={comment.username[0]}
                        />
                        <h3 className="text-lg font-bold">
                          {comment.username[0]}
                        </h3>
                      </div>
                      
                      <p className="text-gray-700 text-lg">{comment.content}</p>
                      <p className="text-gray-700 text-sm text-right mb-2">
                        {comment.createdAt}
                      </p>
                    </div>
                  ))}
                </div>
              <div>
                <div className="mt-4 flex bg-gray-200 p-2 ">
                  <textarea
                    value={newComment}
                    onChange={handleCommentChange}
                    rows="1"
                    className="w-full  p-2 border border-gray-300 rounded-lg resize-none"
                    placeholder="Add a comment..."
                  />
                  <button
                    onClick={handleCommentSubmit}
                    className="flex h-10 ml-3 items-center justify-center p-3 bg-[#235347] text-white rounded-lg shadow-lg hover:bg-[#1b3b33] cursor-pointer"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default PostById;
