"use client";

import React, { useState } from "react";
import axios from "axios";
import Header from "@/Components/Header";
import Marks from "@/Components/Marks";
import MainContent from "@/Components/MainContent";
const page = () => {
  const [name, setname] = useState();
  return (
    <div>
      <Marks />
      <MainContent name="YamJam" />
    </div>
  );
};
export default page;
