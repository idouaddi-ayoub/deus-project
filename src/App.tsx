import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
// import NoMatch from "./Pages/NoMatch";
import Aboutus from "./Pages/Aboutus";
import Membership from "./Pages/Membership";
import Game from "./Pages/Game";
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

const App = () => {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/aboutus" element={<Aboutus />}></Route>
            <Route path="/games" element={<Game />}></Route>
            <Route path="/membership" element={<Membership />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  );
};

export default App;
