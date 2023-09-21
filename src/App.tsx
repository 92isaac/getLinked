import { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "./utils/LoadingSpinner";
import Contact from "./routes/Contact";

const SharedLayout = lazy(() => import("./routes/SharedLayout"));
const TimeLine = lazy(() => import("./routes/Timeline"));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<TimeLine />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
