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
import UseEffect_DidUpdate from "./pages/hook/UseEffectDemo/UseEffect_DidUpdate";
import UseEffect_UnMount from "./pages/hook/UseEffectDemo/UseEffect_UnMount";
import ExChatDemo from "./pages/hook/ExHookRedux/ExChatDemo";
import ExChangeFontSize from "./pages/hook/ExHookRedux/ExChangeFontSize";
import CRUDProductHook from "./pages/hook/ExHookRedux/CRUDProduct/CRUDProductHook";
import HookUseCallBack from "./pages/hook/ExHookUseCallBack/HookUseCallBack";
import ExHookUseMemo from "./pages/hook/ExHookUseMemo/ExHookUseMemo";
import ExHookUseRef from "./pages/hook/ExHookUseRef/ExHookUseRef";
import ExHookFormik from "./pages/hook/ExHookFormik/ExHookFormik";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import TrangChuCustomHook from "./pages/TrangChuCustomHook"
import AntDemo from "./pages/AntDesign/AntDemo";

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
          <Route path="/use-effect-didupdate" element={<UseEffect_DidUpdate/>} />
          <Route path="/use-effect-unmount" element={<UseEffect_UnMount/>} />
          <Route path="/ex-hook-redux" element={<ExChatDemo/>} />
          <Route path="/ex-change-fontsize-hook-redux" element={<ExChangeFontSize/>} />
          <Route path="/ex-crud-product" element={<CRUDProductHook/>} />
          <Route path="/ex-hook-usecallback" element={<HookUseCallBack/>} />
          <Route path="/ex-hook-usememo" element={<ExHookUseMemo/>} />
          <Route path="/ex-hook-useRef" element={<ExHookUseRef/>} />
          <Route path="/ex-hook-formik" element={<ExHookFormik/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/detail">
            <Route path=":id" element={<Detail/>}></Route>
          </Route>
          <Route path="/search" element={<Search/>} />
          <Route path="/home-custom-hook" element={<TrangChuCustomHook/>} />
          <Route path="/ant-demo" element={<AntDemo/>} />
          <Route path="*" element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
