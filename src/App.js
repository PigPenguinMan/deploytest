
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import History from './pages/History';
import Home from './pages/Home';
import Layout from './pages/Layout';
import SearchBar from './pages/MedicalCourse';
import MyPage from './pages/Mypage';
import SignUp from './pages/SignUp';
import Hospital from './json/Hospital.json';
import Filter from './components/Filter';
import MajorDetail from './components/MajorDetail';
import MajorDetailInfo from './components/MajorDetailInfo';
import PlaceDetail from './components/PlaceDetail';
import PlaceDetailInfo from './components/PlaceDetailInfo';
import Reservation from './components/Reservation';
import { DataProvider } from './data/DataContext';
import Main from './pages/Main';
import Login_C from './pages/Login_C';
import Question from './components/Question';
import FirebaseSignUp from './pages/FirebaseSignUp';
import HomeT from './pages/hometest';
import FirebaseLogin from './components/FirebaseLogin';
import Review from './pages/Review';
import DetailInfo from './pages/DetailInfo';
import Medicine from './pages/Medicine';
import EditProfile from './pages/EditProfile';
import SearchNear from './components/SearchNear';
import Reservation2 from './components/Reservation2';
import Opening from './pages/Opening';



function App() {
  return (
    <div className="App ">
      <DataProvider>
        <Routes>
            <Route index element={<Opening/>}></Route>
          <Route path='/' element={<Layout />}>
            <Route path='/home' element={<Home/>} />
            <Route path='/history' element={<History />} />
            <Route path='/mypage' element={<MyPage />} />
            <Route path='/review' element={<Review />}></Route>
          </Route>
            <Route path='/searchhospital' element={<SearchBar />}/>
            <Route path='/loginc' element={<Login_C />} />
            <Route path='/question' element={<Question/>}/>
            <Route path='/usersignup' element={<FirebaseSignUp />} />
            <Route path='/main' element={<Main />} />
            <Route path='/firebaselogin' element={<FirebaseLogin />} />
            <Route path='/filter' element={<Filter />}></Route>
            <Route path='placedetail/:id/' element={<PlaceDetail />}/>
            <Route path='/majordetail/:id/' element={<MajorDetail />}/>
            <Route path='/majordetail/:id/:majorid' element={<MajorDetailInfo />} > </Route>
            <Route path='/placedetail/:id/:placeid' element={<PlaceDetailInfo />} > </Route>
            <Route path='/reservation/:bookid' element={<Reservation />}></Route>
            <Route path='/editprofile' element={<EditProfile/>}></Route>
            <Route path='/searchnear' element={<SearchNear/>}></Route>
            <Route path='/medicine' element={<Medicine/>}></Route>
            <Route path='/reservation2' element={<Reservation2/>}></Route>
            <Route path='/detailinfo' element={<DetailInfo />}></Route>

        </Routes>
      </DataProvider>
    </div>

  );
}

export default App;
