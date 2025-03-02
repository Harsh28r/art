"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, SlidersHorizontal, Menu } from "lucide-react"

export default function Header({ toggleSidebar }: { toggleSidebar?: () => void }) {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="bg-white border-b border-gray-200 py-3 px-4 flex items-center justify-between">
      <div className="flex items-center lg:hidden">
      
      </div>

      <div className="flex-1 max-w-xl mx-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="Search here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-gray-700">
          <SlidersHorizontal className="h-5 w-5" />
          <span className="ml-1 text-sm font-medium hidden sm:inline">Filters</span>
        </button>

        <Link
          href="/become-seller"
          className="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90"
        >
          Become a Seller
        </Link>
      </div>
    </header>
  )
}

