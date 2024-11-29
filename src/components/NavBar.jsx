import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </a>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex md:flex-1 md:justify-center md:space-x-8">
            <NavLink to="/" className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </NavLink>
            <NavLink to="/about" className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              About
            </NavLink>
            <NavLink to="/contact" className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </NavLink>
            <NavLink to="/projects" className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              Projects
            </NavLink>
          </div>

          {/* Button Section - Hidden on mobile */}
          <div className="hidden md:flex md:items-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
              Connect With Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </NavLink>
            <NavLink to="/about" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              About
            </NavLink>
            <NavLink to="/contact" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </NavLink>
            <NavLink to="/projects" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Projects
            </NavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="px-2">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-base font-medium">
                Connect With Me
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar