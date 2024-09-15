import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const ListDisease = [
  {
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkXkr5Chko-9HlGdzdk3iBDmS4C4kW2vJhLA&s",
    DiseaseName: "Leaf Blight",
    PlantName: "Tomato",
    Solution:
      "Remove affected leaves and use copper-based fungicides to control the spread.",
  },
  {
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD9uPWT5YRN2bhK2MTjPw1R85RCZ9Ygxw4wg&s",
    DiseaseName: "Powdery Mildew",
    PlantName: "Rose",
    Solution:
      "Apply sulfur or potassium bicarbonate early to prevent the disease. Increase airflow around the plants.",
  },
  {
    Image:
      "https://us-central1-plantix-8e0ce.cloudfunctions.net/v1/image/w400/6d711afc-f7b7-4227-8fb6-1363b5e98a8e",
    DiseaseName: "Root Rot",
    PlantName: "Cucumber",
    Solution:
      "Improve soil drainage, reduce watering, and consider using fungicide if the problem persists.",
  },
  {
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDW0T_88fN0wWkoBy5y1X2jfo1_alacKT8VA&s",
    DiseaseName: "Black Spot",
    PlantName: "Rose",
    Solution:
      "Remove infected leaves and use a fungicide. Keep the foliage dry and improve air circulation.",
  },
  {
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXiKygLgLXsdxePEkZdDP-DFPqLiyO7NBRig&s",
    DiseaseName: "Downy Mildew",
    PlantName: "Grapevine",
    Solution:
      "Use copper fungicides and improve drainage. Ensure good air circulation around the plants.",
  },
  
 {
  DiseaseName: "Leaf Spot",
  PlantName: "Tomato",
  Solution: "Use disease-resistant varieties",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSty8WTpOgwBF6h38r6QvniuRq9s1_Mz3MV9A&s"
 },
 {
  DiseaseName: "Powdery Mildew",
  PlantName: "Cucumber",
  Solution: "Apply sulfur-based fungicides",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBYon9eDU-2JoKRhEbXlKp4EjNbu_H8tNrbQ&s"
 },
 {
  DiseaseName: "Downy Mildew",
  PlantName: "Lettuce",
  Solution: "Improve drainage and apply fungicides",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg2uHdCcp1tBzYaf7JZzfHD8iRziWFPahbWA&s"
 },
 {
  DiseaseName: "Bacterial Blight",
  PlantName: "Beans",
  Solution: "Use disease-free seeds and copper-based bactericides",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRanniEjOdLCg7nAEz643FvptjsmRalvklTVQ&s"
 },
 {
  DiseaseName: "Tomato Mosaic Virus",
  PlantName: "Tomato",
  Solution: "Use virus-free seeds and disinfect tools",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR6vJcDrCsHRDtYthl6XMbnD0AlqQ3NpwyxA&s"
 },
 {
  DiseaseName: "Apple Scab",
  PlantName: "Apple",
  Solution: "Use resistant apple varieties and fungicides",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7Je_AgVzAhyxvUsJZa6cqC4e3MBV9b5f7Q&s"
 },
 {
  DiseaseName: "Gray Mold",
  PlantName: "Grape",
  Solution: "Improve airflow and apply fungicides",
  Image: "https://www.vineforecast.com/wp-content/uploads/2021/10/botrytis-cinerea-21.jpeg"
 },
 {
  DiseaseName: "Rust",
  PlantName: "Pea",
  Solution: "Use rust-resistant varieties and fungicides",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBK-rE7gnw2JcSiBdmLYRIaldDb2xEN4UKhA&s"
 },
 {
  DiseaseName: "Blight",
  PlantName: "Potato",
  Solution: "Rotate crops and use fungicides",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOtqPA_tz5UHCmjeZUGsCLwwwMSyreBjHQw&s"
 },
 {
  DiseaseName: "Canker",
  PlantName: "Citrus",
  Solution: "Prune affected areas and apply fungicides",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmcrNfJWbkFR67LWaJ5ZeDJgScRXzNviuSDg&s"
 },
 {
  DiseaseName: "Black Spot",
  PlantName: "Rose",
  Solution: "Apply fungicides and prune affected areas",
  Image: "https://www.rhs.org.uk/getmedia/C141277B-F425-4550-B335-A2D53C657E12/PUB0004498_920494"
 },
 {
  DiseaseName: "Wilt",
  PlantName: "Lettuce",
  Solution: "Improve soil drainage and use disease-resistant varieties",
  Image: "https://img.wonderhowto.com/img/36/11/63532148254707/0/make-soggy-wilted-lettuce-other-leafy-greens-edible-again.w1456.jpg"
 },
 {
  DiseaseName: "Cercospora Leaf Spot",
  PlantName: "Beet",
  Solution: "Use fungicides and remove infected leaves",
  Image: "https://cdn.mos.cms.futurecdn.net/wURC2vkVGV5mPJ3XuRF8sQ.jpg"
 },
 {
  DiseaseName: "Septoria Leaf Spot",
  PlantName: "Tomato",
  Solution: "Apply copper-based fungicides and remove affected leaves",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7cFgxCDNpDU5-iONdVBdhu3noKXztH2evA&s"
 },
 {
  DiseaseName: "Fusarium Wilt",
  PlantName: "Cucumber",
  Solution: "Use resistant varieties and improve soil health",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMCbYcFG2y5aNttIc46zuLViNtyp8XeDhtUA&s"
 },
 {
  DiseaseName: "Anthracnose",
  PlantName: "Pepper",
  Solution: "Apply fungicides and avoid overhead watering",
  Image: "https://plant-pest-advisory.rutgers.edu/wp-content/uploads/2014/01/Pepper-Anthracnose.jpg"
 },
 {
  DiseaseName: "Sclerotinia Rot",
  PlantName: "Lettuce",
  Solution: "Improve airflow and apply fungicides",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGWJ5qq3aULk4-nt7fNtX10wSS2cs5Vf5Zg&s"
 },
 {
  DiseaseName: "Mosaic Virus",
  PlantName: "Squash",
  Solution: "Use virus-resistant varieties and remove infected plants",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutcXDZy8YKk25onCKB0HKQ_hv6JZDPkFJ8g&s"
 },
 {
  DiseaseName: "Verticillium Wilt",
  PlantName: "Eggplant",
  Solution: "Use resistant varieties and improve soil drainage",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG12Z9aOaF-EIGIHPe7EAib1myP8-ZVrC5tw&s"
 },
 {
  DiseaseName: "Erwinia Soft Rot",
  PlantName: "Potato",
  Solution: "Avoid waterlogging and use disease-resistant varieties",
  Image: "data:image/jpeg;base64,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"
 },
 {
  DiseaseName: "Phytophthora Blight",
  PlantName: "Pepper",
  Solution: "Use fungicides and improve soil drainage",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmHp_AgKIn-ANnjfAMPtGzfry6ZCGliHwQbg&s"
 },
 {
  DiseaseName: "Alternaria Blight",
  PlantName: "Carrot",
  Solution: "Apply fungicides and use resistant varieties",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr3bVyD57D4ptIbYzCq6Omfxpmy5UDMt_Yag&s"
 },
 {
  DiseaseName: "Pea Early Blight",
  PlantName: "Pea",
  Solution: "Apply fungicides and improve airflow",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_aC_pj56uigA0vquB05TOynIGcDfqmnpjg&s"
 },
 {
  DiseaseName: "Pseudomonas Leaf Spot",
  PlantName: "Lettuce",
  Solution: "Use bactericides and remove infected plants",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkyi2gDMQuqn7pn4BS2-ADN136qTT7yHF7qw&s"
 },
 {
  DiseaseName: "Xanthomonas Wilt",
  PlantName: "Corn",
  Solution: "Use resistant varieties and avoid overhead watering",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7_E409eZhiZvveoZRMimjTltA7PJ1cSAx3Q&s"
 },
 {
  DiseaseName: "Oidium",
  PlantName: "Melon",
  Solution: "Apply sulfur-based fungicides and improve airflow",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqPu9C7B2n2ZmJT_oFijzMF7esa7o3Q5cNtw&s"
 },
 {
  DiseaseName: "Mould",
  PlantName: "Strawberry",
  Solution: "Remove infected fruit and apply fungicides",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdgtfczVKR03tT9CCl4IYuLSOUoRrZ5CrKeg&s"
 },
 {
  DiseaseName: "Root Rot",
  PlantName: "Carrot",
  Solution: "Improve soil drainage and use fungicides",
  Image: "http://example.com/roohttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmt8Dzny751b0RfHLsVb8bIVK2P-kIDC5omQ&st_rot.jpg"
 },
 {
  DiseaseName: "Sunscald",
  PlantName: "Tomato",
  Solution: "Provide shade and water regularly",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVWMbatLR-nCG0R5vJhKTl18fBz_GumOSAQ&s"
 },
 {
  DiseaseName: "Downy Spot",
  PlantName: "Spinach",
  Solution: "Apply fungicides and improve air circulation",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4zV8DiVxBSM4OpugFcDwSQWeyH3B8FML5w&s"
 },
 {
  DiseaseName: "Powdery Spot",
  PlantName: "Pumpkin",
  Solution: "Use fungicides and remove infected leaves",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmNWich01w9zWEUL13Bi0pocT9qu9lfwZcZw&s"
 },
 {
  DiseaseName: "Gummy Stem Blight",
  PlantName: "Cucumber",
  Solution: "Remove infected stems and apply fungicides",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSN0EY-KYpPMLCDlrrld_3uLcILQYc_u_6NA&s"
 },
 {
  DiseaseName: "Tomato Yellow Leaf Curl",
  PlantName: "Tomato",
  Solution: "Use resistant varieties and control aphids",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-0TQQY5L7Va_06KsweEkamS1r9kEj9qsiVQ&s"
 },
 {
  DiseaseName: "Apical Rot",
  PlantName: "Pepper",
  Solution: "Improve soil drainage and avoid overwatering",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIJ-lGCSPFzC-67jbkLP-198z7vH3GDk6ZDw&s"
 },
 {
  DiseaseName: "Citrus Greening",
  PlantName: "Citrus",
  Solution: "Use resistant varieties and apply appropriate treatments",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmoM4FgVTj7cD95kFbH7_jjNV5nXpx4un75Q&s"
 },
 {
  DiseaseName: "White Rust",
  PlantName: "Broccoli",
  Solution: "Apply fungicides and avoid waterlogged conditions",
  Image: "http://example.comhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1jefFSW93QUXUDUh0ybjIr4ftwONclIExMw&s/white_rust.jpg"
 },
 {
  DiseaseName: "Grey Leaf Spot",
  PlantName: "Corn",
  Solution: "Apply fungicides and use resistant varieties",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHI10MbkwEpAQYh7nC9xk1GAZjLFg_twf4Pg&s"
 },
 {
  DiseaseName: "Orange Rust",
  PlantName: "Tomato",
  Solution: "Apply fungicides and rotate crops",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW2Ttil0y5ImcsvauGmxpCI4qfMP6A1Q6pAw&s"
 },
 {
  DiseaseName: "Leaf Mold",
  PlantName: "Lettuce",
  Solution: "Improve air circulation and use fungicides",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqq-OzEtvcA6MGGz8SS6RPx2poySgDpkVt-Q&s"
 },
 {
  DiseaseName: "Leaf Roll",
  PlantName: "Spinach",
  Solution: "Apply fungicides and use resistant varieties",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pHOK7Bhkt7OGzOkB3k8PiJ4Z0nfIv8138g&s"
 },
 {
  DiseaseName: "Botrytis Blight",
  PlantName: "Strawberry",
  Solution: "Remove affected fruit and apply fungicides",
  Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Aardbei_Lambada_vruchtrot_Botrytis_cinerea.jpg/640px-Aardbei_Lambada_vruchtrot_Botrytis_cinerea.jpg"
 },
 {
  DiseaseName: "Bacterial Wilt",
  PlantName: "Tomato",
  Solution: "Use disease-free seedlings and improve soil drainage",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvHXaYgfvQkrNfUVzPOAciCASSi9KRKBMU-A&s"
 },
 {
  DiseaseName: "Fusarium Blight",
  PlantName: "Pea",
  Solution: "Use resistant varieties and improve soil health",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjnfF67kxUk7lCw_3HngWuR8vcGuORwrpbmg&s"
 },
 {
  DiseaseName: "Downy Mildew",
  PlantName: "Grape",
  Solution: "Apply fungicides and remove infected leaves",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL6kldCE7xsy8n8YH53BmwGKNegIPfLJjA7w&s"
 },
 {
  DiseaseName: "Rust Fungal",
  PlantName: "Carrot",
  Solution: "Apply fungicides and rotate crops",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjrP8UFz4lxG4vC6dxQawT6Z5EAp6bxlCfwA&s"
 },
 {
  DiseaseName: "Early Blight",
  PlantName: "Tomato",
  Solution: "Apply fungicides and rotate crops",
  Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkXkr5Chko-9HlGdzdk3iBDmS4C4kW2vJhLA&s"
 },
 {
  DiseaseName: "Late Blight",
  PlantName: "Potato",
  Solution: "Use fungicides and remove infected tubers",
  Image: "https://spudsmart.com/wp-content/uploads/2017/05/potato_late-blight_08_zoom-Photo-OMAFRA-900x580.jpeg"
 }

];

const Disease = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDiseases = ListDisease.filter(
    (disease) =>
      disease.DiseaseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disease.PlantName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold">Disease with Solution</h2>
      </div>
      <div className="bg-[#235347] h-[3px] w-full mb-4"></div>

      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search by disease or plant name..."
          className="p-2 w-full border rounded-l-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="p-3 bg-[#235347] text-white rounded-r-md">
          <FaSearch />
        </button>
      </div>

      <div>
        {filteredDiseases.length > 0 ? (
          filteredDiseases.map((disease, index) => (
            <div
              key={index}
              className="p-4 mb-4 border rounded-lg bg-white hover:bg-gray-100"
            >
              <div className="flex items-center">
                <img
                  src={disease.Image}
                  alt={disease.DiseaseName}
                  className="w-20 h-20 object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">
                    {disease.DiseaseName}
                  </h3>
                  <p className="text-md">Plant: {disease.PlantName}</p>
                  <p className="text-md">Solution: {disease.Solution}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No diseases found.</p>
        )}
      </div>

      {/* <div>
        {filteredDiseases.length > 0 ? (
          filteredDiseases.map((disease, index) => (
            <div
              key={index}
              className="p-4 mb-4 border text-white rounded-lg bg-[#235347] hover:bg-[#051F20]"
            >
              <div className="flex items-center">
                <img
                  src={disease.Image}
                  alt={disease.DiseaseName}
                  className="w-20 h-20 object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">
                    {disease.DiseaseName}
                  </h3>
                  <p className="text-md">Plant: {disease.PlantName}</p>
                  <p className="text-md">Solution: {disease.Solution}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No diseases found.</p>
        )}
      </div> */}
    </div>
  );
};

export default Disease;
