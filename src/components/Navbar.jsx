import {Menu, X} from "lucide-react";
import React from 'react';
import logo from '../assets/logo.png';
import { navItems } from "../constant";
const Navbar = () => {
  return (
    <nav className="  nav.sticky.top-0,z-50.py-3.backdrop-blur-lg.border-b.border-netural-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className="h-10 w-10 mr-2" src={logo} alt="logo"/>
                    <span className="text-xl tracking-tight">NFTMarket</span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className='hidden lg:flex justify-center space-x-12 items-center'>
                   <a href="#" className='py-2 px-3 rounded-md border'>
                    Connect Wallet
                   </a>
                </div>
            </div>
        </div>
    </nav>

  )
}

export default Navbar
