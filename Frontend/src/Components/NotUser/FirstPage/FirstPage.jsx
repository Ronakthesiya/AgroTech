

import React, { useEffect,useState } from "react";
import hill1 from "./images/hill1.png"; // Adjust paths as needed
import hill2 from "./images/hill2.png";
import hill3 from "./images/hill3.png";
import hill4 from "./images/hill4.png";
import hill5 from "./images/hill5.png";
import Image1 from "./images/Image1.jpg";
import leaf from "./images/leaf.png";
import plant from "./images/plant.png";
import tree from "./images/tree.png";
import { TiLeaf } from "react-icons/ti";
import { IoIosPeople } from "react-icons/io";
import { LuImagePlus } from "react-icons/lu";
import { TbClipboardData } from "react-icons/tb";
import "@fontsource/poppins";



const FirstPage = () => {
  const [activeLink, setActiveLink] = useState('#Home');

  const handleClick = (href) => {
    setActiveLink(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      const text = document.getElementById("text");
      const leaf = document.getElementById("leaf");
      const hill1 = document.getElementById("hill1");
      const hill4 = document.getElementById("hill4");
      const hill5 = document.getElementById("hill5");

      if (text && leaf && hill1 && hill4 && hill5) {
        text.style.marginTop = value * 2.5 + "px";
        leaf.style.top = value * -1.5 + "px";
        leaf.style.left = value * 1.5 + "px";
        hill5.style.left = value * 1.5 + "px";
        hill4.style.left = value * -1.5 + "px";
        hill1.style.top = value * 1 + "px";
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="m-0 p-0">
      <header className="absolute top-0 left-0 w-full py-8 px-24 flex justify-start items-center z-50" style={{fontFamily:"Poppins"}}>
        <h2 className="text-4xl font-bold text-[#359381] mr-[280px]">
          Crop Guard
        </h2>
        <nav className="flex space-x-4 justify-center ms-[-70px]">
          <a
            href="#Home"
            onClick={() => handleClick('#Home')}
            className={`text-[#359381] hover:bg-[#359381] hover:text-white px-4 py-2 rounded-full font-semibold text-xl ${activeLink === '#Home' ? 'bg-[#359381] text-white' : ''}`}
          >
            Home
          </a>
          <a
            href="#About"
            onClick={() => handleClick('#About')}
            className={`text-[#359381] hover:bg-[#359381] hover:text-white px-4 py-2 rounded-full font-semibold text-xl ${activeLink === '#About' ? 'bg-[#359381] text-white' : ''}`}
          >
            About
          </a>
          <a
            href="#Contact"
            onClick={() => handleClick('#Contact')}
            className={`text-[#359381] hover:bg-[#359381] hover:text-white px-4 py-2 rounded-full font-semibold text-xl ${activeLink === '#Contact' ? 'bg-[#359381] text-white' : ''}`}
          >
            Contact
          </a>
          <a
            href="#Service"
            onClick={() => handleClick('#Service')}
            className={`text-[#359381] hover:bg-[#359381] hover:text-white px-4 py-2 rounded-full font-semibold text-xl ${activeLink === '#Service' ? 'bg-[#359381] text-white' : ''}`}
          >
            Service
          </a>
          <a
            href="/login"
            onClick={() => handleClick('/login')}
            className={`text-[#359381] hover:bg-[#359381] hover:text-white px-4 py-2 rounded-full font-semibold text-xl ${activeLink === '/login' ? 'bg-[#359381] text-white' : ''}`}
          >
            Login
          </a>
        </nav>
      </header>

      <section id="Home" className="relative flex justify-center items-center h-screen overflow-hidden" style={{fontFamily:"Poppins"}}>
        <img
          src={hill1}
          alt="hill1"
          id="hill1"
          className="absolute w-full h-auto top-0"
        />
        <img
          src={hill2}
          alt="hill2"
          id="hill2"
          className="absolute w-full h-auto top-0"
        />
        <img
          src={hill3}
          alt="hill3"
          id="hill3"
          className="absolute w-full h-auto top-0"
        />
        <img
          src={hill4}
          alt="hill4"
          id="hill4"
          className="absolute w-full h-auto top-0"
        />
        <img
          src={hill5}
          alt="hill5"
          id="hill5"
          className="absolute w-full h-auto top-0"
        />
        <img
          src={tree}
          alt="tree"
          id="tree"
          className="absolute w-full h-auto top-0  opacity-65"
        />

        <h2
          id="text"
          className="absolute text-8xl font-extrabold text-emerald-950 drop-shadow-2xl text-center "
        >
          Crop Guard
          <p className="text-2xl text-emerald-950 font-bold w-2/3 flex text-center  mx-auto mt-4">
         
            AI-powered detection for healthier crops and higher yields.
          </p>
        </h2>

        <img
          src={leaf}
          alt="leaf"
          id="leaf"
          className="absolute w-full h-auto top-0"
        />
        <img
          src={plant}
          alt="plant"
          id="plant"
          className="absolute w-full h-auto top-0"
        />
      </section>

      <section id="About" className="relative  bg-[#003329] py-24 h-screen flex flex-row p-10 px-20" style={{fontFamily:"Poppins"}}>
        <div className="bg-[#e8ebea] h-100 w-5/6 p-12 ps-0 text-3xl font-bold rounded-2xl ms-12">
          <h1 className="border-b-emerald-95 mb-5 ps-12  text-emerald-950">About</h1>
          <hr className="bg-emerald-950 h-1">
           
          </hr>
          <div className="p-8 pt-12 font-normal text-2xl  text-emerald-950">
           
           <h1 className="font-medium">1. Early Disease Detection and Solutions :</h1>
            <p className="px-6 text-xl">
              Early detection of crop diseases has become a critical aspect of agroecological systems. By identifying and responding to the diseases early, farmers can reduce the risk of crop failure and improve productivity.
            </p>
            <br></br>
            <h1 className="font-medium">2. Boost Crop Productivity with AI :</h1>
            <p className="px-6 text-xl">
            Using advanced algorithms, we help farmers improve crop productivity by detecting and managing plant threats through sustainable practices like crop rotation and biopesticide use.
            </p>

            <br></br>
            <h1 className="font-medium">3. Sustainable Farming with AI Insights :</h1>
            <p className="px-6 text-xl">
            Our AI tool empowers farmers with data-driven insights to adopt eco-friendly pest and disease management practices, ensuring healthier plants and long-term sustainability.
             </p>
              
          </div>
        </div>
        <div className=" h-50 w-1/3 py-auto flex items-center">
          <img
            src={Image1}
            alt="hill1"
            // id="hill1"
            className="relative bg-cover right-20 rounded-lg"
          />
        </div>
      </section>

  
      <section id="Service"className="relative flex justify-center h-screen overflow-hidden " style={{fontFamily:"Poppins"}}>
        <h2
          // id="text"
          className="absolute text-5xl font-bold text-emerald-950 drop-shadow-2xl text-center py-20"
        >
          Services
          <p className="text-2xl text-emerald-950 w-2/3 flex text-center font-medium mx-auto mt-3 py-5">
          Our platform offers comprehensive crop disease detection services, a community for farmer support, 
          disease scanning features for instant diagnosis, 
          and an information hub to guide sustainable farming practices.
          </p>
        </h2>


        <div className="absolute top-[300px] flex flex-row gap-6 z-20 justify-center mx-32 p-6">
          <div className="bg-[#b7eae2] p-10 flex flex-col justify-center border-2 border-emerald-900 rounded-xl shadow-2xl	w-1/4">
              <TiLeaf className="w-36 h-36 self-center mb-4" />
              <h1 className="text-3xl text-center ">Crop Disease Detection</h1>

          </div>
          <div className="bg-[#b7eae2] p-10 flex flex-col justify-center border-2 border-emerald-900 rounded-xl shadow-2xl w-1/4">
            <IoIosPeople className="w-36 h-36 self-center mb-4 " />
            <h1 className="text-3xl text-center">Community</h1>
          </div>
          <div className="bg-[#b7eae2] p-10 flex flex-col justify-center border-2 border-emerald-900 rounded-xl shadow-2xl w-1/4">
            <LuImagePlus className="w-36 h-36 self-center mb-4" />
            <h1 className="text-3xl text-center">Scan Disease</h1>
          </div>
          <div className="bg-[#b7eae2] p-10 flex flex-col justify-center border-2 border-emerald-900 rounded-xl shadow-2xl w-1/4">
            <TbClipboardData className="w-36 h-36 self-center mb-4" />
            <h1 className="text-3xl text-center"> Disease Information</h1>
          </div>

          
        </div>
        <img
          src={plant}
          alt="plant"
          id="plant"
          className="absolute w-full h-auto top-0"
        />
      </section>

      <section id="Contact" className="h-screen" style={{fontFamily:"Poppins"}}>
        <div className=" bg-[#003329] w-full h-1/2">

        </div>
          <div className="relative flex flex-col top-[-400px]">
            <h2 className=" text-5xl font-bold text-white drop-shadow-2xl text-center py-20 z-50">
              Contacts
              
            </h2>
            <div className=" top-[-100px] flex flex-row gap-6  justify-center mx-32 p-6">
              <div class="max-w-xs mx-5">
                    <div class="bg-white shadow-xl rounded-lg py-3">
                        <div class="photo-wrapper p-2">
                            <img class="w-32 h-32 rounded-full mx-auto" src="https://cdn.pixabay.com/photo/2024/04/11/00/15/ai-generated-8688919_1280.jpg" alt="John Doe"/>
                        </div>
                        <div class="p-2">
                            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Ayush Solanki</h3>
                            <div class="text-center text-gray-400 text-xs font-semibold">
                                <p>Web Developer</p>
                            </div>
                            <table class="text-xs my-3">
                                <tbody><tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                    <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                                </tr>
                                <tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                    <td class="px-2 py-2">+977 9955221114</td>
                                </tr>
                                <tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                    <td class="px-2 py-2">john@exmaple.com</td>
                                </tr>
                            </tbody></table>

                            <div class="text-center my-3">
                                <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                            </div>

                        </div>
                    </div>
              </div>
              <div class="max-w-xs mx-5">
                    <div class="bg-white shadow-xl rounded-lg py-3">
                        <div class="photo-wrapper p-2">
                            <img class="w-32 h-32 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Z8a9szVGzDmMBJFpcFlG-yt66EBUctXipQ&s" alt="John Doe"/>
                        </div>
                        <div class="p-2">
                            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Meet Tarpara</h3>
                            <div class="text-center text-gray-400 text-xs font-semibold">
                                <p>Web Developer</p>
                            </div>
                            <table class="text-xs my-3">
                                <tbody><tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                    <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                                </tr>
                                <tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                    <td class="px-2 py-2">+977 9955221114</td>
                                </tr>
                                <tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                    <td class="px-2 py-2">john@exmaple.com</td>
                                </tr>
                            </tbody></table>

                            <div class="text-center my-3">
                                <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                            </div>

                        </div>
                    </div>
              </div>
              <div class="max-w-xs mx-5">
                    <div class="bg-white shadow-xl rounded-lg py-3">
                        <div class="photo-wrapper p-2">
                            <img class="w-32 h-32 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIyUPa5mmgGYGk-VW7rk5GGMfL2OO_knedg&s" alt="John Doe"/>
                        </div>
                        <div class="p-2">
                            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Shatru Gohil</h3>
                            <div class="text-center text-gray-400 text-xs font-semibold">
                                <p>Web Developer</p>
                            </div>
                            <table class="text-xs my-3">
                                <tbody><tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                    <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                                </tr>
                                <tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                    <td class="px-2 py-2">+977 9955221114</td>
                                </tr>
                                <tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                    <td class="px-2 py-2">john@exmaple.com</td>
                                </tr>
                            </tbody></table>

                            <div class="text-center my-3">
                                <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                            </div>

                        </div>
                    </div>
              </div>
              <div class="max-w-xs mx-5">
                    <div class="bg-white shadow-xl rounded-lg py-3">
                        <div class="photo-wrapper p-2">
                            <img class="w-32 h-32 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Z8a9szVGzDmMBJFpcFlG-yt66EBUctXipQ&s" alt="John Doe"/>
                        </div>
                        <div class="p-2">
                            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Ronak Thesiya</h3>
                            <div class="text-center text-gray-400 text-xs font-semibold">
                                <p>Web Developer</p>
                            </div>
                            <table class="text-xs my-3">
                                <tbody><tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                    <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                                </tr>
                                <tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                    <td class="px-2 py-2">+977 9955221114</td>
                                </tr>
                                <tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                    <td class="px-2 py-2">john@exmaple.com</td>
                                </tr>
                            </tbody></table>

                            <div class="text-center my-3">
                                <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                            </div>

                        </div>
                    </div>
              </div>
            </div>
            <p className="text-lg text-emerald-900  flex text-center font-medium mt-20 py-5 mx-80">
            Our AI-powered platform helps farmers detect plant diseases early, offering real-time solutions to protect crops and boost yields. 
            With advanced scanning, expert insights, and a supportive community, we empower growers to achieve sustainable, healthy harvests.
          </p>

        </div>
      </section> 

    </div>
  );
};

// export default ParallaxPage;

export default FirstPage;