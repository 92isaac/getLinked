import { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "./utils/LoadingSpinner";

const Contact = lazy(() => import("./routes/Contact"));
const Register = lazy(() => import("./routes/Register"));
const FaskQ = lazy(() => import("./routes/FaskQ"));
const Overview = lazy(() => import("./routes/Overview"));
const SharedLayout = lazy(() => import("./routes/SharedLayout"));
const TimeLine = lazy(() => import("./routes/Timeline"));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<TimeLine />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/faqs" element={<FaskQ />} />
          <Route path="/overview" element={<Overview />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
