import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import LoginModal from "../components/accountModal/LoginModal";
import StaffLoginModal from "../components/StaffLoginModal";
import Register from "../components/accountModal/Register";
import HomeLayout from "./MainPageComponents/HomeLayout";
import SignupSuccess from "../components/SignupSuccess";
import Deposit from "../components/Deposit";
import DeleteWarning from "../components/Deletewarning";
import ViewContainer from "./MainPageComponents/ViewContainer";
import MyAccount from "./MainPageComponents/MyAccount";
import PaintingsListContainer from "./MainPageComponents/ArtistViewContainer";
import { MainPageContext } from "../components/ContextProvider/MainPageContext";
import ViewByArtistContainer from "./MainPageComponents/ViewByArtistContainer";
import Footer from "../components/Footer";
import $ from "jquery";
export default function MainPage() {
  const path = import.meta.env.VITE_DATA_HOST_API;
  const api = path + "/ArtController/findall";
  const [artistList, setArtisList] = useState([]);
  const [search, setSearch] = useState();
  const getArtistList = async () => {
    try {
      const result = await axios.get(`${api}`);
      setArtisList(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   getArtistList();
  // }, []);

  return (
    <>
      <MainPageContext.Provider
        value={{ artistList, setArtisList, getArtistList, search, setSearch }}
      >
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<ViewContainer />} />
            <Route path="/byArtist" element={<PaintingsListContainer />} />
            <Route path=":id" element={<ViewByArtistContainer />} />
          </Route>
          <Route>
            <Route path="/cusdash" element={<MyAccount />} />
          </Route>
        </Routes>
        {/* modal for navbar vv */}
        <LoginModal></LoginModal>
        <StaffLoginModal></StaffLoginModal>
        <Register></Register>
        <SignupSuccess />
        <DeleteWarning />
        <Deposit />

        {/* modal for navbar ^^ */}
        <Footer />
      </MainPageContext.Provider>
    </>
  );
}
