import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Outlet />
      <div className="fixed bottom-0 left-0 right-0 bg-slate-500 p-4 text-white w-2xl mx-auto text-center">
        &copy; 2024 Twitter from FII Practic
      </div>
    </>
  );
}
