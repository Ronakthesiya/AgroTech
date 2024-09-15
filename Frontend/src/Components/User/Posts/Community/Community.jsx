import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Card from "../../../Layout/Card/PostCard/PostCard";

// const CardList = [
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ngnJrmv1U7SqUhAQGqNg7QCFNxnCXT-4CAR0SzxyvO7ueGGtSRAqsxe7CypKXoQ1rRA&usqp=CAU",
//     title: "Card Title 1",
//     description: "This is a brief description of the card.This is a brief description of the card.This is a brief description of the card.This is a brief description of the card.This is a brief description of the card.",
//     likedCount: 10,
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ngnJrmv1U7SqUhAQGqNg7QCFNxnCXT-4CAR0SzxyvO7ueGGtSRAqsxe7CypKXoQ1rRA&usqp=CAU",
//     title: "Card Title 2",
//     description: "This is another brief description of the card.",
//     likedCount: 20,
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ngnJrmv1U7SqUhAQGqNg7QCFNxnCXT-4CAR0SzxyvO7ueGGtSRAqsxe7CypKXoQ1rRA&usqp=CAU",
//     title: "Card Title 3",
//     description: "This is another brief description of the card.",
//     likedCount: 23,
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ngnJrmv1U7SqUhAQGqNg7QCFNxnCXT-4CAR0SzxyvO7ueGGtSRAqsxe7CypKXoQ1rRA&usqp=CAU",
//     title: "Card Title 1",
//     description: "This is a brief description of the card.",
//     likedCount: 10,
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ngnJrmv1U7SqUhAQGqNg7QCFNxnCXT-4CAR0SzxyvO7ueGGtSRAqsxe7CypKXoQ1rRA&usqp=CAU",
//     title: "Card Title 2",
//     description: "This is another brief description of the card.",
//     likedCount: 20,
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ngnJrmv1U7SqUhAQGqNg7QCFNxnCXT-4CAR0SzxyvO7ueGGtSRAqsxe7CypKXoQ1rRA&usqp=CAU",
//     title: "Card Title 3",
//     description: "This is another brief description of the card.",
//     likedCount: 23,
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ngnJrmv1U7SqUhAQGqNg7QCFNxnCXT-4CAR0SzxyvO7ueGGtSRAqsxe7CypKXoQ1rRA&usqp=CAU",
//     title: "Card Title 1",
//     description: "This is a brief description of the card.",
//     likedCount: 10,
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ngnJrmv1U7SqUhAQGqNg7QCFNxnCXT-4CAR0SzxyvO7ueGGtSRAqsxe7CypKXoQ1rRA&usqp=CAU",
//     title: "Card Title 2",
//     description: "This is another brief description of the card.",
//     likedCount: 20,
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ngnJrmv1U7SqUhAQGqNg7QCFNxnCXT-4CAR0SzxyvO7ueGGtSRAqsxe7CypKXoQ1rRA&usqp=CAU",
//     title: "Card Title 3",
//     description: "This is another brief description of the card.",
//     likedCount: 23,
//   },
// ];


const Community = () => {


  const [cards, setCards] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/posts/get-all-post");
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      setCards(data.data); // Assuming the response is an array of posts
      console.log(data)
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  fetchPosts();
}, []);

if (loading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error: {error}</div>;
}

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold">Community</h2>

        <Link
          className="flex items-center justify-center p-2 bg-[#235347] text-white rounded-lg shadow-lg hover:bg-[#1b3b33] cursor-pointer"
          to={"/User/AddPost"}
        >
          <FaPlus />
          <div className="ml-2">Add Post</div>
        </Link>
      </div>
      <div className="bg-[#235347] h-[3px] w-full mb-4"></div>

      {/* <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}> */}
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {cards.map((card, index) => (
          <Card
            key={index}
            Post={card}
          />
        ))}
      </div>
    </div>
  );
};

export default Community;