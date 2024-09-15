import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {

    const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    city: "",
    village: "",
    state: "",
    gender: "",
    occupation: "",
  });

  useEffect(() => {
    const id = localStorage.getItem("UserID");

    // Fetch user data from API
    axios
      .get(`http://localhost:3000/api/v1/users/${id}`) // Example API
      .then((response) => {
        setUser(response.data.data); // Set user data to state
      })
      .catch((error) => {
        console.log("Error fetching user data: ", error);
      });
  }, []);

  // Update formData when user data is fetched
  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username || "",
        email: user.email || "",
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        dateOfBirth: user.dateOfBirth ? user.dateOfBirth.split("T")[0] : "",
        city: user.city || "",
        village: user.village || "",
        state: user.state || "",
        gender: user.gender || "",
        occupation: user.occupation || "",
      });
    }
  }, [user]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.patch(`http://localhost:3000/api/v1/users/update-account/${user._id}`, formData); // Update API endpoint as needed
      console.log("Profile updated successfully", response.data);
      // You can handle success feedback here
    } catch (err) {
      setError("Failed to update profile");
      console.error(err);
    } finally {
        navigate("/User/MyProfile")
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-10 m-10 rounded-2xl">
      <span className="bg-emerald-950 p-12  py-3 text-white font-semibold text-2xl relative top-[-50px] rounded-xl">
        Edit Profile
      </span>
      
      <form onSubmit={handleSubmit} className="p-10">
        {/* Form fields */}

        <div className="mb-4">
          <label htmlFor="username" className="block text-lg font-medium mb-3">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block text-lg font-medium mb-3">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-lg font-medium mb-3">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="dateOfBirth" className="block text-lg font-medium mb-3">
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="city" className="block text-lg font-medium mb-3">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="village" className="block text-lg font-medium mb-3">
              Village
            </label>
            <input
              type="text"
              id="village"
              name="village"
              value={formData.village}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="state" className="block text-lg font-medium mb-3">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="gender" className="block text-lg font-medium mb-3">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="occupation" className="block text-lg font-medium mb-3">
            Occupation
          </label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#235347] text-white p-2 rounded-lg shadow-md hover:bg-[#1b3b33] transition duration-300 my-3 py-3 text-xl"
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
