import React from "react";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from '../src/Components/Home.js';
import Username from '../src/Components/Username.js';
import Password from '../src/Components/Password.js';
import Register from '../src/Components/Register.js';
import Profile from '../src/Components/Profile.js';
import Recovery from '../src/Components/Recovery.js';
import Reset from '../src/Components/Reset.js';
import { AuthorizeUser,ProtectRoute } from "./middleware/auth";
import HomePrograms from "./Components/HomePrograms.js";
import WeightLoss from "./Components/WeightLoss.js";
import WeightGain from "./Components/WeightGain.js";
import Gymtraining from "./Components/Gymtraining.js";

const router = createBrowserRouter([
  {
    path:"/",
    element:<div><Home /></div>
  },
  {
    path:"/login",
    element:<div><Username/></div>
  },
  {
    path:"/password",
    element:<ProtectRoute><Password/></ProtectRoute>
  },
  {
    path:"/register",
    element:<div><Register/></div>
  },
  {
    path:"/profile",
    element:<AuthorizeUser><Profile/></AuthorizeUser>
  },
  {
    path:"/recovery",
    element:<div><Recovery/></div>
  },
  {
    path:"/reset",
    element:<div><Reset/></div>
  },
  {
    path:"/programs",
    element:<AuthorizeUser><HomePrograms /></AuthorizeUser>
  },
  {
    path:"/weightloss",
    element:<AuthorizeUser><WeightLoss /></AuthorizeUser>
  },
  {
    path:"/weightgain",
    element:<AuthorizeUser><WeightGain /></AuthorizeUser>
  },
  {
    path:"/gymtraining",
    element:<AuthorizeUser><Gymtraining/></AuthorizeUser>
  }

])

function App() {
  return (
    <main>
      <RouterProvider router={router}>

      </RouterProvider>
    </main>
  );
}

export default App;

