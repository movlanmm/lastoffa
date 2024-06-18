import React, { useEffect } from "react";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";
import { useLocation, useNavigate } from "react-router";
import Toolbar from "./Toolbar";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { loaded, loadingSelector, loadingStart } from "../../redux/lib/loading";
import Loader from "../Loader";

import { adminSelector } from "../../redux/lib/adminSlice";

export default function Index({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const loading = useAppSelector(loadingSelector).loading
  const dispatch = useAppDispatch()
  const admin = useAppSelector(adminSelector)
  const navigate = useNavigate()

  useEffect(() => {
    if (pathname.includes('/admin')) {
      import('../../assets/css/style.bundle.css')
    }
  }, [pathname])

  useEffect(() => {
    dispatch(loadingStart())
    const tmout = setTimeout(() => {
      dispatch(loaded())
    }, 1000)

    return () => {
      clearTimeout(tmout)
    }
  }, [])

  useEffect(() => {
    if (admin.userDetails.role !== 'Admin') {
      navigate('/admin/login')
    }
  }, [admin])





  return (
    <div style={{ pointerEvents: loading ? 'none' : 'all', opacity: loading ? 0.5 : 1 }}>
      {loading && (
        <Loader />
      )}
      <AdminHeader />
      <Toolbar />
      {children}
      <AdminFooter />
    </div>
  );
}