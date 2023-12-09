import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import Home from "./pages/Home";

//Cấu hình redux
import { Provider } from "react-redux";
import { store } from "./redux/store";
import UseStateDemo from "./pages/hook/UseStateDemo";
import ChangeProfile from "./pages/hook/ExUseState/ChangeProfile";
import UseEffect_DidMount from "./pages/hook/UseEffectDemo/UseEffect_DidMount";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />} />
          <Route path="/use-state-demo" element={<UseStateDemo/>} />
          <Route path="/use-state-change-profile" element={<ChangeProfile/>} />
          <Route path="/use-effect-didmount" element={<UseEffect_DidMount/>} />

          <Route path="*" element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
