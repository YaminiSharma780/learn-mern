"use client"
import React, { useState } from "react";
import Link from "next/link";
import page from "@/app/page";
const Header = () => {
  return (
    // Using Tailwind CSS
    <div className="h-10 px-4 bg-black text-white flex items-center justify-between">
      <div className="">
        <Link href='/'><h2>Home</h2></Link>
      </div>
      <div className="flex gap-8">
        <Link href="/About"><h2>About</h2></Link>
        <Link href="/Products"><h2>Products</h2></Link>
        <Link href="/Blog"><h2>Blog</h2></Link>
        <Link href="/Account"><h2>Account</h2></Link>
      </div>
    </div>
  );
};
export default Header;
