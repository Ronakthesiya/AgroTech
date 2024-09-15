
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Sidebar1 from './Components/Layout/Sidebar/Sidebar';
import FirstPage from './Components/NotUser/FirstPage/FirstPage';
import Login from './Components/NotUser/Login/Login';
import Navbar from './Components/NotUser/Navbar/Navbar';
import Register from './Components/NotUser/Register/Register';
import Disease from './Components/User/DiseaseStor/Disease/Disease';
import DiseaseById from './Components/User/DiseaseStor/DiseaseById/DiseaseById';
import AddPost from './Components/User/Posts/AddPost/AddPost';
import Community from './Components/User/Posts/Community/Community';
import MyPost from './Components/User/Posts/MyPost/MyPost';
import PostById from './Components/User/Posts/PostById/PostById';
import EditProfile from './Components/User/Profiles/EditProfile/EditProfile';
import MyProfile from './Components/User/Profiles/MyProfile/MyProfile';
import ProfileById from './Components/User/Profiles/ProfileById/ProfileById';
import SearchProfile from './Components/User/Profiles/SearchProfile/SearchProfile';
import NewScan from './Components/User/Scan/NewScan/NewScan';
import ScanHistory from './Components/User/Scan/ScanHistory/ScanHistory';
import UserDetails from "./Components/User/Profiles/UserDetails/UserDetails";
import ScanbyId from "./Components/User/Scan/ScanbyId/ScanbyId";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/User" element={<Sidebar1/>}>
          
          {/* Post */}
          <Route path='Community' element={<Community/>}></Route>
          <Route path='MyPost' element={<MyPost/>}></Route>
          <Route path='AddPost' element={<AddPost/>}></Route>
          <Route path='Post/:id' element={<PostById/>}></Route>

          {/* Scan */}
          <Route path='NewScan' element={<NewScan/>}></Route>
          <Route path='ScanHistory' element={<ScanHistory/>}></Route>
          <Route path='ScanbyId/:id' element={<ScanbyId/>}></Route>


          {/* DiseaseStor */}
          <Route path='Disease' element={<Disease/>}></Route>
          <Route path='Disease/:id' element={<DiseaseById/>}></Route>

          {/* Profiles */}
          <Route path='MyProfile' element={<MyProfile/>}></Route>
          <Route path="EditProfile" element={<EditProfile/>}></Route>
          <Route path='SearchProfile' element={<SearchProfile/>}></Route>
          <Route path='Profile/:id' element={<ProfileById/>}></Route>
          <Route path='UserDetails/:id' element={<UserDetails/>}></Route>

        </Route>

        <Route path='/' element={<Navbar/>}>
          <Route path='' element={<FirstPage/>}></Route>
          <Route path='Login' element={<Login/>}></Route>
          <Route path='Register' element={<Register/>}></Route>
        </Route>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
