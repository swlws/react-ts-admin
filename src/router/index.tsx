import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Product = React.lazy(() => import("src/views/home/index"));
const Theory = React.lazy(() => import("src/views/about/index"));
const State = React.lazy(() => import("src/views/state/index"));

export default function AppRouters() {
  return (
    <Suspense fallback={<div>loading... </div>}>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/about" element={<Theory />} />
        <Route path="/state" element={<State />} />
      </Routes>
    </Suspense>
  );
}
