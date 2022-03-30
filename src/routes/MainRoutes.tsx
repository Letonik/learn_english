import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Dictionary from "../pages/Dictionary";
import Layout from "../components/Layout/Layout";
import Training from "../pages/Training";
import Articles from "../pages/Articles";
import Other from "../pages/Other";
import NotFound from "../components/NotFound/NotFound";
import Authorization from "../pages/Authorization";
import Profile from "../pages/Profile";

const MainRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="dictionary" element={<Dictionary />}/>
        <Route path="training" element={<Training />}/>
        <Route path="articles" element={<Articles />}/>
        <Route path="profile" element={<Profile />}/>
        <Route path="other" element={<Other />}/>
      </Route>
      <Route path="authorization" element={<Authorization />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
};

export default MainRoutes;